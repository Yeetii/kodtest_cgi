const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

const countFrequencies = (wordsString: string) => {
  const words = cleanInput(wordsString);

  let freqDict = {};
  words.forEach((word) => {
    if (!freqDict[word]) {
      freqDict[word] = 1;
    } else {
      freqDict[word]++;
    }
  });
  freqDict = top10Dict(freqDict);
  return freqDict;
};

const top10Dict = (freqDict) => {
  var items = Object.keys(freqDict).map(function (key: string) {
    return [key, freqDict[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  items = items.slice(0, 10);

  const shortDict = {};
  items.forEach((item) => {
    shortDict[item[0]] = item[1];
  });
  return shortDict;
};

const cleanInput = (wordsString: string) => {
  const words = wordsString.split(" ");
  return words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};

app.get("/", function (_req, res) {
  res.end("It works!");
});

var server = app.listen(port, hostname, function () {
  console.log("Example app listening at http://%s:%s", hostname, port);
});

exports.countFrequencies = countFrequencies;
exports.cleanInput = cleanInput;
