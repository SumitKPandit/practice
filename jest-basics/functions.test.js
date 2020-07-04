const functions = require("./functions");

test("Add 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Add 2 + 2 to NOT equal 4", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});