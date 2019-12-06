import Styled from 'styled-components/native';

export const Card = Styled.View`
max-height: 120;
width: 100%;
border-color: #eee;
border-width: 0.5;
border-radius: 5;
elevation: 3;
margin-bottom: 5;

`;
export const Clickeble = Styled.TouchableOpacity`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: transparent;
margin-bottom: 0;
padding-bottom: 5;
`;
export const ImageSpacing = Styled.View`
height: 100%;
width: 40%;
align-items: flex-start;
align-content: center;
justify-content: center;

`;
export const Descriptions = Styled.View`
height: 100%;
width: 60%;
align-items: flex-start;
justify-content: center;
margin: auto;
`;
export const Title = Styled.Text`
font-size: 18;
font-weight: bold;
margin: 0;
`;
export const Description = Styled.Text`
font-size: 15
font-weight: 300;
letter-spacing: 0.1;
margin-left: 5
margin-top: 10;
`;
export const Image = Styled.Image`
height: 100;
width: 100;
border-radius: 50;
margin-left: 10;
margin-top: 10;
`;
