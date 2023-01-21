export default abstract class Pizza {
    protected size: 'medium' | 'large' | 'extra-large';
    protected ingredients: string[];
    private static _orderCounter = 0;

    constructor(size: 'medium' | 'large' | 'extra-large') {
        this.size = size;
        this.ingredients = ["molho", "massa"];
        Pizza._orderCounter += 1;

    }

    get pizzaSize(): string{
        return this.size;
    }

    static get OrdersCounter(): string{
        return `Orders ccounter: ${Pizza._orderCounter}`
    }
    
    public abstract makePizza(): string;

    public abstract printPrice(): string;
}
