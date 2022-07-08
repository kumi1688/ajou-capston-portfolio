const tf = require("@tensorflow/tfjs");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// >=========================
const d1 = tf.tensor([data], [9]);
const d2 = tf.tensor([data], [3, 3]);
const d3 = tf.tensor([data], [3, 1, 3]);
// ==========================<
console.log(d1.rank, d1.shape);
console.log(d2.rank, d2.shape);
console.log(d3.rank, d3.shape);
