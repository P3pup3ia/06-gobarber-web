import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLImageElement> {
  name: string;
}

const Input: React.FC<InputProps> = props => (
  <Container>
    <input {...props} />
  </Container>
);
export default Input;
