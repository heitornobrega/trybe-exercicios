const sum = require('./sum');

describe('Teste as somas', () => {
    it('A soma entre 4 e 5 deve ser 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('A soma entre 0 e 0 deve ser 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('A função sum lança um erro quando os parâmetros são 4 e "5"', () => {
        expect(() => { sum(4, '5') }).toThrow();

    })
    it('A mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
    })
})
