import * as React from 'react';
import { Navigate, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import FabCatch from './components/Fab';
import Catch from './pages/Catch';
import Login from './pages/Login';

function App() {

  const currentRoute = window.location.pathname.substring(1);

  return (
  <React.Fragment>
    {currentRoute != 'login' && <Header></Header>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/catch" element={<Catch/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Navigate to="/home" />}/>
    </Routes>
    <FabCatch></FabCatch>
  </React.Fragment>
  );
}

export default App;
