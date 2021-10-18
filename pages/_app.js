import ActionButton from '@comps/ActionButton';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
const TOTAL_BG_IMGS = 3;
const today = new Date().toJSON().slice(8, 10);

function App({ Component, pageProps: { session, ...pageProps } }) {
  const bgImage = `/imgs/bg${today % TOTAL_BG_IMGS}.webp`;

  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <div className="absolute w-screen h-screen">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
      <img src={bgImage} className="w-screen h-screen bg-cover inset-0 " />
      <ActionButton />
    </main>
  );
}

export default App;
