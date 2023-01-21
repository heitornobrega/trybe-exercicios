type filterCallback<U> =(
    value: U,
    index?: number,
    arr?: U[],
) => boolean;

export function meuFilter<T>(array: T[], callbackFn: filterCallback<T>): T[]{
    const novo = [];
    for (let c = 0; c < array.length; c += 1){
        if (callbackFn(array[c])) { 
            novo.push(array[c])
        }
    }
    return novo;
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((el) => el > 5); 
const arrayMeuFiltro = meuFilter(array, (el) => el > 5);