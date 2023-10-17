import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
         
    </div>
  );
}

export default App;
