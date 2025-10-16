export interface Coords {
  lat: number
  lon: number
}
export interface CityOverview {
  coord: Coords
  weather: Weather[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: Wind
  id: number
  name: string
}
export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
export interface Wind {
  speed: number
  deg: number
}
