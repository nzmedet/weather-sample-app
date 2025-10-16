import { QueryClient, useMutation } from '@tanstack/react-query'

import { CityOverview } from './scheme'
import { fetchJson } from './utils'

export const client = new QueryClient()
const API_KEY = '74acd9b19168487d064b89db93a480f9'

async function fetchWeather(city: string) {
  if (!city) return null

  try {
    const weatherData = await fetchJson<CityOverview>(
      `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${API_KEY}&units=metric`
    )
    return weatherData
  } catch {
    throw new Error('City not found')
  }
}

export function useWeather() {
  return useMutation<CityOverview | null, Error, string>({
    mutationFn: fetchWeather
  })
}
