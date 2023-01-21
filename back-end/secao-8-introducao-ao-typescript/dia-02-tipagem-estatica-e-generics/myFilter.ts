type funcao<G> = (element: G, index?: number, array?: G[]) => boolean;

function myFilter<T>(array: T[], callback: funcao<T>) : Array <T>{
    let novo = [];
    for (let c = 0; c < array.length; c += 1){
        if (callback(array[c], c, array)) {
            novo.push(array[c]);
        }
    }
    return novo;
    
}

console.log(myFilter <number | string> ([8,7,'oi'], (ele)=> ele < 7));