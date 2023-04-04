// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emplisting from "./Emplisting";
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>React JS course</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EmpDetails />}
          ></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
