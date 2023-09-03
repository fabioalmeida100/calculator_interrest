export interface IAmortization {
  getValue(value: number, months: number, interrest: number): number;
}
