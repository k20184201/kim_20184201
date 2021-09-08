<button
  onClick={() => {
    this.setState(
      {
        number: number + 1,
      },
      () => {
        console.log("방금 setState가 호출되었습니다.");
        console.log(this.state);
      }
    );
  }}
>
  +1
</button>;
