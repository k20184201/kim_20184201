const nextComplexObject = {
  ...complexObject,
  objectInside: {
    ...complexObject.objectInside,
    enabled: false,
  },
};

console.log(complexObject === nextComplexObject);
console.log(complexObject.objectInside === nextComplexObject.objectInside);
