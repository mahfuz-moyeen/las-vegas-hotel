import { Route, Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menubar from './components/Menubar/Menubar';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import User from './components/User/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
