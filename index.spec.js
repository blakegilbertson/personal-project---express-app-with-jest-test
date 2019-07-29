// import app from './index'

const request = require('supertest')
const express = require('express')
const app = express()

app.get('/blake', function(req, res) {
  res.status(200).json({ name: 'blake' });
});

app.get('/john', function(req, res) {
  res.status(200).json({ name: 'john' });
});

describe('Test a 200 on routes', () => {
  test('It should respond with a 200 status and be json for /blake route', async () => {
    request(app)
      .get('/blake')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });

  test('It should respond with a 200 status for route /john and the body name should equal john', async done => {
    await request(app)
      .get('/john')
      .then(response => {
        const body = response.body
        console.log('Something logged for john... ', body);

        expect(response.statusCode).toBe(200)

        expect(body.name).toBe('john')
      })

    done()
  })
});
