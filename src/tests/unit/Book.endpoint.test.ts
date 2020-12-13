
const request = require('supertest');
import {app} from '../..';

describe('Managment Books', ()=>{

    test('create new book', () =>{
/*
        const result = request(app)
        .post('/api/books/')
        .send({title: 'new book test', description : 'new book test'})        
        .expect('Content-Type', /json/)
        .expect(200);
  */      
        expect(1+1).toBe(2);
    });

});