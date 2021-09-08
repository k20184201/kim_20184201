<button
  onClick={() => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });

    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  }}
>
  +1
</button>;
