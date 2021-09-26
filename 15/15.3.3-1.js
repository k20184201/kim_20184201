import ColorBox from "../contexts/ColorBox";
import { ColorProvider } from "../contexts/color";
import SelectColors from "../contexts/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
