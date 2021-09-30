import client from './24.2.3.1-1(client)';
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');
