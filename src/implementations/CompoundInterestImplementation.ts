import { IAmortization } from "../interfaces/IAmortization";

export class CompoundInterestImplementation implements IAmortization {
    getValue(value: number, months: number, interrest: number) {
        return value * Math.pow((1 + (interrest/100)), months);
    }
}
