import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  line-height: 2;
  border-width: 5;
  border-color: #1ed80c;
  border-radius: 8;
  transform: rotate(-20deg);
  background-color: transparent;
  position: absolute;
  z-index: 1000;
  top: 30;
  left: 20;
`;
export const Text = styled.Text`
  color: #1ed80c;
  font-size: 29;
  letter-spacing: 3;
  font-weight: bold;
`;
