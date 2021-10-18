import Match from '@comps/Match';
import { useRouter } from 'next/router';
export default function MatchDetails(props) {
  const router = useRouter();
  const { matchId } = router.query;
  return (
    <div className="mx-auto max-w-4xl rounded-lg h-screen  overflow-y-scroll">
      <div className="w-full my-20 rounded-lg shadow-xl backdrop-filter backdrop-blur-sm backdrop-grayscale ">
        <Match />
        <hr />
      </div>
    </div>
  );
}
