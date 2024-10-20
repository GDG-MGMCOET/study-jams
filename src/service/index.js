export const leaderBoardService = {
  updateParticipantsProgress: async (data, email, password) => {
    const payload = { email, password, participantsInfoArr: data };
    const res = await fetch(
      "https://study-jams-backend.vercel.app/admin/update-participants-status",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const responseData = await res.json();
    return responseData;
  },
  getLeaderBoardData: async () => {
    const res = await fetch(
      "https://study-jams-backend.vercel.app/participants"
    );
    const responseData = await res.json();
    return responseData;
  },
};
