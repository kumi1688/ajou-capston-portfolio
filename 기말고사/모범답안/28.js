const tf = require("@tensorflow/tfjs");

function AND(x1, x2) {
  x1 = tf.scalar(x1);
  x2 = tf.scalar(x2);
  const w1 = tf.scalar(0.5);
  const w2 = tf.scalar(0.5);
  const theta = tf.scalar(0.7);

  // >=========================
  // 코드를 작성할 부분
  let result;
  const weightedSum = tf.add(tf.mul(w1, x1), tf.mul(w2, x2));
  if (weightedSum >= theta) result = 1;
  else result = 0;

  // ==========================<
  return result;
}

const r1 = AND(0, 0);
const r2 = AND(1, 0);
const r3 = AND(0, 1);
const r4 = AND(1, 1);
console.log(r1, r2, r3, r4);
