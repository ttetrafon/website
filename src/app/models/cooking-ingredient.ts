import { CookingUnits } from './cooking-units';

export class CookingIngredient {
    private name: string;
    private amount: number;
    private units: CookingUnits;

    constructor(name: string) {
        this.name = name;
        this.amount = 0;
        this.units = CookingUnits.none;
    }

    public getName() {
        return this.name;
    }

    public fullDisplay() {
        return this.name + ": " + this.amount + " " + CookingUnits[this.units];
    }

}
