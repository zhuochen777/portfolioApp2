import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navBar/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
