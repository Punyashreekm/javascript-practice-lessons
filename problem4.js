// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output:
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

function countMultiplies(arr) {
  const divisors = Array.from({ length: 9 }, (_, i) => i + 1);
  const counts = divisors.map((divisor) => [divisor, arr.filter((num) => num % divisor === 0).length]);
  return object.formEntries(counts);
}
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiplies(input);
console.log(output);
