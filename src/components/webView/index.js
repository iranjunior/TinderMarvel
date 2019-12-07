import React from 'react';
import {Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  WebHeader,
  BackButton,
  WebTitle,
  WebContainerTitle,
  WebSpacing,
  Web,
} from './styles';

export default function Main({navigation}) {
  const width = new Animated.Value(0);
  const widthMax = Dimensions.get('screen').width;
  const start = () => {
    Animated.timing(width, {
      toValue: widthMax,
      duration: 2000,
    }).start();
  };
  const hide = () => {
    Animated.timing(width, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  return (
    <Container
      style={{
        width: width,
      }}>
      <WebHeader>
        <BackButton onPress={hide}>
          <Icon name="back" size={28} color="#000" />
        </BackButton>
        <WebContainerTitle>
          <WebTitle>Wiki</WebTitle>
        </WebContainerTitle>
      </WebHeader>
      <WebSpacing>
        <Web source={{uri: 'https://github.com/facebook/react-native'}} />
      </WebSpacing>
    </Container>
  );
}
