import request from 'supertest'
import "core-js/stable";
import "regenerator-runtime/runtime";
import app from '../express-app/app.js'

import user123 from '../mockdata/users/user123'
import { async } from 'regenerator-runtime/runtime';


describe('Test a 404 on routes', () => {
  test('It should respond with a 404 status for /some-fake-route route', () => {
    request(app)
      .get('/some-fake-route')
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
      });
  })
})

describe('Test a 200 on routes', () => {
  test('It should respond with a 200 status for /about route', () => {
    request(app)
      .get('/about')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });

  test('It should respond with a 200 status for /user route', () => {
    request(app)
      .get('/user')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});

describe('Test different user IDs and expected outcomes', () => {
  // direct user '0' is shown 'special user' content
  test('It should 200 and display text for special users', async done => {
    await request(app)
      .get('/user/0')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('special user content')

        done()
      })
  })

  // direct other users are shown 'regular user' content
  test('It should 200 and display text for regular users', async done => {
    await request(app)
      .get('/user/*')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.text).toContain('regular user')

        done()
      })
  })
})

describe('Testing the user data for Dave', () => {
  test('It outputs some data', async done => {
    expect(user123.name).toBe('Dave')

    await request(app)
      .get('/user/123')
      .then(response => {
        expect(response.statusCode).toBe(200)
        const strToMatch = 'regular user content for ' + user123.name
        expect(response.text).toBe(strToMatch)
        done()
      })
  })
})