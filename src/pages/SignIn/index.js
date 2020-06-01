import React from 'react';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Input, Select } from '@rocketseat/unform';

const schema = Yup.object().shape({
  matricula: Yup.number().required(),
});

const userOptions = [
  { id: 'doc', title: 'docente' },
  { id: 'dic', title: 'discente' },
  { id: 'ext', title: 'externo' },
];

function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src="" alt="" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Select name="user-type" options={userOptions} />
        <Input
          name="matricula"
          type="number"
          placeholder="Seu nº de matrícula"
        />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Ainda não possuo conta</Link>
      </Form>
    </>
  );
}

export default SignIn;
