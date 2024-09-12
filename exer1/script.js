var valor = parseFloat(prompt("Digite um valor para verificar na sequência de Fibonacci"));
var penultimo = 0, ultimo = 1;
var numero = 1; 
var fibonacci = [0, 1];

if (valor === 0) {
  alert("Número encontrado na sequência.");
} else {
  while (numero <= valor) {
    if (numero === valor) {
      alert("Número encontrado na sequência. Veja: " + fibonacci);
      break;
    }

    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    fibonacci.push(numero);

    if (numero > valor) {
      alert("Número não existe na sequência. Veja: " + fibonacci);
      break;
    }
  }
}

