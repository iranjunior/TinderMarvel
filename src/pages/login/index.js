import React from 'react';
import {Animated} from 'react-native';
import {
  Container,
  BackButton,
  Header,
  Title,
  Form,
  Field,
  Label,
  LabelPassword,
  InputText,
} from './styles';
import BackIcons from '~/components/icons/backincons';

export default function login({navigation}) {
  const labelLogin = new Animated.Value(38);
  const labelPassword = new Animated.Value(38);
  const leaveLogin = () => {
    Animated.timing(labelLogin, {
      toValue: 0,
      duration: 300,
    }).start();
  };
  const leavePassword = () => {
    Animated.timing(labelPassword, {
      toValue: 0,
      duration: 300,
    }).start();
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Wellcome')}>
          <BackIcons />
        </BackButton>
        <Title>Login</Title>
      </Header>
      <Form>
        <Field>
          <Label
            style={{
              transform: [
                {
                  translateY: labelLogin,
                },
              ],
            }}>
            login
          </Label>
          <InputText onFocus={leaveLogin} />
        </Field>
        <Field>
          <LabelPassword
            style={{
              transform: [
                {
                  translateY: labelPassword,
                },
              ],
            }}>
            Senha
          </LabelPassword>
          <InputText onFocus={leavePassword} />
        </Field>
      </Form>
    </Container>
  );
}
