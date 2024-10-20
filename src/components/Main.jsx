import { ConfigProvider, Input, Table } from "antd";
const { Search } = Input;

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

export default function Main() {
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
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
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
      width: "10%",
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

  const dataSource = [
    {
      key: "1",
      name: "Hriday Budhiraja",
      email: "hriday2602@gmail.com",
      accessCodeRedeemed: true,
      allBadgesCompleted: true,
      noOfBadges: 15,
      arcadeGame: 2,
    },
    {
      key: "2",
      name: "Jeetu Gupta",
      email: "jeetugupta007@gmail.com",
      accessCodeRedeemed: false,
      allBadgesCompleted: false,
      noOfBadges: 9,
      arcadeGame: 1,
    },
    {
      key: "3",
      name: "Hriday Budhiraja",
      email: "hriday2602@gmail.com",
      accessCodeRedeemed: true,
      allBadgesCompleted: true,
      noOfBadges: 15,
      arcadeGame: 2,
    },
    {
      key: "4",
      name: "Jeetu Gupta",
      email: "jeetugupta007@gmail.com",
      accessCodeRedeemed: true,
      allBadgesCompleted: false,
      noOfBadges: 9,
      arcadeGame: 1,
    },
  ];

  return (
    <main className="">
      <div className="container mx-auto py-7 px-96">
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
          <Search placeholder="Search" enterButton onSearch={null} />
        </ConfigProvider>
      </div>
      <div className="container mx-auto mb-7">
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
            dataSource={dataSource}
            bordered
            pagination={false}
            className="shadow-xl rounded-3xl"
          />
        </ConfigProvider>
      </div>
    </main>
  );
}
