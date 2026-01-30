const f = () => {
  a: 1;
}; // undefined

const fn = () => a; // a is not defined at fn

const fnn = () => ({ a: 1 }); // object

const fnnn = () => {
  return { a: 1 };
}; // object

// NOTE:
/**
 * Khi sử dụng arrow function
 * nếu không trả về giá trị gì
 * thì không sử dụng dấu {...}
 *
 * còn nếu có trả về thì phải sử dụng
 * return kèm {...}
 *
 * còn nếu chỉ trả về object thì sử dụng
 * dấu (...) bọc object. ví dụ ({a:1})
 */
