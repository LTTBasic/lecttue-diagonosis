import React, { Component } from 'react';
import Navbar from '../components/navbar';
// import axios from 'axios'

// yarn add axios
// yarn add firebase
// yarn add global firebase-tools  
// yarn firebase login
// yarn firebase init >> [문제점 발생] 호스팅이 계속 실패함. 
// firebase functions 기능이 이제는 유료화가 된거 같다. 
class UploadPage extends Component {
    
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // fileUploadHandler = () => {
    //     axios.post('');
    // }

    render() {
        return (
            <>  
                <Navbar></Navbar>
                <section id="upload">
                    <input type="file" onChange={this.fileSelectedHandler}/>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                    {/* <div>
                        <form onSubmit={post}>
                            <>
                                <input type="text" className="form-control" id="title" placeholder="What's on your product" maxLength={120} onChange={(e)=>set제품명(e.target.value)}/>
                                <input type="text" className="form-control" id="price" placeholder="Price" maxLength={120} onChange={(e)=>set가격(e.target.value)}/>
                            </>

                            <>
                                <input type="file" accept="image/*" className="form-control filearea" onChange={onFileChange}/>
                                {
                                    file && <img src={preview} width="지정값" height="지정값"/>
                                }
                            </>
                                <button type="submit" className="btn btn-danger action" value="tweet" onClick={reset}>완료</button>
                        </form> 
                    </div> */}
                </section>      
            </>
        );
    }
}

export default UploadPage;

