import Styled, {css} from 'styled-components/native';

export const PanelBackground = Styled.View`
    display: flex;
    height: 100%;
    align-items: center;
    background-color: 'rgb(255,255,255)';

`;
export const ViewMain = Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: 'rgb(255,255,255)';

    ${props =>
      props.type === 'Image' &&
      css`
        height: 88%;
        padding-right: 5;
        padding-left: 5;
      `}
        ${props =>
          props.type === 'Title' &&
          css`
            height: 95%;
            width: 100%;
            align-items: flex-start;
            justify-content: flex-end;
            background-color: transparent;
            padding-left: 10;
            padding-bottom: 20;
            position: absolute;
            z-index: 10;
          `}

            ${props =>
              props.type === 'Footer' &&
              css`
                flex-direction: row;
                height: 12%;
              `}

              `;
export const ImageProfile = Styled.Image`
              height: 100%;
              width: 100%;
              border-radius: 20;
              `;
export const Bottom = Styled.View`
              height: 60;
              width: 60;
              border-radius: 30;
              margin: auto;
              elevation: 2;

              `;
export const Icon = Styled.Text`
              color: ${props =>
                props.type === 'Like' ? '#00cc00' : '#cc0000'};
              margin: auto;
              font-size: 25;
              `;

export const Title = Styled.Text`
              font-size: 22;
              font-weight: bold;
              color: white;
              width: 100%;
              align-items: flex-start;
              justify-content: flex-end;
              margin-bottom: 20;
              `;

export const Description = Styled.Text`
              font-size: 16;
              color: white;
              margin-bottom: 0;

`;
export const Clicked = Styled.TouchableOpacity`
    opacity: 0;
    position: relative;
    z-index: 30;
`;
