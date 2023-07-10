const request = require('supertest');
const {expect} = require('expect');

const app = require('express')();

describe('Testing POSTS/answers endpoint', () => {
  it('respond with valid HTTP status code and description and message', async () => { // add `async` keyword here
    const response = await request(app)
      .post('/news')
      .send({ title: 'How to write a answer', body: 'Access the Educative answer tutorial' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Answer Saved Successfully.');
  });
});