import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function authLayout(props) {
  return (
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

authLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
