class Square {
constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
const size1 = 100;
const size2 = 200;

const print = (msg, value) => {
console.log(`${msg} ${value}`);
};

export {Square, size1, size2, print};
// module.exports = {Square, size1, size2, print};