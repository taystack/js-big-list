var BigList = require("../lib").default;

var COUNT = 100;
function filterPredicate(item) { return item % 10 === 0 }

console.log("\n*** BigList benchmark against Array.filter.slice ***");
console.log("\n*** filterPredicate = x => x % 10 === 0 ***");
console.log("Items".padEnd(20), "BigList".padEnd(20), "Array.filter.slice");
console.log("-----".padEnd(20), "-------".padEnd(20), "------------------");

var count = COUNT * 10;
while (count < 10000000) {
  count = count * 10;
  var items = new Array(count).fill().map((_, i) => i);
  var start = new Date().getTime();

  BigList(COUNT, items, filterPredicate);

  var bigListDone = new Date().getTime();

  items.filter(filterPredicate).slice(0, COUNT);

  var done = new Date().getTime();

  // console.log(count.toLocaleString() + "\t" + bigListDone - start + "ms\t" + done - bigListDone + "ms");
  // console.log(`${count}${bigListDone - start}ms\t\t${done - bigListDone}ms`);
  console.log(`${count.toLocaleString()}`.padEnd(20), `${bigListDone - start}ms`.padEnd(20), `${done - bigListDone}ms`);
}
