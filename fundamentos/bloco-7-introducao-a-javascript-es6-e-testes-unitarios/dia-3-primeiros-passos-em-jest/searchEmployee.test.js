const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
    it('Testa se a função techList é definida', () => {
        expect(searchEmployee).toBeDefined();
      });
      it('Testa se techList é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
      });
})