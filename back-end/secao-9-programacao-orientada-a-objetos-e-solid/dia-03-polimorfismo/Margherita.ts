import Pizza from "./Pizza";

export default class Margherita extends Pizza{
    constructor(size: 'medium' | 'large' | 'extra-large') {
        super(size)
        this.ingredients.push('mozzarella', 'molho', 'tomate', 'manjeiricao')
    }

    public makePizza(): string {
        return `Margherita pizza - size: ${this.size}, ingredients: ${this.ingredients}`
    }

    public printPrice(): string {
        const pizzaPrice = {
            "medium": 23,
            "large": 30,
            "extra-large": 34
        }
        const price = pizzaPrice[this.size] ?? pizzaPrice.large;
        return `Total price: $ ${price.toFixed(2)}`;
    }
}

const margherita = new Margherita('extra-large');

console.log(margherita.makePizza());
console.log(margherita.printPrice());
console.log(Pizza.OrdersCounter);

const margherita2 = new Margherita('large');

console.log(margherita2.makePizza());
console.log(margherita2.printPrice());
console.log(Pizza.OrdersCounter);