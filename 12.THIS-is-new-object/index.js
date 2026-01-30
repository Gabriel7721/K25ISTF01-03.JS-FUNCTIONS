function Video(t) {
  this.title = t;
  console.log(this);
}

// this lúc này được sử dụng để tạo ra new object
// và this trong constructor function Video
// là đại diện cho Video
const v = new Video("Titanic phần 3");
