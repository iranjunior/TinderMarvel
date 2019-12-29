import styled, {css} from 'styled-components/native';
import IconIphone from 'react-native-vector-icons/Ionicons';

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
  ${props =>
    props.type === 'forgetPassword' &&
    css`
      align-items: flex-end;
      justify-content: flex-start;
      margin-bottom: 0;
      margin-top: -20;
    `}
`;
export const Label = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #babaca;
  margin-left: 10;
  background-color: #fff;
  position: relative;
  z-index: 1000;
  transform: translateY(10px);
  padding-left: 10;
  padding-right: 10;
  font-family: 'Roboto';
  ${props =>
    props.type === 'link' &&
    css`
      font-size: 14;
      color: #0000cc;
      font-weight: 200;
      letter-spacing: 1;
    `}
`;

export const InputText = styled.TextInput`
    height: 50;
    width: 100%;
    border-width: 2px
    border-color: #babaca;
    padding-left: 15;
    border-radius: 10;
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 18;
    ${props =>
      props.textContentType !== 'emailAddress' &&
      css`
        padding-right: 30;
      `}
`;
export const PasswordField = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
export const Icon = styled(IconIphone)`
  position: absolute;
  right: 10;
  background-color: white;
  padding-left: 10;
`;
