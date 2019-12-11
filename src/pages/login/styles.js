import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.View`
  display: flex;
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: auto;
`;
export const Label = styled(Animated.Text)`
  font-size: 18;
  font-weight: bold;
  color: gray;
  margin-left: 10;
`;
export const InputText = styled.TextInput`
  height: 40;
  width: 100%;
  border-bottom-width: 2px
  border-bottom-color: #babaca;
`;
