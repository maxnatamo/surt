import { connect } from '@libs/database';
import crypto from 'node:crypto';

/**
 * Hash a target address with SHA256 (hex).
 * 
 * @param target The address to hash
 * @returns The hashed version of the target
 */
const hashAddress = (target) => crypto.createHash('sha256').update(target).digest('hex');

/**
 * Find an existing document with the hash and return it, if found. Otherwise, undefined.
 * 
 * @param hash The hash to query for
 * @returns The corresponding document, if found. Otherise, undefined.
 */
export const find = async (hash) => {
  const { db } = await connect();

  const links = await db
    .collection("links")
    .findOne({ hash: hash });

  /* Don't return the internal database ID. */
  if(links) {
    delete links["_id"];
  }

  // Return undefined, instead of null
  return links ?? undefined;
}

/**
 * Insert document with hashed link into the database, if it doesn't exist.
 * @param target The address to insert
 * @returns The hash of the new document, if the link didn't exist already. Otherwise, the existing hash.
 */
export const create = async (target) => {
  const hash = hashAddress(target);

  /* Don't insert new documents, if one already exists */
  if(await find(hash) != null) {
    return hash;
  }

  /* If a document doesn't exist, create a new one */
  const { db } = await connect();

  const res = await db
    .collection("links")
    .insertOne({
      hash: hash,
      target: target
    });

  if(!res.acknowledged) {
    throw new Error('Failed to insert link: ' + target);
  }

  return hash;
}

/**
 * Update view count on a link, if it exists. Otherwise, nothing is done.
 * 
 * @param hash The hash to update the view count for.
 * @returns The new view count, if the document exists. Otherwise, undefined.
 */
export const view = async (hash) => {
  const doc = await find(hash);

  /* No document found, ignore. */
  if(!doc) {
    return undefined;
  }

  /* If the document was found, increment the view count */
  const { db } = await connect();

  const updateDoc = { $inc: { viewCount: 1 } };

  const res = await db
    .collection("links")
    .updateOne({ hash: hash }, updateDoc);

  if(!res.acknowledged) {
    throw new Error('Failed to update link view count: ' + doc.target);
  }

  /* Return the new view count */
  return (await find(hash)).viewCount;
}