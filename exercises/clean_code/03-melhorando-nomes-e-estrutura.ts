// 3.3 Melhorando Nomes e Estrutura
// function c(x: number[]): number[] {
//   const r = [];
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] % 2 === 0) {
//       r.push(x[i] * 2);
//     }
//   }
//   return r;
// }

function doubleEvenNumbers(numbers: number[]): number[] {
  return numbers
    .filter((item) => item % 2 === 0)
    .map((item) => item * 2)
}


