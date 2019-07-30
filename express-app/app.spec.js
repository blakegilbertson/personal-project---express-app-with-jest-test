// const request = require('supertest')
// const app = require('./app')
import request from 'supertest'
import app from '../express-app/app.js'

describe('Test a 200 on routes', () => {

  // As an FYI, I intentionally built these two differently 
  //   - the first based on the express tut and the second on MP

  test('It should respond with a 200 status for /blake route', async () => {
    request(app)
      .get('/blake')
      // .expect('Content-Type', /json/)
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
