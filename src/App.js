import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/Header';
import Home from './componenets/Header/Home/Home';
import Login from './componenets/Login/Login';
import Register from './componenets/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
