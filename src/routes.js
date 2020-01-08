import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import App from '~/navigation/app';
import Welcome from '~/navigation/welcome';
import LoadingScreen from '~/pages/Loading';

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    WelcomeStack: Welcome,
    AppStack: App,
  }),
  {
    initialRouteName: 'Loading',
  },
);
