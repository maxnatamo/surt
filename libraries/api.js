export async function request(base, args = {}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_ADDRESS}${base}`;

  return await fetch(url, args);
}