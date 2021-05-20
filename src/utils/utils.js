import request from 'superagent';

export async function signUp(user) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) throw response.body;

  return response.body;
}

export async function logIn(user) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) throw response.body;

  return response.body;
}

export async function getGifs(search) {
  const response = await request
    .get('/api/gifs')
    .query({ q: search })
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  console.log('response body ', response.body);
  return response.body;
}