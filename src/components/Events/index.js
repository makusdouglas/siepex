import React from 'react';

import { Ul } from './styles';

const eventos = [
  {
    id: 0,
    nome: 'II Jornada de Inclusão Digital - JIDII',
    descricao:
      'Evento realizado pela UFPA, com intuito de apresentar tecnologias que ajudem a facilitar o convívio no Campus para pessoas com nescessidades especiais.',
    data_inicio: '25 de Agosto de 2020 ás 08:00h',
    data_fim: '30 de Agosto de 2020 às 18:00h',
    n_inscritos: 48,
    valor_inscricao: 'R$ 5,00',
  },
  {
    id: 1,
    nome: 'III Siex - Simpósio de Pesquisa e Extensão',
    descricao:
      'Evento realizado pela UFPA, com intuito de apresentar tecnologias que ajudem a facilitar o convívio no Campus para pessoas com nescessidades especiais.',
    data_inicio: '25 de Agosto de 2020 ás 08:00h',
    data_fim: '30 de Agosto de 2020 às 18:00h',
    n_inscritos: 48,
    valor_inscricao: 'R$ 5,00',
  },
  {
    id: 2,
    nome: 'II Jornada de Inclusão Digital - JIDII',
    descricao:
      'Evento realizado pela UFPA, com intuito de apresentar tecnologias que ajudem a facilitar o convívio no Campus para pessoas com nescessidades especiais.',
    data_inicio: '25 de Agosto de 2020 ás 08:00h',
    data_fim: '30 de Agosto de 2020 às 18:00h',
    n_inscritos: 48,
    valor_inscricao: 'R$ 5,00',
  },
  {
    id: 3,
    nome: 'II Jornada de Inclusão Digital - JIDII',
    descricao:
      'Evento realizado pela UFPA, com intuito de apresentar tecnologias que ajudem a facilitar o convívio no Campus para pessoas com nescessidades especiais.',
    data_inicio: '25 de Agosto de 2020 ás 08:00h',
    data_fim: '30 de Agosto de 2020 às 18:00h',
    n_inscritos: 48,
    valor_inscricao: 'R$ 5,00',
  },
];

function Events() {
  return (
    <Ul>
      <h1>Eventos Abertos</h1>
      {eventos.map((evento) => (
        <li id={evento.id}>
          <h3>{evento.nome}</h3>
          <p>{evento.descricao}</p>

          <hr />

          <section>
            <div>
              <span>Data de Inicio: </span>
              <strong>{evento.data_inicio}</strong>
            </div>
            <div>
              <span>Data de Fim: </span>
              <strong>{evento.data_fim}</strong>
            </div>
          </section>

          <div>
            <span>Nº de inscritos: </span>
            <strong>{evento.n_inscritos}</strong>
            <br />
            <span>Valor da inscrição: </span>
            <strong>{evento.valor_inscricao}</strong>
          </div>

          <button type="button">Cronograma</button>
        </li>
      ))}
    </Ul>
  );
}

export default Events;
