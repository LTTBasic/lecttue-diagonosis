// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import ServicePage from './pages/service';
import SigninPage from './pages/signin';
import SignUpage from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  exact/>
        <Route path="/signin" element={<SigninPage />}  exact/>
        <Route path="/signup" element={<SignUpage />}  exact/>
        <Route path="/services" element={<ServicePage />}  exact/>
      </Routes>
    </Router> 
  );
}

export default App;
