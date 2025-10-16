import { PropsWithChildren } from 'react'
import View from '@nzmedet/view-on-steroids'

export default function Card({ children }: PropsWithChildren) {
  return (
    <View backgroundColor='#fff' padding={20}>
      {children}
    </View>
  )
}
