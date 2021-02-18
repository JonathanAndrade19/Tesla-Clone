import React from 'react';

import { Container } from './styles';

const ModelOverLay: React.FC = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  );
};

export default ModelOverLay;
