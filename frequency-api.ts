const express = require("express");
const bodyParser = require("body-parser");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.use(bodyParser.text({ extended: true }));

const cleanInput = (wordsString: string) => {
  const words = wordsString.split(/\s+/);
  return words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};

const countFrequencies = (words: string[]) => {
  let freqDict: Record<string, number> = {};
  words.forEach((word: string) => {
    if (!freqDict[word]) {
      freqDict[word] = 1;
    } else {
      freqDict[word]++;
    }
  });
  return freqDict;
};

const top10Dictionary = (freqDict: { [x: string]: any }) => {
  var items = Object.keys(freqDict).map(function (key: string) {
    return [key, freqDict[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  items = items.slice(0, 10);

  const shortDict: Record<string, number> = {};
  items.forEach((item) => {
    shortDict[item[0]] = item[1];
  });
  return shortDict;
};

app.post("/count", function (req: any, res: { end: (arg0: string) => void }) {
  const words = cleanInput(req.body);
  let freqDict = countFrequencies(words);
  freqDict = top10Dictionary(freqDict);
  res.end(JSON.stringify(freqDict));
});

var server = app.listen(port, hostname, function () {
  console.log("Frequency API listening at http://%s:%s", hostname, port);
});

exports.countFrequencies = countFrequencies;
exports.cleanInput = cleanInput;
exports.top10Dictionary = top10Dictionary;
