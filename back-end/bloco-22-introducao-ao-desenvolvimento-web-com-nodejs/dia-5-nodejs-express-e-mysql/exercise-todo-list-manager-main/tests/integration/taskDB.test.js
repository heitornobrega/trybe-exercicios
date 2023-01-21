const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const connection = require('../../src/db/connection')
const app = require('../../src/app');
const { response } = require('../../src/app');
const { execute } = require('../../src/db/connection');

const { use, expect } = chai;

use(chaiHttp);

const responseData = [
    {
        nome: 'Brincar com o cachorro',
        descricao: 'Saúde'

    },
    {
        nome: 'Estudar',
        descricao: 'Educação'
    }
]


describe('Testa a rota /task', function () {
    it('Testa o endpoint PUT /tasks/:id', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const result = await chai
            .request(app)
            .put('/tasks/3')
            .send({ nome: 'comer frutas', descricao: 'saude' })
        // console.log('console', result)
        expect(result.status).to.equal(201);
        expect(result.body).to.deep.equal({message: "1 tarefa atualizada com sucesso"})
    })
    it('Testa o endpoint DELETE /tasks/:id', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const result = await chai.request(app)
            .delete('/tasks/1')
        expect(result.status).to.equal(200);
        expect(result.body).to.deep.equal({ message: "1 removida com sucesso." })
    })
    it('Testa o enpoint GET /tasks', async function () {
        sinon.stub(connection, 'execute').resolves([responseData]);
        const result = await chai.request(app).get('/tasks');
        expect(result.status).to.equal(200);
        expect(result.body).to.deep.equal(responseData);
    })
    it('Testa o enpoint GET /tasks/1', async function () {
        sinon.stub(connection, 'execute').resolves([responseData[0]]);
        const result = await chai.request(app).get('/tasks/1');
        expect(result.status).to.equal(200);
        expect(result.body).to.deep.equal(responseData[0]);
    })
    afterEach(sinon.restore);
})
