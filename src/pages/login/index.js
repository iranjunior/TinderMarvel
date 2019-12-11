import React from 'react';
import {Animated} from 'react-native';
import {Container, Form, Label, InputText} from './styles';

export default function login() {
  const labelLogin = new Animated.Value(38);
  const leaveLogin = () => {
    Animated.timing(labelLogin, {
      toValue: 0,
      duration: 500,
    }).start();
  };
  return (
    <Container>
      <Form>
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
      </Form>
    </Container>
  );
}
