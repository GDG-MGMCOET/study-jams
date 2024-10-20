import { useState } from "react";
import Papa from "papaparse";
export default function UploadAndParseCsv() {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          if (e.target.files.length === 0) return;

          const file = e.target.files[0];
          if (file.type !== "text/csv") {
            alert("Please upload a valid CSV file."); //will later change with message or flash
            e.target.value = "";
            return;
          }

          Papa.parse(file, {
            complete: function (results) {
              if (
                !results ||
                !results.data ||
                results.data.length === 0 ||
                results.data[0].length !== 10
              ) {
                alert("Please upload a valid CSV file."); //error message
                e.target.value = "";
                return;
              } else {
                const formattedData = [];
                for (let i = 1; i < results.data.length; i++) {
                  if (!results.data[i][0] || results.data[i][3] !== "All Good")
                    continue;
                  const curRow = {
                    name: results?.data[i][0],
                    email: results?.data[i][1],
                    accessCodeRedeemed:
                      results?.data[i][4] === "No" ? false : true,
                    allBadgesCompleted:
                      results?.data[i][5] === "No" ? false : true,
                    noOfBadges: parseInt(results?.data[i][6]),
                    arcadeGame: parseInt(results?.data[i][8]),
                  };
                  formattedData.push(curRow);
                }
                setData(formattedData);
              }
            },
          });
        }}
      />
    </>
  );
}
