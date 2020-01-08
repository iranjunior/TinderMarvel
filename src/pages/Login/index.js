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
import User from '~/services/asyncStorage';
import {SESSION} from '~/constants/actions';
import Login from '~/components/form/login';
import Password from '~/components/form/loginPassword';
import BackIcons from '~/components/icons/backincons';

function LoginPage({login, pass, navigation, dispatch}) {
  const [authenticated, setAuthenticated] = useState(false);
  let user = {
    data: {},
  };
  const handleId = value => ({
    type: SESSION.CHANGE_ID,
    payload: value,
  });
  const handleToken = value => ({
    type: SESSION.CHANGE_TOKEN,
    payload: value,
  });
  const Authenticate = async () => {
    ClientBackend.post('/v1/signin', {
      email: login,
      password: pass,
    })
      .then(res => {
        user = res.data;
        User.set('user', user);
        dispatch(handleId(user.id));
        dispatch(handleToken(user.token));
        navigation.navigate('AppStack');
      })
      .catch(err => {});
    setAuthenticated(true);
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
  pass: state.forms.loginPassword,
});
export default connect(mapStateToProps)(LoginPage);
