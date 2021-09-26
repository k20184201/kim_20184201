const listener = () => {
  console.log("상태가 업데이트 됨");
};
const unsubscribe = store.subscribe(listener);
unsubscribe();
