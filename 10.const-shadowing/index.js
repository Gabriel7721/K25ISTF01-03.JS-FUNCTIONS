const color = "red";

function backgroundColor() {
  const color = "blue"; // shadowing
  // const được khai báo trong function
  // sẽ được ưu tiên
  return color;
}

// WARNING: không được sử dụng shadowing
