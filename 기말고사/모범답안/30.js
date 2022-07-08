// 함수형 모델 설정방법
const tf = require("@tensorflow/tfjs");

const trainData = require("./data/car/train.json");
const testData = require("./data/car/test.json");

const trainSamples = trainData.cause.length;
const testSamples = testData.cause.length;
const features = trainData.cause[0].length;
const targets = trainData.result[0].length;

const trainTensors = {
  cause: tf.tensor2d(trainData.cause, [trainSamples, features]),
  result: tf.tensor2d(trainData.result, [trainSamples, targets]),
};

const testTensors = {
  cause: tf.tensor2d(testData.cause, [testSamples, features]),
  result: tf.tensor2d(testData.result, [testSamples, targets]),
};

const model = tf.sequential();
model.add(
  tf.layers.dense({
    units: 1,
    inputShape: [features],
  })
);

// 모델의 최적화를 위한 optimizer 설정
const optimizer = tf.train.adam(0.1);
model.compile({ optimizer: optimizer, loss: "meanAbsoluteError" });

function onEpochEnd(epoch, logs) {
  console.log(`${epoch}: ${logs.loss}`);
}

const fitParam = { epochs: 5000, callbacks: { onEpochEnd: onEpochEnd } };

model.fit(trainTensors.cause, trainTensors.result, fitParam).then((history) => {
  const trainLoss = model.evaluate(trainTensors.cause, trainTensors.result);
  trainLoss.print();
  const finalLoss = model.evaluate(testTensors.cause, testTensors.result);
  finalLoss.print();
});
