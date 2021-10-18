import { signIn, signOut, useSession } from "next-auth/react";
import Head from 'next/head';



const TOTAL_BG_IMGS = 3;
const today = new Date().toJSON().slice(8,10);


export default function Home() {
  const bgImage = `/imgs/bg${today % TOTAL_BG_IMGS}.webp`;
  const { data: session } = useSession()

  return (
    <div className="bg-green-500">
      <Head>
        <title>Fantasy T20WC</title>
        <meta name="description" content="Generated irraju@gmail.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-lg mx-auto rounded-lg shadow-lg'>
        {
          session ?
          <>
            Signed in as {session.user.email} <br/>
            <button onClick={() => signOut()}>Sign out</button>
          </> :
          <>
            Not signed in <br/>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        }
      </div>

      <footer className="">
      </footer>
    </div>
  )
}
