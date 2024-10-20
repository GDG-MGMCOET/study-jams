import { ConfigProvider, Input, Table } from "antd";
const { Search } = Input;
import { useState, useEffect } from "react";

function TableTags({ value }) {
  let bgColor = "bg-yellow",
    val = value;
  if (value === true) {
    val = "Yes";
    bgColor = "bg-green";
  }
  if (value === false) {
    val = "No";
    bgColor = "bg-red";
  }

  return (
    <span
      className={`px-3 py-1 font-bold text-center border-[1px] border-black w-14 rounded-xl ${bgColor} inline-block text-base `}
    >
      {val}
    </span>
  );
}

export default function Main({ data, loading }) {
  const [leaderBoardData, setLeaderBoardData] = useState(data);

  useEffect(() => {
    setLeaderBoardData(data);
  }, [data]);

  const columns = [
    {
      title: "Rank",
      key: "rank",
      align: "center",
      render: (_, record, index) => {
        return <p>{index + 1}</p>;
      },
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "17.5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "17.5%",
    },
    {
      title: "Access Code Redemption",
      dataIndex: "accessCodeRedeemed",
      key: "accessCodeRedeemed",
      align: "center",
      render: (_, { accessCodeRedeemed }) => {
        return <TableTags value={accessCodeRedeemed} />;
      },
      width: "15%",
    },
    {
      title: "All Skill Badges & Games Completed",
      dataIndex: "allBadgesCompleted",
      key: "allBadgesCompleted",
      align: "center",
      render: (_, { allBadgesCompleted }) => {
        return <TableTags value={allBadgesCompleted} />;
      },
      width: "15%",
    },
    {
      title: "No. of Skill Badges Completed",
      dataIndex: "noOfBadges",
      key: "noOfBadges",
      align: "center",
      width: "15%",
    },
    {
      title: "No. of Arcade Games Completed",
      dataIndex: "arcadeGame",
      key: "arcadeGame",
      align: "center",
      render: (_, { arcadeGame }) => {
        return <TableTags value={arcadeGame} />;
      },
      width: "15%",
    },
  ];

  return (
    <main className="">
      <div className="container py-10 mx-auto px-96 drop-shadow-xl">
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryActive: "#4285F4",
              colorPrimaryHover: "#3267bf",
              colorPrimary: "#4285F4",
              borderRadius: 20,
            },
          }}
        >
          <Search
            placeholder="Search"
            enterButton
            onChange={(e) => {
              const { value } = e.target;
              const filteredData = data.filter((participant) => {
                return participant.name
                  .toLowerCase()
                  .includes(value.toLowerCase());
              });
              setLeaderBoardData(filteredData);
            }}
          />
        </ConfigProvider>
      </div>
      <div className="container mx-auto mb-10">
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Roboto, sans-serif",
              fontSize: 16,
              borderRadius: 0,
            },
            components: {
              Table: {
                cellPaddingInline: 24,
                headerBg: "#4285F4",
                rowHoverBg: "#D9D9D9",
                borderColor: "#000",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={leaderBoardData}
            bordered
            pagination={false}
            className="shadow-xl rounded-3xl"
            loading={loading}
          />
        </ConfigProvider>
      </div>
    </main>
  );
}
