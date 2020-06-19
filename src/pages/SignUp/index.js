import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@rocketseat/unform';

import Events from '../../components/Events';
import { Aside } from './styles';

import logo from '../../assets/logoufpa.png';
import InternalUser from './InternalUser';
import ExternalUser from './ExternalUser';

const tiposParticipante = [
  { id: 'interno', title: 'Participante interno (UFPA)' },
  { id: 'externo', title: 'Participante externo (outras)' },
];

function SignUp() {
  function handleSubmit({
    id,
    nome,
    email,
    senha,
    curso,
    telefone,
    tipo_usuario,
  }) {
    console.log({
      id,
      nome,
      email,
      senha,
      curso,
      telefone,
      tipo_usuario,
      tipo_participante,
    });
  }

  const [tipo_participante, setTipo_participante] = useState('');

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

          <Aside id="register">
            <hr />
            <h2>Cadastrar</h2>
            <Select
              name="tipo_participante"
              options={tiposParticipante}
              placeholder="Selecione uma dessas opções"
              onChange={(e) => setTipo_participante(e.target.value)}
            />

            {tipo_participante === 'interno' ? (
              <InternalUser submitFunction={handleSubmit} />
            ) : tipo_participante === 'externo' ? (
              <ExternalUser submitFunction={handleSubmit} />
            ) : (
              <></>
            )}
            <Link to="/">Ja tenho conta</Link>
            <hr />
          </Aside>
        </div>

        <Events />
      </main>
    </>
  );
}

export default SignUp;
