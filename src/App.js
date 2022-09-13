import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
