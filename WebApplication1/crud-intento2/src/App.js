import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Row from './Components/TableDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route index element={<Create />}></Route>
      <Route exact path="/read" element={<Read />}></Route>
      <Route exact path="/update" element={<Update />}></Route>
      <Route exact path="/table" element={<Row />}></Route>
        
      </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
