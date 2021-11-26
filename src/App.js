import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './config/store'
import ProviderStored from './screens/providerStored'
import { WonderPush } from 'react-wonderpush'

export default function App() {
  return (
    <WonderPush
      options={{
        webKey:
          'a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25'
      }}
    >
      <Provider store={store}>
        <ProviderStored />
      </Provider>
    </WonderPush>
  )
}
