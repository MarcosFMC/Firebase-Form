import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, HomePage, InfoPage } from "./components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Firebase-Form/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
