
import './App.css';

function App() {
  const name='리액트';
  return (
    <>
    {/*주석은 이렇게 작성합니다. */}
    <div className="react"> 
     {name}
    </div>
      {// 하지만 이런 주석이나
     /*이런 주석은 페이지에 그래도 나타나게 됩니다. */}
    <input/>
    </>
  );
}

export default App;
