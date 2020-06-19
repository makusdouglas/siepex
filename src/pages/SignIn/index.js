import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';
import Events from '../../components/Events';
import { Form, Input } from '@rocketseat/unform';
import { Aside } from './styles';

import logo from '../../assets/logoufpa.png';

const schema = Yup.object().shape({
  id: Yup.number()
    .min(6, 'Insira sua matrícula completa')
    .required('Este campo é obrigatório'),
  senha: Yup.string()
    .min(6, 'Deve conter ao menos 6 caracteres')
    .required('Este campo é obrigatório'),
});

// const userOptions = [
//   { id: 'docente', title: 'docente' },
//   { id: 'discente', title: 'discente' },
//   { id: 'tecnico', title: 'técnico' },
// ];

function SignIn() {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ id, senha }) {
    dispatch(signInRequest(id, senha));
  }

  return (
    <>
      <main>
        <div id="content">
          <section>
            <div id="univerTitle">
              <img src={logo} alt="logo ufpa" />
              <hr />
              <div>
                <h1>Universidade federal do Pará</h1>
                <h2>Campus Castanhal</h2>
              </div>
            </div>
            <h1>SIGE - Sistema de gerenciamento de eventos</h1>

            <p>
              A Coordenadoria acadêmica em consonância com as Coordenadorias de
              extensão e pesquisa do Campus Universitário de Castanhal, torna
              público o edital qui normatiza o VIII Simpósio de Iniciação
              científica e Extensão de Campus Universitário de Castanhal - SIEX.
            </p>
          </section>

          <Aside>
            <hr />
            <Form schema={schema} onSubmit={handleSubmit}>
              <h2>Entrar</h2>
              <Input
                name="id"
                type="number"
                placeholder="Seu nº de matrícula ou SIAPE"
              />
              <Input name="senha" type="password" placeholder="Sua senha" />
              <button type="submit">
                {loading ? 'Carregando' : 'Entrar'}{' '}
              </button>
              <Link to="/register">Ainda não possuo conta</Link>
            </Form>
            <hr />
          </Aside>
        </div>

        <Events />
      </main>
    </>
  );
}

export default SignIn;
