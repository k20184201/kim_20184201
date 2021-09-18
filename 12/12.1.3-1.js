import produce from "immer";
const nextState = produce(originalState, (draft) => {
  //바꾸고 싶은 값 바꾸기.
  draft.somewhere.deep.inside = 5;
});
