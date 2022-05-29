import React, { Component } from 'react';
// import Navbar from '../components/Navbar';

class UploadPage extends Component {
    render() {
        return (
            <>
                {/* <Navbar></Navbar> */}
                <section id="upload">
                {/* <input type="file" /> */}
                    <div className="upload">
                        <div className="upload-files">
                            <header>
                                <p>
                                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                    <span className="up">up</span>
                                    <span className="load">load</span>
                                </p>
                            </header>
                            <div className="body" id="drop">
                                <i className="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
                                <p className="pointer-none"><b>Drag and drop</b> files here <br /></p>
                                {/* or <a href="" id="triggerFile">browse</a> to begin the upload</p> */}
                                <input type="file" multiple="multiple" />
                            </div>
                            <footer>
                                <div className="divider">
                                    {/* <span><AR>FILES</AR></span> */}
                                </div>
                            <div className="list-files">
                                {/* <!--   template   --> */}
                            </div>
                                <button className="importar">UPDATE FILES</button>
                            </footer>
                        </div>
                    </div>
                </section>  
            </>
        );
    }
}

export default UploadPage;