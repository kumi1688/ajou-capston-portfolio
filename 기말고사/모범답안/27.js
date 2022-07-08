const tf = require("@tensorflow/tfjs");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// >=========================
// 코드를 작성할 부분

const d1 = tf.tensor1d(data);

const d2 = tf.tensor2d(data, [3, 3]);

const d3 = tf.tensor3d(data, [3, 1, 3]);

// ==========================<
console.log(d1.rank, d1.shape);
console.log(d2.rank, d2.shape);
console.log(d3.rank, d3.shape);
