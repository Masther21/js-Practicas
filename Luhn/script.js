/*
  * 🫩🫣👀
  * No me hago reponsable con lo que vayas hacer con el siguente algoritmo 
  * ya que solo esta hecho, para fines educativos👀.
  *
  *
*/

function luhnCheck(num) {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));

  let sum = arr.reduce((acc, val, i) => {
    if (i % 2 !== 0) {
      val *= 2;
      if (val > 9) val -= 9;
    }
    return acc + val;
  }, 0);
  
  return sum % 10 === 0;
}

            // Ejemplo de uso
console.log(luhnCheck("8273123273520569")); // false (inválido)
//🙄🫩🫣👀
