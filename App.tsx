import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from 'src/navigation'
import { client } from 'src/services/client'
import { persistor, store } from 'src/store'

export default function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={client}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </PersistGate>
      </QueryClientProvider>
    </React.StrictMode>
  )
}
