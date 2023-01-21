"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = [
    { nome: 'Quilômetro', simbolo: 'km', valor: 1000 },
    { nome: 'Hectômetro', simbolo: 'hm', valor: 100 },
    { nome: 'Decâmetro', simbolo: 'dam', valor: 10 },
    { nome: 'Metro', simbolo: 'm', valor: 1 },
    { nome: 'Decímetro	', simbolo: 'dm', valor: 0.1 },
    { nome: 'Centímetro	', simbolo: 'cm', valor: 0.01 },
    { nome: 'Milímetro	', simbolo: 'mm', valor: 0.001 },
];
function anyToMeter(valor, uniBase) {
    const converted = unidades.reduce((acc, curr) => {
        if (curr.simbolo === uniBase) {
            acc = valor * curr.valor;
        }
        acc += 0;
        return acc;
    }, 0);
    return converted;
}
function convert(valor, uniBase, uniConv) {
    const valorInMeters = anyToMeter(valor, uniBase);
    const fator = unidades.find((ele) => ele.simbolo === uniConv);
    const val = fator?.valor;
    console.log(valorInMeters / val);
}
exports.convert = convert;
convert(1, 'km', 'cm');
