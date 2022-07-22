let myMap = new Map(); //8
myMap.set ('key1', 'value1');
myMap.set ('key2', 'value2');
myMap.set ('key3', 'value3');
for (let pair of myMap) {
  console.log(`X = ${pair[0]}, Y = ${pair[1]}`);
}