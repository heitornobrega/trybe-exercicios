"use strict";
class Estudante {
    constructor(mat, nome, notasProvas, notasTrab) {
        this._matricula = mat;
        this._nome = nome;
        this._notasDasProvas = notasProvas;
        this._notasDosTrabalhos = notasTrab;
    }
    somaDasNotas() {
        const notasProvas = this._notasDasProvas.reduce((acc, curr) => {
            const sum = curr + acc;
            return sum;
        }, 0);
        const notasTrab = this._notasDosTrabalhos.reduce((acc, curr) => {
            const sum = curr + acc;
            return sum;
        }, 0);
        return notasProvas + notasTrab;
    }
    mediaDasNotas() {
        console.log('entrei');
        const numDeNotas = this._notasDasProvas.length + this._notasDosTrabalhos.length;
        const media = this.somaDasNotas() / numDeNotas;
        return media;
    }
}
const estudante1 = new Estudante(1500, 'Heitor', [12, 80, 50, 60], [90, 95, 80]);
console.log(estudante1.mediaDasNotas());
