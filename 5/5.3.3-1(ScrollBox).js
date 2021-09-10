import React, { Component } from "react";
class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    return (
      <div>
        <ScrollBox />
      </div>
    );
  }
}

export default ScrollBox;
