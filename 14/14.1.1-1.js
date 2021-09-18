function increase(number, callback) {
  setTimeout(() => {
    if (callback) {
      callback(result);
    }
  }, 1000);
}
increase(0, (result) => {
  console.log(result);
});
