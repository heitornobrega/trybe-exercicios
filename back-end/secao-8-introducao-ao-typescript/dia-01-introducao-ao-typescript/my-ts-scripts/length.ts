type Unidades = { nome: string, simbolo: string, valor: number }
type Fator = { nome: string, simbolo: string, valor: number }

const unidades: Unidades [] = [
    { nome: 'Quilômetro', simbolo: 'km', valor: 1000 },
    { nome: 'Hectômetro', simbolo: 'hm', valor: 100 },
    { nome: 'Decâmetro', simbolo: 'dam', valor: 10 },
    { nome: 'Metro', simbolo: 'm', valor: 1 },
    { nome: 'Decímetro	', simbolo: 'dm', valor: 0.1 },
    { nome: 'Centímetro	', simbolo: 'cm', valor: 0.01 },
    { nome: 'Milímetro	', simbolo: 'mm', valor: 0.001 },
]


function anyToMeter(valor: number, uniBase: string) {
    const converted = unidades.reduce((acc, curr) => {
        if (curr.simbolo === uniBase) {
            acc = valor * curr.valor;
        }
        acc += 0;
        return acc;
    }, 0);
    return converted;
}

export function convert(valor: number, uniBase: string, uniConv: string) {
    const valorInMeters = anyToMeter(valor, uniBase);
    const fator: Fator | undefined= unidades.find((ele) => ele.simbolo === uniConv);
    const val = fator?.valor;
    console.log(valorInMeters / val|undefined)

}

convert(1, 'km', 'cm')