function esIsograma(texto) {
  texto = texto.toLowerCase().replace(/[^a-z]/g, ''); // solo letras
  let letras = new Set();

  for (let char of texto) {
    if (letras.has(char)) {
      return false; // letra repetida
    }
    letras.add(char);
  }
  return true;
}

// Ejemplos
console.log(esIsograma("murciélago")); // true 
//console.log(esIsograma("programar"));  // false
