"use strict";
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
    get nomeCliente() { return this.nome; }
}
class Item {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class Pedido {
    constructor(cliente, itens, paymentMethod, desc) {
        this.cliente = cliente;
        this.itens = itens;
        this.paymentMethod = paymentMethod;
        this.desc = desc;
    }
    get NomeCliente() { return this.cliente; }
}
const cliente1 = new Cliente('Tio Roberto');
const cliente2 = new Cliente('Poze');
const batataFrita = new Item('Batata frita', 8.00);
const hamburger = new Item('Hamburger', 32.50);
const refriLata = new Item('Coca-cola', 6.50);
const pedido1 = new Pedido(cliente1, [hamburger, batataFrita, refriLata], 'Pendurado', 0.10);
console.log(pedido1);
console.log(pedido1.NomeCliente.nomeCliente);
