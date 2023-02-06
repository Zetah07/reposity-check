import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Route, Switch } from 'react-router-native'
import LoginPage from '../Pages/Login.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <LoginPage />
        </Route>
      </Switch>
    </View>
  )
}

export default Main
