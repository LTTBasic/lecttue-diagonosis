import { Fragment } from "react";
import Navbar from "./components/navbar";
import './app.css';
import Main from "./components/main";
import Upload from "./components/upload";

function App() {
  return (
    <Fragment>
        <Navbar></Navbar>
        <Main></Main>
        <Upload></Upload>
    </Fragment>
  );
}

export default App;
