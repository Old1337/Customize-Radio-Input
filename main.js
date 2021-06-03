console.time("start");
console.table(["Omar", "Ahmed","Fahmy","Ibrahim", "Ali"]);
console.table (["snake","ghost","evil","lion"]);
for (let i=0; i < 100; i++) {
    console.count("number of times i called the loop");
}
console.timeEnd("start");
console.group("Start");
console.log("a");
console.log("b");
console.log("c");
console.groupEnd();
console.group("Start");
console.log("a");
console.log("b");
console.log("c");
console.groupEnd();
console.groupCollapsed("End");
console.log("a");
console.log("b");
console.log("c");
console.groupEnd();
console.groupCollapsed("End");

console.log("a");
console.log("b");
console.log("c");
console.groupEnd();
var user ="Omar",
 age =17;
 console.log (user);
 console.log(age);