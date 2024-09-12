var palavra = prompt("Escreve uma palavra e vamos verificar se a letra 'a' aparece e quantas vezes se repete! (Pode ser maiuscula ou minuscula)");
var letra = "a";
var quantidade = 0;

palavra = palavra.toLowerCase();

if (palavra.includes(letra)) {

  for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] == letra) {
      quantidade++
    }
  }
  alert("A palavra tem a letra A e se repete " + quantidade + " vezes.")
}
else {
  alert("A palavra nao tem a letra A.")
}