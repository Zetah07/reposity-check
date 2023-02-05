import React from 'react'
import Main from './src/components/Main.jsx'
import { NativeRouter } from 'react-router-native'
import { View } from 'react-native'

const App = () => {
  return (
    <View>
      <NativeRouter><Main /></NativeRouter>
    </View>
  )
}

export default App
