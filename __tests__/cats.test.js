import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/cats', async () => {
  const expected = [
    {
      name: 'felix'
    },
    {
      name: 'garfield'
    }
  ];

  const response = await request.get('/api/cats');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});

it('GET /api/cats/1', async () => {
  const expected = { name: 'felix' };

  const response = await request.get('/api/cats/1');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expected);

});

it('GET /api/cats/:id', async () => {
  const expected = { name: 'felix' };

  const response = await request.get('/api/cats/:id');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expected);

});