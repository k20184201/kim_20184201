import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from '../lib/24.2.3.5-2(createRequsetSaga)';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');
