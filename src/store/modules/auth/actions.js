export function signInRequest(id, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id, senha },
  };
}
export function signInSuccess(user, token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token },
  };
}
export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      data,
    },
  };
}
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
