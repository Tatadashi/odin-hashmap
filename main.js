import { HashMap } from "./hashMap.js";

const test = new HashMap() // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "yellow");
test.set("frog", "pink");
test.set("kite", "light blue");

test.set("moon", "silver");

test.set("hat", "green");
test.set("ice cream", "pure white");
test.set("jacket", "jet black");

console.log(test.remove("hat"));
console.log(test.entries());