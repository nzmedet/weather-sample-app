export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('City not found')
    }
    throw new Error(`Failed to fetch: ${res.status}`)
  }
  return res.json() as Promise<T>
}
