import { queryInfo, viewHash } from '@libs/shortener';

import colors from '@styles/colors.module.scss';

export default function View({ error }) {
  return (
    <h1 style={{ color: colors.errorColor }}>{error}</h1>
  );
}

export async function getServerSideProps(context) {
  const hash = context.query.hash;
  const doc = await queryInfo(hash);

  // Update view count
  await viewHash(hash);

  if(!doc?.target) {
    return { props: { error: "Link not found" } };
  }

  return {
    redirect: {
      destination: doc.target,
      permanent: false
    }
  }
}
