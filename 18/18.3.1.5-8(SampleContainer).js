useEffect(() => {
    
  const fn = async () => {
    try {
      await getPost(1);
      await getUsers(1);
    } catch (e) {
      console.log(e);
    }
  };
  fn();
}, [getUsers, getPost]);
