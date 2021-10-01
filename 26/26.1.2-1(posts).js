import client from './24.2.3.1-1(client)';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });
export const readPost = (id) => client.get(`/api/posts/${id}`);
