import { create } from '@libs/shortener';

export default async function handler(req, res) {
  const { target } = req.body;

  if(req.method !== 'POST') {
    res.status(404).send({ });
    return;
  }

  if(!target) {
    res.status(400).json({ error: "No target was specified" });
    return;
  }

  try {
    const hash = await create(target);
    res.status(200).json({ hash: hash });
  }
  catch(e) {
    res.status(500).json({ hash: undefined });
  }
}