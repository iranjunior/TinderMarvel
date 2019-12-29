import styled, {css} from 'styled-components/native';
import {Animated, FlatList} from 'react-native';
import IconIphone from 'react-native-vector-icons/Ionicons';

export const Field = styled.View`
  display: flex;
  width: ${props => {
    switch (props.lengthSize) {
      case 'short':
        return '20%';
      case 'medium-low':
        return '30%';
      case 'medium':
        return '40%';
      case 'medium-high':
        return '50%';
      default:
        return '90%';
    }
  }};
  align-items: flex-start;
  justify-content: flex-start;
  margin: auto;
  margin-bottom: 0;
`;
export const Label = styled(Animated.Text)`
  font-size: 18;
  font-weight: bold;
  color: #cacaca;
  margin-left: 10;
  background-color: #fff;
  position: relative;
  z-index: 10;
  padding-left: 5;
  padding-right: 10;
  font-family: 'Roboto';
  ${props =>
    props.type === 'link' &&
    css`
      font-size: 14;
      color: #0000cc;
      font-weight: 200;
      letter-spacing: 1;
    `}
`;
export const Input = styled(Animated.View)`
height: 50;
width: 100%;
border-width: 2px
border-color: #babaca;
padding-left: 15;
border-radius: 10;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;
export const InputText = styled.TextInput`
  height: 50;
  width: 100%;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 18;
  ${props =>
    props.textContentType !== 'emailAddress' &&
    css`
      padding-right: 30;
    `}
`;

export const Icon = styled(IconIphone)`
  position: absolute;
  right: 10;
  background-color: white;
  padding-left: 10;
`;
export const Dropdown = styled(Animated.View)`
  width: 100%;
  opacity: 1;
  max-height: 150;
  position: absolute;
  top: 80;
  background-color: #fff;
  z-index: 1000;
  padding-top: 2;
  padding-bottom: 2;
  padding-right: 2;
  padding-left: 2;
  border-radius: 5;
  border-width: 1;
  border-color: #000;
`;
export const Item = styled.View`
  width: 100%;
  border-bottom-width: 2;
  border-bottom-color: #ccc;
  background-color: #eee;
  height: 50;
  border-radius: 5;
`;
export const List = styled(FlatList)``;
