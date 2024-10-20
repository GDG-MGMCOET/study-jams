function HeroCards({ data, desc }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10 py-5 text-center transition-all bg-white shadow-xl rounded-3xl w-80 hover:scale-110 hover:shadow-zinc-500">
      <h2 className="text-5xl font-black">{data}</h2>
      <p className="">{desc}</p>
    </div>
  );
}

export default function Hero({ data }) {
  let countOfParticipants = data.length,
    countWhichCompletedArcade = 0,
    countWhichCompletedBadges = 0;

  for (let i = 0; i < countOfParticipants; i++) {
    if (data[i].noOfBadges == 15) countWhichCompletedBadges++;
    if (data[i].arcadeGame == 1) countWhichCompletedArcade++;
  }

  return (
    <section>
      <div className="container flex justify-between px-20 mx-auto py-14">
        <HeroCards
          data={countOfParticipants}
          desc="No. of participants enrolled"
        />
        <HeroCards
          data={countWhichCompletedBadges}
          desc="No. of participants which completed 15 Skill Badges"
        />
        <HeroCards
          data={countWhichCompletedArcade}
          desc="No. of participants which completed arcade"
        />
      </div>
      <div className="select-none bg-gray shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <div className="container flex justify-center gap-5 mx-auto text-6xl p-7 drop-shadow-md">
          <h1 className="text-blue">GEN AI</h1>
          <h1 className="text-red">&</h1>
          <h1 className="text-yellow">ARCADE</h1>
          <h1 className="text-green">LEADERBOARD</h1>
        </div>
      </div>
    </section>
  );
}
