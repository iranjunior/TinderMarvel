import Styled from 'styled-components/native';

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
export const Descripton = Styled.Text`
font-size: 15
font-weight: 300;
letter-spacing: 0.5;
margin-left: 5;
margin-top: 10;
text-align: justify;
`;
