/**
 * Verify that a target URL is valid for shortening.
 * 
 * @param target The URL to verify.
 * @returns True, if the URL is valid and can be shortened. Otherwise, false.
 */
export const verify = (target) => {
  const regex = /^(http|https):\/\/(www\.)?([^ "]+)\.[a-z]+[A-Za-z0-9-_~:/?#\[\]@!$&'()*+,;%=.]*$/;

  return regex.test(target);
}