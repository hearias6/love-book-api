const request = require('supertest');
import {app} from '../..';

describe('hello-world', ()=>{

    test('say hello world endpoint', ()=>{
        const result = request(app)
        .post('/api/hello-world/')            
        .expect('Content-Type', /json/)
        .expect(200);
    });

});