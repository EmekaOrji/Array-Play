// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

console.log("S_____T_____A_____R_____T_____FILTER");
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(e => e.year >= 1500 && e.year < 1600);
console.table(oldInventors);
console.log("E__________N__________D");
console.log("");

console.log("S_____T_____A_____R_____T_____MAP");
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const name = inventors.map(e => e.first + " " + e.last);
console.table(name);
console.log("E__________N__________D");
console.log("");

console.log("S_____T_____A_____R_____T_____SORT");
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.forEach(e => e.age = e.passed - e.year);
ageSort = inventors.sort((a, b) => a.age < b.age ? 1 : -1)
ageSort.forEach(e => console.log(e.first + " " + e.last + " lived for " + (e.passed - e.year) + "yrs"));

console.log("--------------------------------------");

yearSort = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
yearSort.forEach(e => console.log(e.first + " " + e.last + " was born in the year " + e.year + " and died " + e.passed));
console.table(yearSort);
console.log("E__________N__________D");
console.log("");

console.log("S_____T_____A_____R_____T_____REDUCE");
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, e) => total + (e.passed - e.year), 0);
console.log(totalYears);
console.log("E__________N__________D");
console.log("");

console.log("S_____T_____A_____R_____T_____SORT");
// 5. Sort the inventors by years lived
inventors.forEach(e => e.age = e.passed - e.year);
ageSort = inventors.sort((a, b) => a.age < b.age ? 1 : -1)
console.table(ageSort);
console.log("E__________N__________D");
console.log("");

console.log("S_____T_____A_____R_____T_____");
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
console.log("E__________N__________D");
console.log("");


const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle'/*, 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'*/
];
// const people = ['firstName, lastName']

console.log("S_____T_____A_____R_____T_____SORT");
// 7. sort Exercise
// Sort the people alphabetically by last name
var sumArr = [""];
var person = people.forEach((e, i) => {
  var ind = e.split(", ");
  var newArr = [ind[1], ind[0]];
  var newStr = newArr.join();
  var secondArr = [newStr];
  secondArr.forEach(e => {
    sumArr += [e] + " ";
    newSumArr = sumArr.split(" ")
  });
});
console.table(newSumArr.sort());
//This kinda sucks!
console.log("E__________N__________D");
console.log("");


console.log("S_____T_____A_____R_____T_____REDUCE");
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
// console.table(data);
for (let i = 0; i < data.length; i++) {
  const e = data[i];
  var sum = data.indexOf(data[i]);
  // console.log(e + " appears " + sum + " times");
  // console.log(sum);
}
console.log("E__________N__________D");
console.log("");
