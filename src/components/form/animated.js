/* eslint-disable prettier/prettier */
import React from 'react';
import {Animated} from 'react-native';

import * as Styles from './styles';

const translationGo = (input, focused, translationY, color) => {
  Animated.parallel([
    Animated.timing(translationY, {
      toValue: 0,
      duration: 250,
    }).start(),
    Animated.timing(color, {
      toValue: '#00f',
      duration: 250,
    }).start(),
  ]);
};

const translationBack = (input, focused, translationY, color) => {
  Animated.parallel([
    Animated.timing(translationY, {
      toValue: 0,
      duration: 250,
    }).start(),
    Animated.timing(color, {
      toValue: '#00f',
      duration: 250,
    }).start(),
  ]);
};
export class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:  new Animated.Value(this.props.focused ? 100 : 0),
      translationY: new Animated.Value(
        this.props.input.lenght || this.props.focused ? 10 : 40
      ),
    };
  }

  render(){
    return <Styles.Label  style={{
      fontWeight: this.state.color.interpolate({
        inputRange: [0, 100],
        outputRange: ['600', '700'],
      }),
      color: this.state.color.interpolate({
        inputRange: [0, 100],
        outputRange: ['#cacaca', '#00f'],
      }),
      transform: [
        {
          translateY: this.state.translationY,
        },
      ],
    }}/>;
  }
}
export class Input extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        color: new Animated.Value(this.props.focused ? 100 : 0),
      };
    }
   render() {

     return <Styles.Input
       props
       style={{
        borderColor: this.state.color.interpolate({
          inputRange: [0, 10],
          outputRange: ['#babaca', '#00f'],
        }),
      }}
      />;
      }
    }



export class InputText extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <Styles.InputText
    onFocus={() => translationGo()} onBlur={() => translationBack()}
    />;
  }
}
