import { useState } from "react";
import Papa from "papaparse";
import {
  updateParticipantsProgress,
  checkEmail,
  canMakeApiCall,
} from "../utils";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function UploadAndParseCsv() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = ({ type, content }) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      {contextHolder}
      <div className="w-2/5 h-2/5 flex flex-col justify-around">
        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              const { value } = e.target;
              if (emailError.length > 0) setEmailError("");
              setCredentials((prev) => ({ ...prev, email: value }));
            }}
            onBlur={() => {
              if (!checkEmail(credentials.email)) {
                setEmailError("Please enter a valid email");
              }
            }}
          />
          {emailError.length > 0 && (
            <p className="text-sm text-red">{emailError}</p>
          )}
        </div>
        <div className="flex flex-col">
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => {
              const { value } = e.target;
              if (passwordError.length > 0) setPasswordError("");
              setCredentials((prev) => ({ ...prev, password: value }));
            }}
          />
          {passwordError.length > 0 && (
            <p className="text-sm text-red">{passwordError}</p>
          )}
        </div>

        <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            if (e.target.files.length === 0) return;

            const file = e.target.files[0];
            if (file.type !== "text/csv") {
              showMessage({
                type: "warning",
                content: "Please upload a valid CSV file.",
              });
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
                  showMessage({
                    type: "warning",
                    content: "Please upload a valid CSV file.",
                  });
                  e.target.value = "";
                  return;
                } else {
                  const formattedData = [];
                  for (let i = 1; i < results.data.length; i++) {
                    if (
                      !results.data[i][0] ||
                      results.data[i][3] !== "All Good"
                    )
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
        <Button
          loading={loading}
          onClick={() => {
            const call = canMakeApiCall({
              email: credentials.email,
              password: credentials.password,
              data,
              showMessage,
              setEmailError,
              setPasswordError,
            });

            if (call) {
              setLoading(true);
              updateParticipantsProgress({
                data,
                showMessage,
                email: credentials.email,
                password: credentials.password,
                setLoading,
              });
            }
          }}
        >
          Submit
        </Button>
      </div>
    </section>
  );
}
