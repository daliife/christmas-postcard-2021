import "./App.css";
import Postcard from "./components/Postcard/Postcard";
import Poem from "./components/Poem/Poem";
import Song from "./components/Song/Song";

function App() {
  return (
    <div id="chistmas-postcard-wrapper" className="grid grid-cols-12 max-w-screen-2xl">
      <div className="col-span-12 lg:col-span-7 flex items-center">
        <Postcard />
      </div>
      <div className="col-span-12 lg:col-span-5 flex items-center justify-center mb-24 lg:mb-0">
        <Poem />
      </div>
      <Song></Song>
    </div>
  );
}

export default App;
