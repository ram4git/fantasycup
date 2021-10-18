export default function Odds({ teamAOdds, teamBOdds }) {
  const teamAProgress = (teamAOdds * 100) / (teamAOdds + teamBOdds);
  const teamBProgress = 100 - teamAProgress;
  return (
    <div className="h-10 flex flex-row gap-0 w-full my-8 rounded-lg shadow-lg">
      <div
        className="bg-gradient-to-r from-blue-900 to-blue-500 text-left"
        style={{ width: `${teamAProgress}%` }}
      >
        <span className=" text-white pl-2 text-2xl font-semibold leading-10 text-left">
          {teamAOdds}
        </span>
      </div>
      <div
        className="bg-gradient-to-r from-red-500 to-red-900 text-right"
        style={{ width: `${teamBProgress}%` }}
      >
        <span className=" text-white pr-2 text-2xl font-semibold leading-10 text-right">
          {teamBOdds}
        </span>
      </div>
    </div>
  );
}
