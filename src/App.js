import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './config/store'
import ProviderStored from './screens/providerStored'

export default function App() {
  return (
    <Provider store={store}>
      <ProviderStored />
    </Provider>
  )
}
