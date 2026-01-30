function sum() {
  let total = 0;
  //   total = a + b;
  for (const v of arguments) {
    total += v;
  }
  return total;
}

// biến arguments của global thì tự động
// truy cập vào toàn bộ tham số truyền
// vào function và ko giới hạn số lượng
