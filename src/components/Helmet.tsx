import { ReactNode } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

interface Props {
  loading?: boolean
  error?: string
  children?: ReactNode
  retry?: () => void
}
export default function Helpmet({ loading, error, retry, children }: Props) {
  if (loading) {
    return (
      <View style={s.container}>
        <ActivityIndicator />
      </View>
    )
  }
  if (error) {
    console.warn(error)
    return (
      <View style={s.container}>
        <Text style={s.errorText}>{error}</Text>
        {retry && <Button title='Retry' onPress={retry} />}
      </View>
    )
  }
  return children
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red'
  }
})
