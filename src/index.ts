import { CalculationAmortization } from "./implementations/CalculationAmortization";
import { CompoundInterestImplementation } from "./implementations/CompoundInterestImplementation";
import { SimpleInterestImplementation } from "./implementations/SimpleInterestImplementation";
import { IAmortization } from "./interfaces/IAmortization";
import fs from 'fs';

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculate = async (option: any, amount: any, months: any, interrest: any, amortizationImplementation: IAmortization) => {
  try {
    const amortization = new CalculationAmortization(amortizationImplementation);
    return amortization.calculate(amount, months, interrest);
  } catch (error) {
    
  }
  console.log(amortization);
}

const showMenu = () => {
  console.clear();
  console.log("Calculadora de Amortização - Menu");
  console.log("1 - Simples");
  console.log("2 - Composto");
  console.log("3 - Sair");

  rl.question("Informe a opção desejada: ", (option: any) => { 
    if (option != "3") {
      rl.question("Informe o valor do empréstimo: ", (amount: any) => {
        rl.question("Informe a quantidade de meses: ", (months: any) => {
          rl.question("Informe o juros (mensal): ", (interrest: any) => {
            calculation(parseInt(option), amount, parseInt(months), interrest);
          });
        });
      });
    } else if (option == "1" || option == "2") {
      rl.close();
      return;
    }
  });
}

const calculation = (option: any, amount:any, months: any, interrest: any) => {
  let amortizationValue: any = 0;
  var value_calculation = -0;

  switch (option) {
    case 1:
      amortizationValue = calculate(option, amount, months, interrest, new SimpleInterestImplementation());
      break;
    case 2:
      amortizationValue = calculate(option, amount, months, interrest, new CompoundInterestImplementation());
      break;
    case 3:
      rl.close();
    default:
      console.log("Opção inválida");
      break;
  }

  console.log(`Valor da amortização: ${amortizationValue.toFixed(2)}`);

  rl.question("Pressione qualquer tecla para continuar...", () => {
    showMenu();
  });
}

showMenu();
