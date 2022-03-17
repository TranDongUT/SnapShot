import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListImage from "./components/ListImage";
import Search from "./components/Search";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <div className="snapShot">
        <Search></Search>
        <Category />
        <Routes>
          <Route path="/" element={<ListImage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
