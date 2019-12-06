import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import MainScreen from '~/pages/Main';
import DetailsScreen from '~/pages/Details';
import MessagesScreen from '~/pages/Messages';
import MessageScreen from '~/pages/Message';
import ProfileScreen from '~/pages/Profile';
import EditProfileScreen from '~/pages/EditProfile';

import TabIcons from '~/components/icons/tabIcons';

const tabBarOptions = {
  showIcon: true,
  showLabel: false,
  style: {
    backgroundColor: 'rgb(255,255,255)',
    elevation: 0,
  },
  indicatorStyle: {
    width: 0,
  },
};
const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Details: DetailsScreen,
  },
  {headerMode: 'none'},
);
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen,
  },
  {headerMode: 'none'},
);
const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
    Message: MessageScreen,
  },
  {headerMode: 'none'},
);

const HomeScrean = createMaterialTopTabNavigator(
  {
    Profile: ProfileStack,
    Main: MainStack,
    Messages: MessagesStack,
    Message: MessageScreen,
  },
  {
    initialRouteName: 'Message',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => (
        <TabIcons navigation={navigation} focused={focused} />
      ),
    }),
    tabBarOptions,
  },
);

export default createAppContainer(HomeScrean);
