import Styled from 'styled-components/native';

export const Container = Styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: 'rgb(255,255,255)';
    flex-direction: row;
    height: 12%;
`;
export const Bottom = Styled.TouchableOpacity`
    height: 60;
    width: 60;
    border-radius: 30;
    margin: auto;
    elevation: 2;
`;
export const Icon = Styled.Text`
    color: ${props => (props.type === 'Like' ? '#00cc00' : '#cc0000')};
    margin: auto;
    font-size: 25;
`;

export const Clicked = Styled.TouchableOpacity`
    background-color: transparent;
    width: 100%;
    height: 100%;
`;
