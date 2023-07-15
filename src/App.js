import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
