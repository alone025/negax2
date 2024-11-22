import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import LIkelayout from './Layouts/LIkelayout';
import Likes from './pages/Likes';
import LikesH from './pages/LikesH';
import Shopping from './pages/Shopping';
import RegisterState from './pages/RegisterState';
import RegisterVerification from './pages/RegisterVerification';
import SurveyForm from './pages/SurveyForm';
import PersonalForm from './pages/PersonalForm';
import ReligiyaForm from './pages/ReligiyaForm';
import KontakForm from './pages/KontakForm';
import FotoPage from './pages/FotoPage';
import Home from './pages/Home';
import Question from './pages/Question';
import Personals from './pages/Personals';
import Profiless from './pages/Profiless';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/question' element={<Question/>}></Route>
        <Route path='/personals' element={<Personals/>}></Route>
        <Route path='/profiless' element={<Profiless/>}></Route>
        <Route path='/shopping' element={<Shopping/>}></Route>
        <Route path="/likes" element={<LIkelayout><Likes/></LIkelayout>} />
        <Route path='/likesh' element={<LikesH/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/registerstate' element={<RegisterState/>}></Route>
        <Route path='/registerverification' element={<RegisterVerification/>}></Route>
        <Route path='/surveyform' element={<SurveyForm/>}></Route>
        <Route path='/personalform' element={<PersonalForm/>}></Route>
        <Route path='/religiyaform' element={<ReligiyaForm/>}></Route>
        <Route path='/kontakform' element={<KontakForm/>}></Route>
        <Route path='/fotopage' element={<FotoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
