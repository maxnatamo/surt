import Head from 'next/head';
import Container from '@components/Container';

import { queryInfo } from '@libs/shortener';

import colors from '@styles/colors.module.scss';

export default function Stat({ target, viewCount, error }) {
  if(error) {
    <h1 style={{ color: colors.errorColor }}>{error}</h1>;
  }

  return (
    <main>
      <Head>
        <title>Surt - a simple URL shortener</title>
      </Head>

      <Container size="medium" title="Statistics for link">
        <p>
          <b>Link:</b><br />
          {target}<br /><br />

          <b>View count:</b><br />
          {viewCount} views<br /><br />
        </p>
      </Container>
    </main>
  )
}

export async function getServerSideProps(context) {
  const hash = context.query.hash;

  return {
    props: await queryInfo(hash)
  }
}