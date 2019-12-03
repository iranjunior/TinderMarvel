import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {PanelBackground, ViewMain, Bottom, Icon, Title} from './styles';

import Card from '~/components/cards';

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
          navigation={navigation}
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
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
