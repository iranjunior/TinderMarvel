import React, {useState} from 'react';
import {
  Container,
  BackButton,
  Header,
  Title,
  Form,
  Field,
  Label,
  PasswordField,
  Icon,
  InputText,
  LoginButton,
  LoginText,
} from './styles';

import BackIcons from '~/components/icons/backincons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Welcome')}>
          <BackIcons />
        </BackButton>
        <Title>Login</Title>
      </Header>
      <Form>
        <Field>
          <Label>Login</Label>
          <InputText
            defaultValue={email}
            autoCompleteType="email"
            autoCorrect={false}
            textContentType="emailAddress"
            onChangeText={e => setEmail(e)}
          />
        </Field>
        <Field>
          <Label>Senha</Label>
          {hide ? (
            <PasswordField>
              <InputText
                defaultValue={password}
                secureTextEntry={true}
                onChangeText={input => setPassword(input)}
                textContentType="password"
                maxLength={30}
              />
              <Icon
                name="ios-eye"
                size={22}
                color="#ccc"
                onPress={() => setHide(false)}
              />
            </PasswordField>
          ) : (
            <PasswordField>
              <InputText
                defaultValue={password}
                onChangeText={input => setPassword(input)}
                maxLength={30}
              />
              <Icon
                name="ios-eye-off"
                size={22}
                color="#ccc"
                onPress={() => setHide(true)}
              />
            </PasswordField>
          )}
        </Field>
        <Field type="forgetPassword">
          <Label onPress={() => navigation.navigate('Welcome')} type="link">
            Esqueceu sua senha?
          </Label>
        </Field>
        <LoginButton onPress={() => navigation.navigate('Login')}>
          <LoginText>Login</LoginText>
        </LoginButton>
      </Form>
    </Container>
  );
}
