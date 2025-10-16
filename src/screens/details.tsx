import { useEffect } from 'react'
import { Text } from 'react-native'
import View from '@nzmedet/view-on-steroids'

import Card from 'src/components/Card'
import { MainStackScreenProps } from 'src/navigation/routes'
import { useAppDispatch } from 'src/store'
import { setLastSearched } from 'src/store/slices/search-history'

export default function Screen({ route }: MainStackScreenProps<'Details'>) {
  const city = route.params.city
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLastSearched(city.name))
  }, [city, dispatch])
  return (
    <View gap={20} padding={20}>
      <Card>
        <View flexDirection='row' justifyContent='space-between'>
          <Text>{city.name}</Text>
          <Text>{city.main.temp}°</Text>
        </View>
        {city.weather.map(v => (
          <Text key={v.id}>{v.main}</Text>
        ))}
      </Card>
      <Card>
        <Text>Humidity: {city.main.humidity}</Text>
        <Text>Wind speed: {city.wind.speed}</Text>
        <Text>Min temperature: {city.main.temp_min}°</Text>
        <Text>Max temperature: {city.main.temp_max}°</Text>
      </Card>
    </View>
  )
}
