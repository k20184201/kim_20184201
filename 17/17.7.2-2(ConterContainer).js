import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/17.6.1.1-2(counter)';
import React, { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} OnDecrease={onDecrease} />
  );
};

export default CounterContainer;
