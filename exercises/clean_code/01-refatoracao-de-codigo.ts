// 3.1 Refatoração de Código
// function processItems(items: any[]) {
//   console.log('\n 1:')
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].price > 100) {
//       console.log(items[i].name + ' is expensive');
//     }
//   }
// }

interface Product {
  name: string
  price: number;
}

function processItemsRefactor(productList: Product[]) {
  for (const product of productList) {
    if (product.price > 100) {
      console.log(`${product.name} is expensive`)
    }
  }
}