const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
    it('Testa se a função searchEmployee é definida', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
})