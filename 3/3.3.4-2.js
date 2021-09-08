const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name} 입니다.
      <br />
      Childeren 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;