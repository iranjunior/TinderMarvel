import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-native';
import {Field, Label, Input, InputText} from '../styles';
// import {Label, Input, InputText} from '../animated';
import {FORM} from '~/constants/actions';

const Age = ({age, lengthSize, dispatch}) => {
  const [focused, setFocused] = useState(false);
  const translationY = new Animated.Value(age.length || focused ? 10 : 40);
  const color = new Animated.Value(focused ? 100 : 0);
  const handleAge = e =>
    dispatch({
      type: FORM.CHANGE_AGE,
      payload: e,
    });
  const translationGo = () => {
    setFocused(true);
    if (age.length === 0) {
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

    if (age.length === 0 && focused === false) {
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
        Idade
      </Label>
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
          defaultValue={age}
          onChangeText={handleAge}
        />
      </Input>
    </Field>
  );
};

const mapStateToProps = state => ({
  ...state,
  age: state.forms.age,
});
export default connect(mapStateToProps)(Age);
