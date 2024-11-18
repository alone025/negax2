import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import LIkelayout from './Layouts/LIkelayout';
import Likes from './pages/Likes';

function App() {
  return (
    <div>
      <Link to="/login" className='absolute z-30 text-white py-2 px-3 bg-blue-600 top-36 left-8 font-bold'>Login</Link>
      <Link to="/register" className='absolute z-30 text-white py-2 px-3 bg-blue-600 top-36 left-32 font-bold'>Register</Link>
      <Link to="/" className='absolute z-30 text-white py-2 px-3 bg-blue-600 top-56 left-32 font-bold'>Like</Link>
      <Routes>
        <Route path="/" element={<LIkelayout><Likes/></LIkelayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
