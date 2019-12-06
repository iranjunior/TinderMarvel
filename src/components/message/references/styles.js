import Styled from 'styled-components/native';
import {Link} from 'react-native';

export const Container = Styled.View`
  min-height: 300;
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
export const ReferenceSpace = Styled.View`
  min-height: 30;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20;
  margin-left: 20;

`;

export const Reference = Styled.Text`
width: 100%;
color: #222`;
