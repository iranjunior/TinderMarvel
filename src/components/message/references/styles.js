import Styled from 'styled-components/native';
import {Link} from 'react-native';

export const Container = Styled.View`
  max-height: 300;
  width: 100%;
  padding-left: 10;
  padding-right: 10;
  padding-top: 20;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = Styled.Text`
font-size: 22;
font-weight: 500;
position: relative;
z-index: 10;
color: #000;
`;
export const Line = Styled.View`
  width: 100%;
  height: 2;
  background-color: #eee;
  margin-top: 8;
  `;

export const ReferencesList = Styled.View`
  width: 100%
  display: flex;
    align-items: flex-start;
    margin-top: 10;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    /*
    background-color: black; */
  `;
export const ReferenceSpace = Styled.TouchableOpacity`
  height: 30;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 20;
  margin-left: 10;
  margin-right: 10;
  background-color: #fff;
`;

export const ReferenceType = Styled.Text`
font-size: 22;
color: #222
`;
export const Reference = Styled.Text`
font-size: 20;
color: blue;
`;
