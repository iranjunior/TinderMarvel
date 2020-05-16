import React, {useEffect, useState} from 'react';
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
import {CHARACTERS} from '~/constants/actions';
import Like from '~/components/like';
import Nope from '~/components/nope';
import params from '~/utils/parmsMavel';

const Card = ({navigation, character, data, style, dispatch}) => {
  const translateX = new Animated.Value(0);
  const height = new Animated.Value(800);
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
  const changePage = () => {
    Animated.timing(height, {
      toValue: 300,
      duration: 1000,
    }).start(() => {
      dispatch({
        type: CHARACTERS.CHANGE_CHARACTERS_CURRENT,
        payload: data,
      });
      navigation.navigate('Details');
    });
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
          {style},
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
        <ImageProfile
          style={{
            height,
          }}
          source={{
            uri: `${data.thumbnail.path}/portrait_incredible.jpg?${params()}`,
          }}
        />
        <TextArea type="Title">
          <Clicked onPress={changePage}>
            <Title> {data.name}</Title>
            <Description>{data.description}</Description>
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
