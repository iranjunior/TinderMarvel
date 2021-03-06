import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {
  ImageProfile,
  Title,
  Description,
  Clicked,
  TextArea,
  Container,
} from './styles';

import Like from '~/components/like';
import Nope from '~/components/nope';

const Card = ({navigation, character}) => {
  const translateX = new Animated.Value(0);

  const rotate = translateX.interpolate({
    inputRange: [-300, 300],
    outputRange: ['20deg', '-20deg'],
  });

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const like = () => {
    Animated.timing(translateX, {
      toValue: 500,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const nope = () => {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const HandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationX} = event.nativeEvent;

      if (translationX < 200 && translationX > -200) {
        Animated.timing(translateX, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }).start();
      } else if (translationX > 200) {
        Animated.timing(translateX, {
          toValue: 500,
          duration: 250,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(translateX, {
          toValue: -500,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const actionCard = action => {
    if (action && action.includes('LIKE')) {
      like();
    } else if (action && action.includes('NOPE')) {
      nope();
    }
  };

  useEffect(() => {
    actionCard(character);
  });
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={HandlerStateChange}>
      <Container
        style={[
          {
            opacity: translateX.interpolate({
              inputRange: [-300, 0, 300],
              outputRange: [0, 1, 0],
            }),
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [-300, 0, 300],
                  outputRange: [-400, 0, 400],
                }),
              },
              {
                rotate: rotate,
              },
            ],
          },
        ]}>
        <Like translateX={translateX} />
        <Nope translateX={translateX} />
        <ImageProfile source={require('~/public/imagens/500.jpg')} />
        <TextArea type="Title">
          <Clicked onPress={() => navigation.navigate('Details')}>
            <Title> Homem de Ferro</Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Description>
          </Clicked>
        </TextArea>
      </Container>
    </PanGestureHandler>
  );
};
const mapStateToProps = state => ({
  ...state,
  character: state.cards.character,
});
export default connect(mapStateToProps)(Card);
