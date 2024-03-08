// Verificação se um número pertence à sequência de Fibonacci

function verificaFibonacci(numero) {
  let a = 0, b = 1;
  while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
  }
  if (b === numero) {
      console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
      console.log(numero + " não pertence à sequência de Fibonacci.");
  }
}

let numero = parseInt(prompt("Digite um número: "));
verificaFibonacci(numero);

// Inverter os caracteres de uma string

function inverteString(string) {
  let invertida = '';
  for (let i = string.length - 1; i >= 0; i--) {
      invertida += string[i];
  }
  return invertida;
}

let texto = prompt("Digite uma string: ");
console.log("String invertida:", inverteString(texto));
