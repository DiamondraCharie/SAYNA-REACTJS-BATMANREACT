import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import Layout from '../pages/Layout';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout/>}>
              <Route path='index' element={<Home/>}/>  
              <Route path='home' element={<Home/>}/>  
              <Route path='game' element={<Game/>}/>  
              <Route path='eshop' element={<Eshop/>}/>   
              <Route path='compte' element={<MonCompte/>}/> 
              <Route path='signup' element={<Signup/>}/>  
              <Route path='login' element={<Login/>}/> 
              <Route path='"' element={<NotFoundPage/>}/>   
           </Route>  
        </Routes>  
      </BrowserRouter>  
    </>
  )
}

export default App
