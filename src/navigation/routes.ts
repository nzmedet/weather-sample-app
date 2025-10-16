import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { CityOverview } from 'src/services/scheme'

export type MainStackParamList = {
  Search: undefined
  Details: {
    city: CityOverview
  }
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  Screen
>
