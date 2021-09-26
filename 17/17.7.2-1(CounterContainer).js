import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/17.6.1.1-2(counter)';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      OnDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
