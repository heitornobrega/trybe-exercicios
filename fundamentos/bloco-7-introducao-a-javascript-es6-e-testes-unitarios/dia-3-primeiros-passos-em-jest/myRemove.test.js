const myRemove = require('./myRemove');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('A chamada myRemove([1, 2, 3, 4], 3) deve retornar [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('A chamada myRemove([1, 2, 3, 4], 3) não deve retornar [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('A chamada myRemove([1, 2, 3, 4], 5) deve retornar [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

})