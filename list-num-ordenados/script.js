function combinarListasOrdenadas(lista1, lista2) {
    let i = 0, j = 0;
    let resultado = [];

    while (i < lista1.length && j < lista2.length) {
      if (lista1[i] <= lista2[j]) {
        resultado.push(lista1[i]);
        i++;
      } else {
        resultado.push(lista2[j]);
        j++;
      }
    }

    // Agregar los elementos restantes
    while (i < lista1.length) {
      resultado.push(lista1[i]);
      i++;
    }

    while (j < lista2.length) {
      resultado.push(lista2[j]);
      j++;
    }

    return resultado;
  }

  // Ejemplo
  console.log(combinarListasOrdenadas([1, 3, 5], [2, 4, 6]));
            // Resultado: [1, 2, 3, 4, 5, 6]
