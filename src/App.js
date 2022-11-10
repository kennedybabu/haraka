import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import React,{useState} from 'react';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  const [dark, setDark] = useState(false)

  function handleDarkMode() {
    setDark(!dark)
  }

  const darkMode =  {
    backgroundColor: '#1b2a4e',
    color: '#ffffff'
  }

  const lightMode = {
    backgroundColor: '#ffffff',
    color: '#1b2a4e'
  }

  return (
    <>
      <AuthContextProvider>
        <Navbar dark={dark} darkMode={darkMode} lightMode={lightMode} handleDarkMode={handleDarkMode}/>
        <Routes>
          <Route path='/' exact element={<Landingpage dark={dark} darkMode={darkMode} lightMode={lightMode}/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/signup'  element={<Signup/>}/>
          <Route path='/account'  element={<ProtectedRoute><Account dark={dark} darkMode={darkMode} lightMode={lightMode}/></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>      
    </>
  );
}

export default App;
