const request = require('supertest')
const fs = require('fs');
import path from 'path';
let server = require('../index')

const api = 'http://localhost:1337';

describe('/publish API', () => {
  it('should process the image', async () => {
    const file = path.join(__dirname, './', '500.png');

    const contents = fs.readFileSync(file, {encoding: 'base64'});
    const res = await request(api)
      .post('/api/general/publish')
      .send({
        file: contents,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('previewUrl')
  }, 50000)
})
describe('/preview endpoint', () => {
  it('should allow viewing image', async () => {
    const url = '/preview/preview.png';
    const res = await request(api).get(url)
    expect(res.statusCode).toEqual(200);
  }, 5000)
});