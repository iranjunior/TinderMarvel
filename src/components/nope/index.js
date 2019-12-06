import React from 'react';

import {Container, Text} from './styles';

export default function like({translateX}) {
  return (
    <Container
      style={{
        opacity: translateX.interpolate({
          inputRange: [-80, 0],
          outputRange: [1, 0],
        }),
      }}>
      <Text> NOPE </Text>
    </Container>
  );
}
