import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Landingpage/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/signup'  element={<Signup/>}/>
          <Route path='/account'  element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
