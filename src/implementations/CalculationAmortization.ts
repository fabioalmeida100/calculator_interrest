import { IAmortization } from "../interfaces/IAmortization";

export class CalculationAmortization {
  constructor(private amortization: IAmortization) {
    this.amortization = amortization;
  }

  calculate(value: number, months: number, interrest: number): number {
    return this.amortization.getValue(value, months, interrest);
  }
}
