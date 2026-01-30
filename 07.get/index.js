const p = {
  fN: "Julia",
  lN: "Bell",
  get fullName() {
    // lúc này fullname là property
    // và có thể truy vấn trực tiếp thông qua object
    // mà ko cần thực thi như function
    return `${this.fN} ${this.lN}`;
  },
};
