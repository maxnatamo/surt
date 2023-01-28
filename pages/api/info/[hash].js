import { find } from '@libs/shortener';

export default async function handler(req, res) {
  const { hash } = req.query;

  if(req.method !== 'POST') {
    res.status(404).send({ });
    return;
  }

  const doc = await find(hash);

  if(doc) {
    res.status(200).json(doc);
  } else {
    res.status(404).json({ error: "Link not found." });
  }
}