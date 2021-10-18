import Dual from '@comps/Dual';
import Odds from '@comps/Odds';

export default function Match(props) {
  const { teamA = 'IND', teamB = 'PAK' } = props;
  return (
    <div className="relative py-10">
      <div className="">
        <div className="py-8">
          <p className="font-bold text-4xl text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700">
              {`${teamA} vs ${teamB}`}
            </span>
          </p>
          <p className="text-center text-white">
            {new Date().toLocaleDateString()}
          </p>
          <p className="text-center text-white">match starts in 22:34 mins</p>
        </div>
        <Dual teamA="IN" teamB="PK" />
        <Odds teamAOdds={63} teamBOdds={37} />
      </div>
      <div className=" bg-blue-900 w-10/12 mx-auto h-16 absolute inset-x-0 -bottom-8 rounded-lg"></div>
    </div>
  );
}
