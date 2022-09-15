import "remixicon/fonts/remixicon.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SingleGame from "./components/SingleGame";
import AllGames from "./components/AllGames";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/game" element={<SingleGame />} />
        <Route path="/games" element={<AllGames />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
