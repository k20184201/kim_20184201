useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("Cleanup");
    console.log("name");
  };
}, [name]);
