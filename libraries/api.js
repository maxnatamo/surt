export async function request(base, args = {}) {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}${base}`;

    return await fetch(url, args);
}