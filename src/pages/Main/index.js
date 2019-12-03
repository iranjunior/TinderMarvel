import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {
  PanelBackground,
  ViewMain,
  Bottom,
  Icon,
  Title,
  Card,
  TextArea,
  ImageProfile,
  Description,
} from './styles';

// import Card from '~/components/cards';

const Main = ({navigation}) => {
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  return (
    <PanelBackground>
      <PanGestureHandler onGestureEvent={animatedEvent}>
        <Card
          style={{
            transform: [
              {
                translateY: translateY,
              },
            ],
          }}>
          <ImageProfile source={require('~/public/imagens/500.jpg')} />
          <TextArea type="Title">
            <Title> Homem de Ferro</Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Description>
          </TextArea>
        </Card>
      </PanGestureHandler>
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
