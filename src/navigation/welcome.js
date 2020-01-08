import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '~/pages/Welcome';
import LoginScreen from '~/pages/Login';
import RegisterScreen from '~/pages/Register';

const WelcomeStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(WelcomeStack);
