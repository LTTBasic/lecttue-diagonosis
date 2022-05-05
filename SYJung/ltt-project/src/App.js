import {Routes, Route} from 'react-router-dom'
import { Fragment } from "react";
import './app.css';
import UploadPage from "./pages/uploadPage";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/upload' element={<UploadPage />}/>
        </Routes>
    </Fragment>
  );
}

export default App;
