import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import History from "./Components/History";
import HistoryDetails from "./Components/HistoryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/historyDetails" element={<HistoryDetails />} />
    </Routes>
  );
}

export default App;
