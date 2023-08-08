import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Login from './components/LoginF/Login';
import Register from './components/RegisterF/Register';
import { useContext } from 'react';
import { Context } from './components/Context/context';
import PleaseLogin from './components/PleaseLogin';
import Logout from './components/Logout';

function App() {

const {user}=useContext(Context)
console.log("mu user",user)

  return (
    <div className="App">
<Router>
<Navbar/>
<Routes>

{/* <Route  path="/" element={user?<Home/>:<Register/>}/> */}
<Route path="/" element={user?<Home/>:<PleaseLogin/>}/>
<Route path="/login" element={user?<Home/>:<Login/>}/>
<Route path="/register" element={user?<Home/>:<Register/>}/>
<Route path="/logout" element={<Logout/>}/>

</Routes>
</Router>
    </div>
  );
}

export default App;
