import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profiles from './pages/Profiles'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar'
      }
    },
    Profiles: {
      screen: Profiles,
      navigationOptions: {
        title: 'Perfil do Github'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7D40E7'
      },
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
    }
  })
)

export default Routes