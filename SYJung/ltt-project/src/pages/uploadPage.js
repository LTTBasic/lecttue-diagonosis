import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Uploader from '../components/uploader';

class UploadPage extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <section id="upload">
                    <input type="file" accept="image/*"/>
                    <Uploader/>
                </section>  
            </>
        );
    }
}

export default UploadPage;

