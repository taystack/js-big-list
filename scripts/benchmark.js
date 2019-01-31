var BigList = require("../lib").default;

var COUNT = 100;
function filterPredicate(item) { return item % 10 === 0 }

console.log("\n*** BigList benchmark against Array.filter.slice ***");
console.log("\n*** filterPredicate = x => x % 10 === 0 ***");
console.log("Items\t\tBigList\t\tArray.filter.slice");
console.log("-----\t\t-------\t\t------------------");

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
  console.log(`${count}\t\t${bigListDone - start}ms\t\t${done - bigListDone}ms`);
}
