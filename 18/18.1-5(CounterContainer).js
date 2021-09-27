import { connect } from "react-redux";
import { increase, decrease } from "../modules/18.1-1(counter)";
import Counter from "../components/18.1-4(Counter)";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
