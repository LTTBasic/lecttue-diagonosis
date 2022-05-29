import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './app.css';
// import AboutPage from './pages/aboutPage';
import Home from './pages';
import AboutPage from './pages/about';
import ServicePage from './pages/service';
import SigninPage from './pages/signin';
import SignUpage from './pages/signup';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path='/about' element={<AboutPage />}/> */}
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
