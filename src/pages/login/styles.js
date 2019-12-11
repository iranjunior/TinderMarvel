import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.View`
  height: 50;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  background-color: rgba(230, 0, 0, 0.2);
`;
export const BackButton = styled.TouchableOpacity`
  height: 100%;
  width: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20;
`;
export const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.8);
`;
export const Form = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 3;
`;

export const Field = styled.View`
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20;
`;
export const Label = styled(Animated.Text)`
  font-size: 18;
  font-weight: bold;
  color: gray;
  margin-left: 10;
`;
export const LabelPassword = styled(Animated.Text)`
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
  padding-left: 5;
`;
