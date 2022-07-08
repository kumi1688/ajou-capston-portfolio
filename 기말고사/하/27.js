const tf = require("@tensorflow/tfjs");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// >=========================
const d1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const d2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const d3 = [[[1, 2, 3]], [[4, 5, 6]], [[7, 8, 9]]];
// ==========================<
console.log(d1.rank, d1.shape);
console.log(d2.rank, d2.shape);
console.log(d3.rank, d3.shape);
