const p = {
  fN: "Julia",
  lN: "Bell",
  fullName() {
    // return `${p.fN} ${p.lN}`;

    // this ở thời điểm hiện tại là object p
    return `${this.fN} ${this.lN}`;
  },
};

// nếu this nằm ở ngoài Global thì lúc này nó đại diện object global hoặc window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
