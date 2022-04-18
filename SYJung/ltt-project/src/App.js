import { Fragment } from "react";
import Navbar from "./components/navbar";
import './app.css';
import Main from "./components/main";

function App() {
  return (
    <Fragment>
        <Navbar></Navbar>
        <Main></Main>
    </Fragment>
  );
}

export default App;
