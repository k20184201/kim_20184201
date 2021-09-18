const [number, setNumber] = useState(0);

const onIncrease = useCallback(
  () => setNumber((prevNumber) => prevNumber + 1),
  []
);
