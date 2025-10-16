import { useCallback, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'
import View from '@nzmedet/view-on-steroids'

import Card from 'src/components/Card'
import { MainStackScreenProps } from 'src/navigation/routes'
import { useWeather } from 'src/services/client'
import { useAppSelector } from 'src/store'

export default function Screen({ navigation }: MainStackScreenProps<'Search'>) {
  const [query, setQuery] = useState('')
  const searchHistory = useAppSelector(root => root.searchHistory)
  const { mutateAsync, isError, isPending, error } = useWeather()

  const handleSearch = useCallback(
    async (city: string) => {
      const data = await mutateAsync(city)
      if (data) {
        navigation.navigate('Details', {
          city: data
        })
      }
    },
    [mutateAsync, navigation]
  )

  return (
    <View flex={1} gap={20} padding={20}>
      <Card>
        {isPending && <ActivityIndicator size='large' />}
        {isError && <Text style={s.errorText}>{error.message}</Text>}
        <TextInput
          style={s.input}
          value={query}
          placeholder='Enter city name'
          onChangeText={setQuery}
          clearButtonMode='always'
        />
        <Button title='Search' onPress={() => handleSearch(query)} />
      </Card>
      {searchHistory.city && (
        <Card>
          <View flexDirection='row'>
            <Text>Last searched city: </Text>
            <TouchableWithoutFeedback onPress={() => handleSearch(searchHistory.city!)}>
              <Text style={s.historyText}>{searchHistory.city}</Text>
            </TouchableWithoutFeedback>
          </View>
        </Card>
      )}
    </View>
  )
}

const s = StyleSheet.create({
  errorText: {
    color: 'red'
  },
  historyText: {
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    minWidth: 200
  }
})
