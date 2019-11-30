import React from 'react';

import {StatusBar} from 'react-native';

import {PanelBackground, Title, Clicked} from './styles';

const Main = ({navigation}) => (
  <PanelBackground>
    <StatusBar />
    <Clicked onPress={() => navigation.navigate('Profile')}>
      <Title> Editar Perfil </Title>
    </Clicked>
  </PanelBackground>
);

export default Main;
