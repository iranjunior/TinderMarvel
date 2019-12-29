import styled from 'styled-components/native';
import IconIphone from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

export const StatusBar = styled.StatusBar``;

export const Container = styled.SafeAreaView`
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
  position: relative;
  top: 20;
`;
export const BackButton = styled.TouchableOpacity`
  height: 100%;
  width: 65;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 30;
  font-family: 'Roboto';
`;
export const FormContainer = styled.View`
  height: 93%;
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  flex-grow: 1;
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Footer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20;
  position: absolute;
  bottom: 0;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 45;
  width: 80%;
  background-color: #e60000;
  border-radius: 10;
  display: flex;
  position: absolute;
  bottom: 25;
  align-items: center;
  justify-content: center;
  margin-bottom: 30;
`;
export const LoginText = styled.Text`
  color: white;
  font-size: 22;
  font-weight: bold;
  font-family: 'Roboto';
`;
export const Lottie = styled(LottieView)`
  height: 100%;
`;
export const Icon = styled(IconIphone)`
  position: absolute;
  right: 10;
  background-color: white;
  padding-left: 10;
`;
