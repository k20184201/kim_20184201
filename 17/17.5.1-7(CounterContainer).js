import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/17.3.1.3-1(counter)';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} OnDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),

  {
    increase,
    decrease,
  },
)(CounterContainer);
