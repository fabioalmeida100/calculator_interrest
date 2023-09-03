import { IAmortization } from "../interfaces/IAmortization";

export class CalculationAmortization {
  constructor(private amortization: IAmortization) {
    this.amortization = amortization;
  }

  calculate(value: any, months: any, interrest: any): number {
    return this.amortization.getValue(value, months, interrest);
  }
}
