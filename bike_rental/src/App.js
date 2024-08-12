import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/login/login';
import Registration from './components/registration/registration';
import Dashboard from './components/dashboard/dashboard';
import Admin from './components/admndashboard/admin';
import { useState } from 'react';

function App() {
  const [reloadHeader, setReloadHeader] = useState(false);

const triggerHeaderReload = () => {
  setReloadHeader(!reloadHeader); // Toggle the state to force a re-render
};
  return (
    <div className="App">
    <Router>
      <header>
        <Header key={reloadHeader}/>
      </header>
      <section>
        <Routes>
          <Route path="/" triggerHeaderReload={triggerHeaderReload}  element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/admin-dashboard' element={<Admin/>}/>
        </Routes>
      </section>
      <footer className='mt-5'>
        <Footer />
      </footer>
    </Router>
  </div>
  );
}

export default App;
