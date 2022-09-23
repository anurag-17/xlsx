
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import EvCalculation from "./pages/EVC/EvCalculation";
import RaiseDMR from "./pages/Raisedmr/RaiseDMR";
import "./App.css"
import UploadPo from "./pages/Home/UploadPo";


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<UploadPo/>} />
          <Route path="/evc" element={<EvCalculation/>} />
          <Route path="/dmr" element={<RaiseDMR/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
