import { randomizeOrder } from "./index.js";

describe("randomizeOrder function", () => {
  let testlet;

  beforeEach(() => {
    // create a new testlet before each test
    testlet = [
      { id: 1, type: "pretest", question: "Pretest Question 1" },
      { id: 2, type: "pretest", question: "Pretest Question 2" },
      { id: 3, type: "operational", question: "Operational Question 1" },
      { id: 4, type: "operational", question: "Operational Question 2" },
      { id: 5, type: "operational", question: "Operational Question 3" },
      { id: 6, type: "operational", question: "Operational Question 4" },
      { id: 7, type: "pretest", question: "Pretest Question 3" },
      { id: 8, type: "pretest", question: "Pretest Question 4" },
      { id: 9, type: "operational", question: "Operational Question 5" },
      { id: 10, type: "operational", question: "Operational Question 6" },
    ];
  });

  it("should return an array with the same length as the input array", () => {
    const result = randomizeOrder(testlet);
    expect(result.length).toEqual(testlet.length);
  });

  it("should not modify the input array", () => {
    const testletCopy = [...testlet];
    randomizeOrder(testlet);
    expect(testlet).toEqual(testletCopy);
  });

  it("should select 2 pretest items and place them at the beginning of the array", () => {
    const result = randomizeOrder(testlet);
    expect(result[0].type).toEqual("pretest");
    expect(result[1].type).toEqual("pretest");
  });

  it("should shuffle the remaining items in the array", () => {
    const result = randomizeOrder(testlet);
    const remainingEightRandomItems = result.slice(2);
    expect(remainingEightRandomItems).not.toEqual(testlet.slice(2));
  });

  it("should shuffle the array in a random way", function () {
    const result = randomizeOrder(testlet);
    // Check whether the shuffled array is not identical to the original array
    expect(result).not.toEqual(testlet);
    // Check whether the shuffled array has the same length as the original array
    expect(result.length).toEqual(testlet.length);
    // Check whether the elements in the shuffled array are truly random
    let matchCount = 0;
    for (let i = 0; i < testlet.length; i++) {
      if (testlet[i] === result[i]) {
        matchCount++;
      }
    }
    expect(matchCount).toBeLessThan(testlet.length * 0.5);
  });
});
