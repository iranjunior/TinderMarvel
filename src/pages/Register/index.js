import React from 'react';
import {
  Container,
  BackButton,
  Header,
  Title,
  FormContainer,
  Form,
  LoginButton,
  LoginText,
  Footer,
} from './styles';

import Name from '~/components/form/name';
import Email from '~/components/form/email';
import City from '~/components/form/city';
import Age from '~/components/form/age';
import State from '~/components/form/state';
import Country from '~/components/form/country';
import Password from '~/components/form/password';
import ConfirmPassword from '~/components/form/confirmPassword';

import BackIcons from '~/components/icons/backincons';

export default function Login({navigation}) {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Welcome')}>
          <BackIcons />
        </BackButton>
        <Title>Cadastro</Title>
      </Header>
      <FormContainer>
        <Form>
          <Name />
          <Email />
          <City lengthSize="medium-high" />
          <Age lengthSize="medium-low" />
          <State lengthSize="medium" />
          <Country lengthSize="medium" />
          <Password />
          <ConfirmPassword />
          <Footer>
            <LoginButton onPress={() => navigation.navigate('Welcome')}>
              <LoginText>Registrar</LoginText>
            </LoginButton>
          </Footer>
        </Form>
      </FormContainer>
    </Container>
  );
}
