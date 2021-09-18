const array = [1, 2, 3, 4, 5];
const nextArrayBad = array;
nextArrayBad[0] = 100;
console.log(array === nextArrayBad);

const nextArrayGood = [...array];
nextArrayGood[0] = 100;

console.log(array === nextArrayGood);

const object = {
  foo: "bar",
  value: 1,
};

const nextObjectBad = object;
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad);

const nextObjectGood = {
  ...object,
  value: object.value + 1,
};

console.log(object === nextObjectGood);
