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
  const translateX = new Animated.Value(0);
  const rotate = translateX.interpolate({
    inputRange: [-300, 300],
    outputRange: ['20deg', '-20deg'],
  });

  /*  Animated.timing(translateY, {
    toValue: 100,
    duration: 4000,
    useNativeDriver: true,
  }).start();
 */
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
          translationX: translateX,
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <PanelBackground>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={event => {}}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: 'green',
            },
            {
              transform: [
                {
                  translateY: translateY,
                },
                {
                  rotate: rotate,
                },
              ],
            },
          ]}
        />
      </PanGestureHandler>
      {/*  <Card>
        <ImageProfile source={require('~/public/imagens/500.jpg')} />
        <TextArea type="Title">
          <Title> Homem de Ferro</Title>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </Description>
        </TextArea>
      </Card>
      <ViewMain type="Footer">
        <Bottom>
          <Icon type="Unlike">✖</Icon>
        </Bottom>
        <Bottom>
          <Icon type="Like">✔</Icon>
        </Bottom>
      </ViewMain> */}
    </PanelBackground>
  );
};

export default Main;
