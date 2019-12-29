import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {DETAILS} from '~/constants/actions';
import {
  Container,
  Title,
  Line,
  ReferencesList,
  ReferenceSpace,
  ReferenceType,
  Reference,
} from './styles';

const References = ({dispatch}) => {
  const inputRef = useRef({});

  const handleWebPage = () => ({
    type: DETAILS.REFERENCE_LINK,
    payload: {
      type: inputRef.current.props.children[0].props.children
        .trim()
        .split(':')[0],
      uri: inputRef.current.props.children[1].props.children,
    },
  });

  return (
    <Container>
      <Title> Referencias </Title>
      <Line />
      <ReferencesList>
        <ReferenceSpace
          ref={inputRef}
          onPress={() => dispatch(handleWebPage())}>
          <ReferenceType> Wiki: </ReferenceType>
          <Reference numberOfLines={1}>
            http://marvel.com/universe/Amun?utm_campaign=apiRef&utm_source=b9c3077391c0c76b92b25c3dc324e2a1
          </Reference>
        </ReferenceSpace>
      </ReferencesList>
    </Container>
  );
};
const mapStateToProps = state => ({
  ...state,
  reference: state.reference,
});
export default connect(mapStateToProps)(References);
