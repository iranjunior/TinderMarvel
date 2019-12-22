import React from 'react';
import {
  Container,
  Lottie,
  LoginButton,
  LoginText,
  RegisterButton,
  RegisterText,
  Footer,
} from './styles';

export default function welcome({navigation}) {
  return (
    <Container>
      <Lottie
        source={require('~/public/aminations/welcome.json')}
        autoPlay
        loop
      />
      <LoginButton onPress={() => navigation.navigate('Login')}>
        <LoginText>Login</LoginText>
      </LoginButton>
      <RegisterButton onPress={() => navigation.navigate('Register')}>
        <RegisterText>Registrar</RegisterText>
      </RegisterButton>
      <Footer> Desenvolvido por Iran Junior </Footer>
    </Container>
  );
}
