import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import UploadAndParseCsv from "./uploadAndParseCSV";
import { useState, useEffect } from "react";
import { getLeaderBoardData } from "../utils";
import { message } from "antd";

export default function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = ({ type, content }) => {
    messageApi.open({
      type,
      content,
    });
  };

  const [loading, setLoading] = useState(true);

  const [leaderBoardData, setLeaderBoardData] = useState({
    lastUpdated: Date.now(),
    participantsProgress: [],
  });

  console.log(leaderBoardData);

  useEffect(() => {
    getLeaderBoardData({ setLeaderBoardData, showMessage, setLoading });
  }, []);

  return (
    <div className="h-full font-body bg-bg">
      {contextHolder}
      <Header lastUpdated={leaderBoardData.lastUpdated} />
      <Hero data={leaderBoardData.participantsProgress} />
      <Main data={leaderBoardData.participantsProgress} />
      <Footer />
      <UploadAndParseCsv />
    </div>
  );
}
