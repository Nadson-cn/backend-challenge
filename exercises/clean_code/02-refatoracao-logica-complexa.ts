// 3.2 Refatoração de Lógica Complexa
// function calculateDiscount(price: number, isPremium: boolean): number {
//   if (isPremium) {
//     if (price > 100) {
//       return price * 0.8;
//     } else {
//       return price * 0.9;
//     }
//   } else {
//     if (price > 100) {
//       return price * 0.9;
//     } else {
//       return price;
//     }
//   }
// }

function calculatePremiumDiscount(price: number): number {
  return price > 100 ? price * 0.8 : price * 0.9
}

function calculateStandardDiscount(price: number): number {
  return price > 100 ? price * 0.9 : price
}

function calculateDiscount(price: number, isPremium: boolean): number {
  return isPremium ? calculatePremiumDiscount(price) : calculateStandardDiscount(price)
}