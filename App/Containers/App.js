import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import aws_exports from '../../aws-exports'
import '../Config'
import DebugConfig from '../Config/DebugConfig'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import AppFontLoader from '../Components/AppFontLoader'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
Amplify.configure(aws_exports)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppFontLoader>
          <RootContainer />
        </AppFontLoader>
      </Provider>
    )
  }
}
// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : withAuthenticator(App)
