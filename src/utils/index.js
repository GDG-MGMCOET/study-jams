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

export { updateParticipantsProgress, checkEmail, canMakeApiCall };
