import React from 'react';

import {StatusBar} from 'react-native';
import {SettingIcon} from '~/components/icons/profileIcons';

import {
  PanelBackground,
  ViewProfile,
  Information,
  ImageProfile,
  Frame,
  LabelFrame,
  Heros,
  NumberHeros,
  Clicked,
} from './styles';

const Main = ({navigation}) => (
  <PanelBackground>
    <StatusBar />
    <ViewProfile type="Image">
      <ImageProfile source={require('~/public/imagens/150.jpg')} />
      <Information>Iran da Silva Pereira Junior</Information>
      <Information>Recife, Brazil</Information>
    </ViewProfile>
    <ViewProfile type="Icons">
      <Clicked onPress={() => navigation.navigate('EditProfile')}>
        <SettingIcon />
      </Clicked>
      <Clicked onPress={() => navigation.navigate('EditProfile')}>
        <SettingIcon />
      </Clicked>
      <Clicked onPress={() => navigation.navigate('EditProfile')}>
        <SettingIcon />
      </Clicked>
    </ViewProfile>
    <ViewProfile type="Footer">
      <Frame>
        <LabelFrame>Acompanhando</LabelFrame>
        <Heros localization="Acompanhado">
          <NumberHeros>23</NumberHeros>
        </Heros>
        <LabelFrame>Herois</LabelFrame>
      </Frame>
      <Frame>
        <LabelFrame>Dispensados</LabelFrame>
        <Heros localization="Dispensados">
          <NumberHeros>56</NumberHeros>
        </Heros>
        <LabelFrame>Herois</LabelFrame>
      </Frame>
    </ViewProfile>
  </PanelBackground>
);

export default Main;
