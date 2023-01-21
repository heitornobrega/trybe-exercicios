class Cliente{
    constructor(private nome: string) { }
    get nomeCliente() { return this.nome}
}

class Item{
    constructor(private nome: string, private preco: number){}
}

class Pedido{
    constructor(private cliente: Cliente, private itens: Item[], private paymentMethod: string, private desc: number) { }

    get NomeCliente(){return this.cliente}
}

const cliente1 = new Cliente('Tio Roberto');
const cliente2 = new Cliente('Poze');
const batataFrita = new Item('Batata frita', 8.00);
const hamburger = new Item('Hamburger', 32.50)
const refriLata = new Item('Coca-cola', 6.50);

const pedido1 = new Pedido(cliente1, [hamburger, batataFrita, refriLata], 'Pendurado', 0.10);

console.log(pedido1);
console.log(pedido1.NomeCliente.nomeCliente)
