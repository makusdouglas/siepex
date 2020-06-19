import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import * as Yup from 'yup';
import { Container } from './styles';

const phoneNumberMatch = /(\(?\d{2,}\)?\s?)?(\d{4,}-?\d{4,})/g;

const schema = Yup.object().shape({
  id: Yup.number()
    .min(6, 'Insira sua matrícula completa')
    .required('Este campo é obrigatório'),
  tipo_usuario: Yup.string().required('Selecione uma opção'),
  nome: Yup.string()
    .trim()
    .min(6, 'Por favor, insira seu nome completo')
    .required('Este campo é obrigatório'),
  curso: Yup.string().required('Selecione uma opção'),
  telefone: Yup.string()
    .trim()
    .matches(phoneNumberMatch, 'Número de telefone inválido'),
  email: Yup.string()
    .trim()
    .email('Insira um e-mail válido')
    .required('Este campo é obrigatório'),
  senha: Yup.string()
    .trim()
    .min(6, 'Deve possuir 6 caracteres ou mais')
    .required('Este campo é obrigatório'),
});

const userOptions = [
  { id: 'docente', title: 'docente' },
  { id: 'discente', title: 'discente' },
  { id: 'tecnico', title: 'técnico' },
];

const courseOptions = [
  { id: 'educacao fisica', title: 'EDUCAÇÃO FÍSICA' },
  { id: 'engenharia de computacao', title: 'ENGENHARIA DE COMPUTAÇÃO' },
  { id: 'letras espanhol', title: 'LETRAS - ESPANHOL' },
  { id: 'letras portugues', title: 'LETRAS - PORTUGUES' },
  { id: 'matematica', title: 'MATEMÁTICA' },
  { id: 'pedagogia', title: 'PEDAGOGIA' },
  { id: 'sistemas de informacao', title: 'SISTEMAS DE INFORMAÇÃO' },
];
function InternalUser({ submitFunction }) {
  console.tron.log('data');

  return (
    <Container>
      <Form schema={schema} onSubmit={submitFunction}>
        <Select
          name="tipo_usuario"
          options={userOptions}
          placeholder="Tipo de usuário *"
        />
        <Input
          name="id"
          type="number"
          placeholder="Seu nº de matrícula ou SIAPE *"
        />
        <h3>
          Se ainda não possui, acesse o{' '}
          <a href="https://sigaa.ufpa.br/sigaa/verTelaLogin.do">SIGAA</a> e se
          cadastre
        </h3>
        <Input name="nome" type="text" placeholder="Seu nome *" />
        <Select
          name="curso"
          options={courseOptions}
          placeholder="Selecione a faculdade/curso *"
        />
        <Input name="telefone" type="tel" placeholder="Seu telefone *" />
        <Input name="email" type="text" placeholder="Seu email *" />

        <Input name="senha" type="password" placeholder="Sua senha secreta *" />

        <button type="submit">Cadastrar-se</button>
      </Form>
    </Container>
  );
}

export default InternalUser;
