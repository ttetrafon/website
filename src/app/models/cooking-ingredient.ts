import { CookingUnits } from './cooking-units';

export class CookingIngredient {
    private name: string;
    private amount: number;
    private units: CookingUnits;

    constructor(name: string, amount: number | undefined, units: CookingUnits | undefined) {
        this.name = name;
        this.amount = amount ? amount : -1;
        this.units = units ? units : CookingUnits.none;
    }

    public getName() {
        return this.name;
    }

    public fullDisplay() {
        return this.name + ": " + this.amount + " " + CookingUnits[this.units];
    }

}
