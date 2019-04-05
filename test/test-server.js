'use strict';

const chai = require('chai');
const chaihttp = require('chai-http');
const {app} = require('../server');

const expect = chai.expect;

chai.use(chaihttp);

describe('testing root endpoint', function(){

    it('testing for server is working',function(){
        return chai
            .request(app)
            .get('/')
            .then(res => {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            })
    })
})