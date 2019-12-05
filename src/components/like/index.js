import React from 'react';

import {Container, Text} from './styles';

export default function Like({translateX}) {
  return (
    <Container
      style={{
        opacity: translateX.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
        }),
      }}>
      <Text> LIKE </Text>
    </Container>
  );
}
