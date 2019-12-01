import Styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const size = Dimensions.get('window');

export const PanelBackground = Styled.View`
    display: flex;
    height: 100%;
    align-items: center;
    background-color: 'rgb(255,255,255)';
    `;

export const Title = Styled.Text`
    font-size: 30px;
    `;

export const Button = Styled.Button`
    background: #ff0048;
`;
export const ViewProfile = Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: 'rgb(255,255,255)';
    ${props =>
      props.type === 'Image' &&
      css`
        height: 45%;
        border-bottom-right-radius: ${Math.floor(size.height / 0.225)};
        border-bottom-left-radius: ${Math.floor(size.height / 0.225)};
      `}
      ${props =>
        props.type === 'Icons' &&
        css`
          height: 30%;
          overflow: hidden;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: row;
          border-bottom-right-radius: ${Math.floor(size.height) / 2};
          border-bottom-left-radius: ${Math.floor(size.height) / 2};
          border-color: #babaca;
          border-width: 1;
          border-top-width: 0;
          transform: scaleX(1.5);
          margin-top: -20;
          background-color: 'rgb(255,255,255)';
        `}
    ${props =>
      props.type === 'Footer' &&
      css`
        height: 25%;
        flex-direction: row;
        background-color: 'rgb(255,255,255)';
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
`;
export const ImageProfile = Styled.Image`
    height: 150;
    width: 150;
    border-radius: 75;
    margin-bottom: 25;
    margin-top: 25;
`;

export const Information = Styled.Text`
    font-size: 20;
`;
export const Frame = Styled.View`
    height: 150;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
`;
export const Heros = Styled.View`
    margin: auto;
    height: 80;
    width: 80;
    border-radius: 40;
    background-color: ${props =>
      props.localization === 'Acompanhado' ? '#00cc00' : '#cc0000'};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const NumberHeros = Styled.Text`
    font-size: 22;
    font-weight: bold;
`;
export const LabelFrame = Styled.Text`
    font-size: 20;
    font-weight: 300;
`;
export const Clicked = Styled.TouchableOpacity`
    background-color: transparent;
`;
