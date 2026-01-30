const video = {
  title: "Titanic phần 3",
  tags: ["A", "B", "C"],

  showTags() {
    // nếu callback function là một anonymous function
    // thì nó sẽ tạo ra 1 scope hoàn toàn mới
    // nên lúc này this không thể đại diện cho video
    // this.tags.forEach(function (tag) {
    //   console.log(this.title, tag);
    // });

    // nếu callback function là một arrow function
    // thì nó sẽ không tạo ra 1 scope mới
    // nên lúc này this vẫn đại diện cho video
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });

    // NOTE: Cách 1:
    // const self = this;
    // this.tags.forEach(function (tag) {
    //   console.log(self.title, tag);
    // });

    // NOTE: Cách 2:
    // this.tags.forEach(
    //   function (tag) {
    //     console.log(this.title, tag);
    //   }.bind(this),
    // );
  },
};
