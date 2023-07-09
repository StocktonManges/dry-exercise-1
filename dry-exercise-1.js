/* 
- The code below manually prints out each value in the animal Array.
- Refactor the code so it prints each value in the array, following the DRY Principle.
*/

const animals = ["Reindeer", "Wolf", "Cat"];

const printArrayItems = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArrayItems(animals);