const fun = require("./frequency-api");

test("Clean input", () => {
  expect(fun.cleanInput("hUnd kaTT")).toStrictEqual(["Hund", "Katt"]);
});

test("Count word occurance", () => {
  expect(fun.countFrequencies("Hund Hund")).toStrictEqual({ Hund: 2 });
});

test("Case insensitive", () => {
  expect(fun.countFrequencies("Hund huND")).toStrictEqual({ Hund: 2 });
});

test("Sorted after frequency", () => {
  expect(
    fun.countFrequencies("Banan Äpple Katt hund Banan Hund katt Hund")
  ).toStrictEqual({
    Hund: 3,
    Banan: 2,
    Katt: 2,
    Äpple: 1,
  });
});

test("Only return 10 keys", () => {
  const manyWordCall = fun.countFrequencies("a b c d e f g h i j k l m n o p");
  expect(Object.keys(manyWordCall).length).toBe(10);
});

test("Only return 10 most frequent", () => {
  const manyWordCall = fun.countFrequencies(
    "a a b b c c d d e e f f g g h h i i j k l m n o p p"
  );
  expect(manyWordCall).toStrictEqual({
    A: 2,
    B: 2,
    C: 2,
    D: 2,
    E: 2,
    F: 2,
    G: 2,
    H: 2,
    I: 2,
    P: 2,
  });
});
