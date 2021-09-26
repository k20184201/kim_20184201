import ColorBox from "../contexts/ColorBox";
import ColorContext from "../contexts/color";

const App = () => {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};
export default App;
