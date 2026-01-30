const p = {
  fN: "Julia",
  lN: "Bell",

  get fullName() {
    return `${this.fN} ${this.lN}`;
  },

  set fullName(v) {
    // localhost:9999/users/1
    // khi sử dụng split("/") và truyền pattern "/"
    // thì nó tự động tạo array và phân cách index
    // theo pattern truyền vào
    // [localhost:9999, users, 1]

    // NOTE: bắt lỗi thông qua if statement
    // if (typeof v !== "string") return;

    // NOTE: bắt lỗi thông qua throw error kết hợp try...catch
    if (typeof v !== "string") throw new Error("Value is not a string.");

    const parts = v.split(" ", 2);
    this.fN = parts[0];
    this.lN = parts[1];
  },
};

try {
  p.fullName = null;
} catch (error) {
  alert(error);
}
