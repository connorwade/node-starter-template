import http from 'http';
import assert from 'assert';

import server from '../src/index.js';

require('dotenv').config();

const PORT = process.env.PORT_NUMBER;

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get(`http://localhost:${PORT}`, res => {
      assert.strictEqual(PORT, res.statusCode);
      server.close();
      done();
    });
  });
});