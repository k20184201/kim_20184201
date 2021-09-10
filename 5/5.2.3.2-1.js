handleButtonClick = () => {
  this.setState({
    clicked: true,
    validated: this.state.password === "0000",
  });
  this.input.focus();
};
