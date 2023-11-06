import { IAmortization } from "../interfaces/IAmortization";

export class CalculationAmortization {
  constructor(private amortization: IAmortization) {
    this.amortization = amortization;
  }

  async calculate(value: any, months: any, interrest: any): Promise<any> {
    return this.amortization.getValue(value, months, interrest);
  }
}
