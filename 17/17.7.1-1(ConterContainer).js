import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/17.6.1.1-2(counter)';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  return <Counter number={number} />;
};

export default CounterContainer;
