import './App.css';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from './Components/Welcome';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<LandingPage/>}></Route>
           <Route path='/welcome' element={<Welcome/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/signup' element={<SignUp/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
