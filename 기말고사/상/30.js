const tf = require("@tensorflow/tfjs");

const trainData = require("./data/car/train.json");
const testData = require("./data/car/test.json");

const trainSamples = trainData.cause.length;
const testSamples = testData.cause.length;
const features = trainData.cause[0].length;
const targets = trainData.result[0].length;

// >=========================
// 코드를 작성할 부분
const trainTensors = {
  cause: tf.tensor2d(trainData.cause, [trainData.cause.length, 5]),
  result: tf.tensor2d(trainData.result, [trainData.result.length, 1]),
};
const testTensors = {
  cause: tf.tensor2d(testData.cause, [testData.cause.length, 5]),
  result: tf.tensor2d(testData.result, [testData.result.length, 1]),
};

const model = tf.sequential();
model.add(
  tf.layers.dense({
    units: 1, 
    inputShape: [5], 
  })
);

const optimizer = tf.train.adam();
model.compile({ optimizer: optimizer, loss: "meanAbsoluteError" });

async function onEpochEnd(epoch, logs) {
  console.log(logs.loss);
}

async function train() {
  await model.fit(trainTensors.cause, trainTensors.result, {
    epochs: 50000,
    callbacks: {
      onEpochEnd: onEpochEnd,
    },
  });
  const finalLoss = model.evaluate(trainTensors.cause, trainTensors.result);
  finalLoss.print();
  
}

const fitParam = { epochs: 50000};
// ==========================<
model.fit(trainTensors.cause, trainTensors.result, fitParam).then((history) => {
  const finalLoss = model.evaluate(testTensors.cause, testTensors.result);
  finalLoss.print();
});
