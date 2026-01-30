const p = {
  fN: "Julia",
  lN: "Bell",

  get fullName() {
    return `${this.fN} ${this.lN}`;
  },

  set fullName(first) {
    this.fN = first;
  },

  // phương thức set sẽ gán bất kỳ giá
  // trị nào vào property của object
  // mà this đại diện.
};
