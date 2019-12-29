import styled, {css} from 'styled-components/native';
import IconIphone from 'react-native-vector-icons/Ionicons';

export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.View`
  height: 7%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  top: 0;
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
  align-content: stretch;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 45;
  width: 80%;
  background-color: #e60000;
  border-radius: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginText = styled.Text`
  color: white;
  font-size: 22;
  font-weight: bold;
  font-family: 'Roboto';
`;
export const Icon = styled(IconIphone)`
  position: absolute;
  right: 10;
  background-color: white;
  padding-left: 10;
`;
export const Footer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20;
`;
