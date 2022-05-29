import axios from "axios";
import { useEffect } from "react";
import './app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/about';
import ServicePage from './pages/service';
import SigninPage from './pages/signin';
import SignUpage from './pages/signup';

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}  exact/>
          <Route path="/signin" element={<SigninPage />}  exact/>
          <Route path="/signup" element={<SignUpage />}  exact/>
          <Route path="/services" element={<ServicePage />}  exact/>
          <Route path="/about" element={<AboutPage />} exact/>
        </Routes>
    </Router>
  );
}

export default App;
