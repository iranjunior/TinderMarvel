import React from 'react';

import {StatusBar} from 'react-native';

import {PanelBackground, Title} from './styles';

const Main = ({navigation}) => (
  <PanelBackground>
    <StatusBar />
    <Title> Personagens </Title>
  </PanelBackground>
);

export default Main;
