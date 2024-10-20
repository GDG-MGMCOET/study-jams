export const leaderBoardService = {
  updateParticipantsProgress: async (data, email, password) => {
    const res = await fetch(
      "http://localhost:3000/admin/update-participants-status",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, participantsInfoArr: data }),
      }
    );
    const responseData = await res.json();
    return responseData;
  },
};
