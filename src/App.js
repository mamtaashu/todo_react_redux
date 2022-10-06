import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom"
import Sign from './Component/Sign ';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Todo from './Component/Todo';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/login" element={<Login/>}/>
        
       </Routes>
    </div>
  );
}

export default App;
