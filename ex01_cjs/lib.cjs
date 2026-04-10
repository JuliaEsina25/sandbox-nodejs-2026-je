class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
const size1 = 66;
const size2 = 77;

const print = (msg, value) => {
console.log(`${msg} ${value}`);
};

module.exports = {Square, size1,size2, print};