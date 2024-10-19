function HeroCards({ data, desc }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10 py-5 text-center transition-all bg-white shadow-xl rounded-3xl w-80 hover:scale-110 hover:shadow-zinc-500">
      <h2 className="text-5xl font-black">{data}</h2>
      <p className="">{desc}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section>
      <div className="container flex justify-between px-20 mx-auto py-14">
        <HeroCards data={"21"} desc="No. of participants enrolled" />
        <HeroCards
          data={"1"}
          desc="No. of participants which completed arcade"
        />
        <HeroCards
          data={"9"}
          desc="No. of participants which completed 15 Skill Bades"
        />
      </div>
      <div className="select-none bg-gray">
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
