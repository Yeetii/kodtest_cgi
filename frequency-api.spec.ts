const fun = require("./frequency-api");

test("Case insensitive", () => {
  expect(fun.countFrequencies("Hund huND")).toBe({ Hund: 2 });
});

test("Sorted after frequency", () => {
  expect(
    fun.countFrequencies("Banan Äpple Katt hund Banan Hund katt Hund")
  ).toBe({
    Hund: 3,
    Banan: 2,
    Katt: 2,
    Äpple: 1,
  });
});

test("Only return 10 most frequent", () => {
  const manyWordCall = fun.countFrequencies("a b c d e f g h i j k l m n o p");
  expect(Object.keys(manyWordCall).length);
});
