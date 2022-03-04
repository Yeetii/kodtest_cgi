const fun = require("./frequency-api");

test("Clean input", () => {
  expect(fun.cleanInput("hUnd kaTT")).toStrictEqual(["Hund", "Katt"]);
});

test("Count word occurance", () => {
  expect(fun.countFrequencies(["Hund", "Hund"])).toStrictEqual({ Hund: 2 });
});

test("Sorted after frequency", () => {
  expect(fun.top10Dictionary({ Hund: 2, Katt: 3 })).toStrictEqual({
    Katt: 3,
    Hund: 2,
  });
});

test("Only return 10 most frequent keys", () => {
  const bigDict = {
    a: 3,
    b: 2,
    c: 3,
    d: 2,
    e: 2,
    f: 2,
    g: 2,
    k: 2,
    p: 1,
    u: 10,
    o: 4,
  };
  expect(fun.top10Dictionary(bigDict)).toStrictEqual({
    a: 3,
    b: 2,
    c: 3,
    d: 2,
    e: 2,
    f: 2,
    g: 2,
    k: 2,
    u: 10,
    o: 4,
  });
});
