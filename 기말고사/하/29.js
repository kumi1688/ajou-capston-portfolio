const tf = require("@tensorflow/tfjs");

const trainData = require("./data/fish/train.json");
const testData = require("./data/fish/test.json");

const trainSamples = trainData.cause.length;
const testSamples = testData.cause.length;
const features = trainData.cause[0].length;
const targets = trainData.result[0].length;

// >=========================
const model = tf.sequential();
model.add(
  tf.layers.dense({
    units: 1,
    inputShape: [1],
  })
);

const optimizer = tf.train.sgd(0.1);
model.compile({ optimizer: optimizer, loss: "meanAbsoluteError" });

// ==========================<
model.fit(trainTensors.cause, trainTensors.result, fitParam).then((history) => {
  const finalLoss = model.evaluate(testTensors.cause, testTensors.result);
  finalLoss.print();
});
