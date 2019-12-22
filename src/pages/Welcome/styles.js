import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Lottie = styled(LottieView)`
  margin-bottom: 60;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 45;
  width: 80%;
  background-color: #e60000;
  border-radius: 10;
  display: flex;

  align-items: center;
  justify-content: center;
  margin-bottom: 10;
`;

export const RegisterButton = styled.TouchableOpacity`
  height: 43;
  width: 80%;
  border-color: #e60000;
  border-width: 2;
  border-radius: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40;
`;
export const LoginText = styled.Text`
  color: white;
  font-size: 22;
  font-weight: bold;
`;
export const RegisterText = styled.Text`
  color: #e60000;
  font-size: 22;
  font-weight: bold;
`;
export const Footer = styled.Text`
  position: absolute;
  font-size: 12;
  color: #babaca;
  bottom: 0;
`;
