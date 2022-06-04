// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
//import ServicePage from './pages/service';
import SigninPage from './pages/signin';
import SignUpage from './pages/signup';
import About from './pages/about';
import ImageUploader from './pages/update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  exact/>
        <Route path="/signin" element={<SigninPage />}  exact/>
        <Route path="/signup" element={<SignUpage />}  exact/>
        <Route path="/services" element={<ImageUploader />}  exact/>
        <Route path="/about" element={<About />}  exact/>
        <Route path='/api1' component={() => {window.location.href = 'http://127.0.0.1:8000/docs#/default/detect_food_return_base64_img__post';
      return null;}}/>
      </Routes>
    </Router> 
  );
}

export default App;
