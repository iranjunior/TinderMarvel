import Styled from 'styled-components/native';

export const ActiveTabIcon = Styled.View`
  background-color: rgba(100, 100, 100, 0.7);
  width: '30px';
  height: '30px';
  border-radius: 15;
`;
export const ViewIcon = Styled.View`
position: relative;
z-index: 30;
transform: scaleX(0.5);
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20;
`;
export const Label = Styled.Text`
  font-size: 16;
  color: #aaa;
`;
