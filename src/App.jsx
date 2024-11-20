import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import LIkelayout from './Layouts/LIkelayout';
import Likes from './pages/Likes';
import LikesH from './pages/LikesH';
import Shopping from './pages/Shopping';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/shopping' element={<Shopping/>}></Route>
        <Route path="/" element={<LIkelayout><Likes/></LIkelayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/likesh' element={<LikesH/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
