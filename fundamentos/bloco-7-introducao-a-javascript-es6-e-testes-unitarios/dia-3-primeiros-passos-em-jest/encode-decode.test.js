// encodeDecode.test.js
const { encode, decode } = require('./encode-decode.js');

describe('Testa a função encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
    });
    it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('texto de teste')).toBe('t2xt4 d2 t2st2');   
    })
    it('Testa se as demais letras não são convertidas', () => {
        expect(encode('bcdfghjklmnpqrstvxz')).toBe('bcdfghjklmnpqrstvxz');
    })
    it('Testa se a string retornada mesmo número de caracteres que a string passada.', () => {
        expect(encode('texto de teste')).toHaveLength(14);
    })
});

describe('Testa a função decode', () => {
    it('Testa se os numeros 1, 2, 3, 4, e 5 são convertidos nas vogais a, e, i, o, u', () => {
        expect(decode('12345')).toBe('aeiou');
    })
    it('Testa se os demais numeros não são convertidas', () => {
        expect(decode('98760')).not.toContain('aeiou');
    })
    it('Testa se a string retornada mesmo número de caracteres que a string passada.', () => {
        expect(decode('123456789')).toHaveLength(9);
    })
})