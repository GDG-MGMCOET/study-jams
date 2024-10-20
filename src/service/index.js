export const leaderBoardService = {
  updateParticipantsProgress: async (data, email, password) => {
    try {
      const res = await fetch(
        "https://study-jams-backend.vercel.app/admin/update-participants-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${email}:${password}`)}`, // Consider using Authorization header if needed
          },
          body: JSON.stringify({ participantsInfoArr: data }),
        }
      );

      if (!res.ok) {
        // Check for non-2xx status codes
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const responseData = await res.json();
      return responseData;
    } catch (error) {
      console.error("Failed to update participants progress:", error);
      return { success: false, message: error.message };
    }
  },

  getLeaderBoardData: async () => {
    try {
      const res = await fetch(
        "https://study-jams-backend.vercel.app/participants"
      );

      if (!res.ok) {
        // Check for non-2xx status codes
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const responseData = await res.json();
      return responseData;
    } catch (error) {
      console.error("Failed to fetch leaderboard data:", error);
      return { success: false, message: error.message };
    }
  },
};
