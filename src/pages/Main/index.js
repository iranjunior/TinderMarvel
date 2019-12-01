import React, {useRef} from 'react';
import Swiper from 'react-native-deck-swiper';

import {PanelBackground, ViewMain, Bottom, Icon, Title} from './styles';

import Card from '~/components/cards';

const Main = ({navigation}) => {
  return (
    <PanelBackground>
      <Card navigation={navigation} />
      <ViewMain type="Footer">
        <Bottom>
          <Icon type="Unlike">✖</Icon>
        </Bottom>
        <Bottom>
          <Icon type="Like">✔</Icon>
        </Bottom>
      </ViewMain>
    </PanelBackground>
  );
};

export default Main;
