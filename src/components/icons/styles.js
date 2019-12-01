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
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20;
margin-right: ${props => (props.localization === 'first' ? '0' : '50')};
margin-left: ${props => (props.localization === 'second' ? '0' : '60')};
transform: scaleX(0.75);
`;
export const Label = Styled.Text`
  font-size: 16;
  color: #aaa;
`;
