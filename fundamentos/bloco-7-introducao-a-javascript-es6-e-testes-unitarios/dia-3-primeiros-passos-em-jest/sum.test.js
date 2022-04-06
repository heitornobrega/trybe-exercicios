const sum = require('./sum');

describe('Teste as somas', () => {
    it('A soma entre 4 e 5 deve ser 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('A soma entre 0 e 0 deve ser 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
})
