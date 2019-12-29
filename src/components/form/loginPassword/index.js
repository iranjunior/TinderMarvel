import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-native';
import {FORM} from '~/constants/actions';

import {Field, Label, InputText, Input, Icon} from '../styles';

const Password = ({password, secure, lengthSize, dispatch}) => {
  const [focused, setFocused] = useState(false);
  const translationY = new Animated.Value(password.length || focused ? 10 : 40);
  const color = new Animated.Value(focused ? 100 : 0);

  const handlePassword = e =>
    dispatch({
      type: FORM.CHANGE_LOGIN_PASSWORD,
      payload: e,
    });
  const handleSecure = () => {
    dispatch({
      type: FORM.CHANGE_SECURE,
      payload: !secure,
    });
  };
  const translationGo = () => {
    setFocused(true);
    if (password.length === 0) {
      Animated.parallel([
        Animated.timing(translationY, {
          toValue: 10,
          duration: 500,
        }),
        Animated.timing(color, {
          toValue: 100,
          duration: 500,
        }),
      ]);
    } else {
      Animated.timing(color, {
        toValue: 100,
        duration: 100,
      }).start();
    }
  };
  const translationBack = () => {
    setFocused(false);

    if (password.length === 0 && focused === false) {
      Animated.parallel([
        Animated.timing(translationY, {
          toValue: 40,
          duration: 500,
        }).start(),

        Animated.timing(color, {
          toValue: 100,
          duration: 500,
        }).start(),
      ]);
    } else {
      Animated.timing(color, {
        toValue: 0,
        duration: 250,
      }).start();
    }
  };
  return (
    <Field lengthSize={lengthSize}>
      <Label
        style={{
          fontWeight: color.interpolate({
            inputRange: [0, 100],
            outputRange: ['600', '700'],
          }),
          color: color.interpolate({
            inputRange: [0, 100],
            outputRange: ['#cacaca', '#00f'],
          }),
          transform: [
            {
              translateY: translationY,
            },
          ],
        }}>
        Senha
      </Label>
      {secure ? (
        <Input
          style={{
            borderColor: color.interpolate({
              inputRange: [0, 10],
              outputRange: ['#babaca', '#00f'],
            }),
          }}>
          <InputText
            onFocus={translationGo}
            onBlur={translationBack}
            defaultValue={password}
            secureTextEntry={true}
            onChangeText={handlePassword}
            textContentType="password"
            maxLength={30}
          />
          <Icon name="ios-eye" size={22} color="#ccc" onPress={handleSecure} />
        </Input>
      ) : (
        <Input
          style={{
            borderColor: color.interpolate({
              inputRange: [0, 10],
              outputRange: ['#babaca', '#00f'],
            }),
          }}>
          <InputText
            onFocus={translationGo}
            onBlur={translationBack}
            defaultValue={password}
            onChangeText={handlePassword}
            maxLength={30}
          />
          <Icon
            name="ios-eye-off"
            size={22}
            color="#ccc"
            onPress={handleSecure}
          />
        </Input>
      )}
    </Field>
  );
};

const mapStateToProps = state => ({
  ...state,
  password: state.forms.loginPassword,
  secure: state.forms.secure,
});
export default connect(mapStateToProps)(Password);
