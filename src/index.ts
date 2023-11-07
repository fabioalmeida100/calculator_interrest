import { CalculationAmortization } from "./implementations/CalculationAmortization";
import { CompoundInterestImplementation } from "./implementations/CompoundInterestImplementation";
import { SimpleInterestImplementation } from "./implementations/SimpleInterestImplementation";
import { IAmortization } from "./interfaces/IAmortization";

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculate = (amount:number, months: number, interrest: number, amortizationImplementation: IAmortization) => {
  const amortization = new CalculationAmortization(amortizationImplementation);
 return amortization.calculate(amount, months, interrest);
}

const showMenu = () => {
  console.clear();
  console.log("Calculadora de Amortização - Menu");
  console.log("1 - Simples");
  console.log("2 - Composto");
  console.log("3 - Sair");

  rl.question("Informe a opção desejada: ", (option: string) => { 
    if (option === "3") {
      rl.close();
      return;
    }

    rl.question("Informe o valor do empréstimo: ", (amount: string) => {
      rl.question("Informe a quantidade de meses: ", (months: string) => {
        rl.question("Informe o juros (mensal): ", (interrest: string) => {
          calculation(parseInt(option), parseFloat(amount), parseInt(months), parseFloat(interrest));
        });
      });
    });
  });
}

const calculation = (option: number, amount:number, months: number, interrest: number) => {
  let amortizationValue: number = 0;

  switch (option) {
    case 1:
      amortizationValue = calculate(amount, months, interrest, new SimpleInterestImplementation());
      break;
    case 2:
      amortizationValue = calculate(amount, months, interrest, new CompoundInterestImplementation());
      break;
    case 3:
      rl.close();
      break;
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
