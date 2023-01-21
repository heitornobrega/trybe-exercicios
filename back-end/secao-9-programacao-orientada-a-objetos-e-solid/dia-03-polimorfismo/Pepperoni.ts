import Pizza from "./Pizza";

export default class Pepperoni extends Pizza{

    constructor(size: 'medium' | 'large' | 'extra-large') {
        super(size)
        this.ingredients.push("pepperoni", "cheese")
    }

    public makePizza(): string {
        return `Pepperoni pizza - size: ${this.size}, ingredients: ${this.ingredients}`
    }

    public printPrice(): string {
        const pizzaPrice = {
            "medium": 24,
            "large": 32,
            "extra-large": 38
        }
        const price = pizzaPrice[this.size] ?? pizzaPrice.large;
        return `Total price: $ ${price.toFixed(2)}`;
    }
}

const pepperoni = new Pepperoni('extra-large');

console.log(pepperoni.makePizza());
console.log(pepperoni.printPrice());
console.log(Pizza.OrdersCounter);

const pepperoni2 = new Pepperoni('large');

console.log(pepperoni2.makePizza());
console.log(pepperoni2.printPrice());
console.log(Pizza.OrdersCounter);