import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Inputs';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="goBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci Minha Senha</a>
      </form>

      <a href="F">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
