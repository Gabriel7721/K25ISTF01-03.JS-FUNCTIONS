function printAll(...a) {
  console.log(a); // tất cả tham số truyền vào
  // thông qua rest operator sẽ được tạo thành
  // array
}

function printAlls(a) {
  console.log(a);
}

// function sum(...a) {
//   let total = 0;
//   for (const v of arguments) {
//     total += v;
//   }
// }
// nếu đã sử dụng arguments thì
// ko sử dụng rest-operator
function sum(...a) {
  return a.reduce((a, b) => a + b);
  // tích lũy
}

// NOTE: tính tổng prices cho sản phẩm sau trừ discount:
// discount = 10%
// prices = $100
// yêu cầu sử dụng Rest Operator & Reduce
function sumProducts(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount); 
}
