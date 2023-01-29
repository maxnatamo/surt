import { queryInfo } from '@libs/shortener';

import Container from '@components/Container';

import colors from '@styles/colors.module.scss';

export default function Stat({ hash, target, viewCount, error }) {
  if(error) {
    <h1 style={{ color: colors.errorColor }}>{error}</h1>;
  }

  return (
    <main>
      <Container title="Statistics for link">
        <p>
          <b>Hash:</b><br />
          {hash}<br /><br />

          <b>Link:</b><br />
          {target}<br /><br />

          <b>View count:</b><br />
          {viewCount} times<br /><br />
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