import { runtimeConfiguration } from "@libs/env";

/**
 * Make a request to the internal API with the specified route.
 * 
 * @param base The route to send the request to. E.g. /api/info
 * @param args Optional arguments to fetch.
 *
 * @returns The resulting response from fetch.
 */
export const request = async (base, args = {}) => {
  const url = `${runtimeConfiguration.BASE_ADDRESS}${base}`;

  return await fetch(url, args);
}

/**
 * Query information about a specific hash.
 * 
 * @param hash The hash to query for.
 
* @returns Returns database document, if the hash was found. Otherwise, error object.
 */
export const queryInfo = async (hash) => {
  const res = await request(`/api/info/${hash}`);
  const doc = await res.json();

  if(!doc?.target) {
    return { error: "Link not found" };
  }

  return doc;
}

/**
 * Create a new hash, pointing to the specified target URL.
 * 
 * @param target The target URL to redirect to. No verification is done.
 *
 * @returns The new database document created.
 */
export const createHash = async (target) => {
  const res = await request("/api/create", {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ target: target })
  });

  return await res.json();
}