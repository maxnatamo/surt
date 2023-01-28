import { request } from '@libs/api';

import Container from '@components/Container';

export default async function Redirect({ params }) {
  const res = await request(`/api/info/${params.slug}`, { cache: 'no-store', method: 'POST' });
  const doc = await res.json();

  return (
    <main>
      <Container title="Statistics for link">
        <p>
          <b>Hash:</b><br />
          {doc.hash}<br /><br />

          <b>Link:</b><br />
          {doc.target}<br /><br />

          <b>View count:</b><br />
          {doc.viewCount} times<br /><br />
        </p>
      </Container>
    </main>
  )
}

export const dynamic = 'force-dynamic';