/**
 * Verify that a target URL is valid for shortening.
 * 
 * @param target The URL to verify.
 * @returns True, if the URL is valid and can be shortened. Otherwise, false.
 */
export const verify = (target) => {
  const regex = /^(http|https):\/\/(www\.)?([^ "]+)\.[a-z]+$/;

  return regex.test(target);
}