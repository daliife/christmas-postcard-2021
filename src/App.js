import "./App.css";
import Postcard from "./components/Postcard/Postcard";
import Poem from "./components/Poem/Poem";
import Song from "./components/Song/Song";

function App() {
  return (
    <div id="chistmas-postcard-wrapper" className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-7 flex items-center">
        <Postcard />
      </div>
      <div className="col-span-12 lg:col-span-5 flex items-center">
        <Poem />
      </div>
      <Song></Song>
    </div>
  );
}

export default App;
