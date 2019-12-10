import Styled from 'styled-components/native';

export const Container = Styled.View`
  height: 300;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const ImageSpacing = Styled.View`
height: 100%;
width: 100%;
padding-left: 10;
padding-right: 10;
padding-top: 10;
border-radius: 10;
align-items: flex-start;
align-content: center;
justify-content: center;

`;
export const Descriptions = Styled.View`
height: 100%;
width: 100%;
align-items: flex-start;
justify-content: center;
margin: auto;
`;
export const Title = Styled.Text`
font-size: 22;
font-weight: bold;
margin: auto;
margin-bottom: 25;
position: relative;
z-index: 10;
color: #fff;
`;
export const Description = Styled.Text`
font-size: 15
font-weight: 300;
letter-spacing: 0.1;
margin-left: 5
margin-top: 10;
`;
export const Image = Styled.Image`
height: 100%;
width: 100%;
border-radius: 5;
`;
