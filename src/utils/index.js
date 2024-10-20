import { leaderBoardService } from "../service";
const updateParticipantsProgress = async ({
  email,
  password,
  data,
  showMessage,
  setLoading,
}) => {
  const res = await leaderBoardService.updateParticipantsProgress(
    data,
    email,
    password
  );
  if (res?.success) {
    showMessage({
      type: "success",
      content: "Participants progress updated successfully",
    });
  } else {
    showMessage({
      type: "error",
      content: res ? res.message : "Error updating participants progress",
    });
  }
  setLoading(false);
};

const checkEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const canMakeApiCall = ({
  email,
  password,
  data,
  showMessage,
  setEmailError,
  setPasswordError,
}) => {
  if (password.length === 0) {
    setPasswordError("Please enter a password");
  }
  if (email.length === 0 || !checkEmail(email)) {
    setEmailError("Please enter an email");
  }
  if (
    data.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    !checkEmail(email)
  ) {
    showMessage({
      type: "error",
      content: "All fields are required",
    });
    return false;
  }
  return true;
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedTime = date.toLocaleString("en-IN", options).replace(",", "");
  return formattedTime;
};

const getLeaderBoardData = async ({
  setLeaderBoardData,
  showMessage,
  setLoading,
}) => {
  const res = await leaderBoardService.getLeaderBoardData();
  if (res?.success) {
    setLeaderBoardData({
      lastUpdated: formatDate(res.data.lastUpdated),
      participantsProgress: res.data.participants,
    });
  } else {
    showMessage({
      type: "error",
      content: res ? res.message : "Error fetching LeaderBoard Data",
    });
  }
  setLoading(false);
  return res;
};

export {
  updateParticipantsProgress,
  checkEmail,
  canMakeApiCall,
  getLeaderBoardData,
};
