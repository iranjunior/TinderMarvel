import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Container,
  BackButton,
  Header,
  Title,
  FormContainer,
  Form,
  Footer,
  LoginButton,
  Lottie,
  LoginText,
} from './styles';
import ClientBackend from '~/services/apis/backend';

import Login from '~/components/form/login';
import Password from '~/components/form/loginPassword';
import BackIcons from '~/components/icons/backincons';

function LoginPage({login, pass, navigation}) {
  const [authenticated, setAuthenticated] = useState(false);
  const Authenticate = async () => {
    setAuthenticated(true);
    const user = ClientBackend.post('/v1/signin', {
      email: login,
      password: pass,
    });
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.navigate('Welcome')}>
          <BackIcons />
        </BackButton>
        <Title>Login</Title>
      </Header>
      <FormContainer>
        <Form>
          <Login />
          <Password />
          <Footer>
            <LoginButton
              disabled={login.length === 0 && pass.length === 0}
              onPress={Authenticate}>
              {!authenticated ? (
                <LoginText>Login</LoginText>
              ) : (
                <Lottie
                  source={require('~/public/aminations/loadingWhite.json')}
                  autoPlay
                  loop
                />
              )}
            </LoginButton>
          </Footer>
        </Form>
      </FormContainer>
    </Container>
  );
}
const mapStateToProps = state => ({
  ...state,
  login: state.forms.email,
  pass: state.forms.password,
});
export default connect(mapStateToProps)(LoginPage);
