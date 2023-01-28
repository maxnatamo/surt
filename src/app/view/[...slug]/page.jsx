'use server'

import Redirect from '@components/Redirect';
import { request } from '@libs/api';

export default async function View({ params }) {
  const res = await request(`/api/info/${params.slug}`, { cache: 'no-store', method: 'POST' });
  const doc = await res.json();

  if(doc.target) {
    /**
     * Currently, redirects in Next.js 13 (AppDir) use fetch,
     * which causes a CORS violation.
     * 
     * GitHub issue: https://github.com/vercel/next.js/issues/43605
     */
    return <Redirect url={doc.target} />;
  }

  return (
    <main>
      {doc.error &&
        <h1 style={{ color: "white" }}>{doc.error}</h1>
      }
    </main>
  )
}

export const dynamic = 'force-dynamic';
