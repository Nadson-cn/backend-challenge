// 1.3 Imutabilidade e Manipulação de Arrays
function makeAllPositive(numberList: number[]): number[] {
  return numberList.map((item) => Math.abs(item))
}