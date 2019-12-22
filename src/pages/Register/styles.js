import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled(Animated.Text)`
  font-size: 18;
  font-weight: bold;
  color: gray;
`;
export const InputText = styled.TextInput`
  height: 25;
  width: 80%;
  border-color: #babaca;
  boder-width: 1;
  border-radius: 8;
`;
