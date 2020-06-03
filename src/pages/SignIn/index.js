import React from 'react';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Input, Select } from '@rocketseat/unform';

import logo from '../../assets/logoufpa.png';

const schema = Yup.object().shape({
  matricula: Yup.string()
    .min(6, 'Insira sua matrícula completa')
    .required('Este campo é obrigatório'),
  tipoParticipante: Yup.string().required('Selecione uma opção'),
  senha: Yup.string()
    .min(6, 'Deve conter ao menos 6 caracteres')
    .required('Este campo é obrigatório'),
});

const userOptions = [
  { id: 'docente', title: 'docente' },
  { id: 'discente', title: 'discente' },
  { id: 'tecnico', title: 'técnico' },
];

function SignIn() {
  function handleSubmit({ tipoParticipante, matricula, senha }) {
    console.log({
      tipoParticipante,
      matricula,
      senha,
    });
  }

  return (
    <>
      <img src={logo} alt="logo ufpa" />
      <h1>SIGE</h1>
      <h2>Sistema de gerenciamento de eventos</h2>

      <p>
        A Coordenadoria acadêmica em consonância com as Coordenadorias de
        extensão e pesquisa do Campus Universitário de Castanhal, torna público
        o edital qui normatiza o VIII Simpósio de Iniciação científica e
        Extensão de Campus Universitário de Castanhal - SIEX.
      </p>

      <aside>
        <h2>Login</h2>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Select
            name="tipoParticipante"
            options={userOptions}
            placeholder="Tipo de usuário"
          />
          <Input
            name="matricula"
            type="number"
            placeholder="Seu nº de matrícula"
          />
          <Input name="senha" type="password" placeholder="Sua senha" />
          <button type="submit">Entrar</button>
          <Link to="/register">Ainda não possuo conta</Link>
        </Form>
      </aside>
    </>
  );
}

export default SignIn;
