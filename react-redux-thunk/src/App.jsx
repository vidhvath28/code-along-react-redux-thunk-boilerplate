import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;