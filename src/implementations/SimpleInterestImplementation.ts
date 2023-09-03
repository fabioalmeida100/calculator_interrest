import { IAmortization } from "../interfaces/IAmortization";

export class SimpleInterestImplementation implements IAmortization {
    getValue(value: number, months: number, interrest: number) {
        return value * (1 + (interrest/100) * months);
    }
}
