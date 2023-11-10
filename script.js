// задача №1
const fill = (arraySize, value) => {
  const n = (arraySize > 0) ? arraySize : 0;
  const a = [];
  a.length = n;
  return a.fill(value);
};

const size = 3;
const valueToFill = 'a';
console.log(fill(size, valueToFill));

console.log(fill());
console.log(fill(-123, 1));

// задача №2
const reverse = (array) => {
  if (typeof (array) === 'object' && typeof (array.reverse) === 'function') {
    return array.reverse();
  }
  if (typeof (array) === 'string') return [...array].reverse();
  return [];
};

let data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
console.log(reverse());
console.log(reverse([]));
console.log(reverse(123));
console.log(reverse('asd'));

// задача №3
const compact = (array) => {
  const falsy = [0, false, undefined, '', null];
  if (typeof (array) === 'object' && typeof (array.filter) === 'function') {
    return array.filter((el) => !(falsy.includes(el) || Number.isNaN(el)));
  }
  return [];
};

data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)); // [1, 2, 3]

console.log(compact());
console.log(compact([]));
console.log(compact(123));
