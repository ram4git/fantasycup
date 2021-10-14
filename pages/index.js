import Head from 'next/head';

const TOTAL_BG_IMGS = 3;
const today = new Date().toJSON().slice(8,10);


export default function Home() {
  const bgImage = `/imgs/bg${today%TOTAL_BG_IMGS}.webp`
  return (
    <div className="bg-green-500">
      <Head>
        <title>Fantasy T20WC</title>
        <meta name="description" content="Generated irraju@gmail.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen">
        <img src={bgImage} className="w-screen h-screen bg-cover"/>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
