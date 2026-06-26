const arr = ["ligne n°1", "bus n°24", "tramway n°3", "ligne n°2", "bus n°20", "tramway n°312", "ligne n°130", "bus n°28", "tramway n°20", "ligne n°101"];

// your code here
const sortedArr = arr.slice().sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  return numA - numB;
});

console.log(sortedArr);
