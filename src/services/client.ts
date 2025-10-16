import { QueryClient, useMutation } from '@tanstack/react-query'

import { CityOverview } from './scheme'
import { fetchJson } from './utils'

export const client = new QueryClient()
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

async function fetchWeather(city: string) {
  if (!city) return null

  const weatherData = await fetchJson<CityOverview>(
    `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${API_KEY}&units=metric`
  )
  return weatherData
}

export function useWeather() {
  return useMutation<CityOverview | null, Error, string>({
    mutationFn: fetchWeather
  })
}
