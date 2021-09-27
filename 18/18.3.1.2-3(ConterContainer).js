import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/18.3.1.2-2(counter)";
import Counter from "../components/18.1-4(Counter)";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
