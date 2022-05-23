import {Routes, Route} from 'react-router-dom'
import { Fragment } from "react";
import './app.css';
import UploadPage from "./pages/uploadPage";
import MainPage from "./pages/mainPage";
import AboutPage from './pages/aboutPage';

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/upload' element={<UploadPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
    </Fragment>
  );
}

export default App;
