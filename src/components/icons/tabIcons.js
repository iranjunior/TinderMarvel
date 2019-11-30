import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const tabIcons = ({navigation, focused}) => {
  if (navigation.state.routeName === 'Profile') {
    return <Icon name="user" size={18} color={focused ? '#ff4800' : '#000'} />;
  } else if (navigation.state.routeName === 'Messages') {
    return <Icon name="team" size={18} color={focused ? '#ff4800' : '#000'} />;
  } else {
    return <Icon name="home" size={18} color={focused ? '#ff4800' : '#000'} />;
  }
};

export default tabIcons;
