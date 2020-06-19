import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { id, senha } = payload;

  try {
    const response = yield call(api.post, 'login', {
      id,
      senha,
    });

    const { user, token } = response.data;

    console.tron.warn(user, token);

    yield put(signInSuccess(user, token));
    history.push('/main');
    if (user) {
      const firstName = user.nome.split(' ');
      toast.success(`Bem vindo, ${firstName[0].toUpperCase()}`);
    }
  } catch (error) {
    yield put(signFailure());
    toast.error(error.response.data.error);
  }
}
function* signUp({ payload }) {
  const {
    id,
    nome,
    email,
    senha,
    curso,
    telefone,
    tipo_usuario,
    tipo_participante,
  } = payload;

  try {
    yield call(api.post, 'register', {
      id,
      nome,
      email,
      senha,
      curso,
      telefone,
      tipo_usuario,
      tipo_participante,
    });

    history.push('/');
  } catch (error) {
    yield put(signFailure());
    toast.error(error.response.data.error);
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
