import { Roboto } from '@next/font/google';

import '@styles/global.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

function Surt({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default Surt;