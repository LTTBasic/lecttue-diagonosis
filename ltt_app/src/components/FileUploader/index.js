import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';

import './style.css';

export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8080/upload', data)// 성공 실패시 팝업창  ////localhost:8080/upload
            .then((response) => {
                toast.success('업로드 성공');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('업로드 실패')
            })
    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <button>업로드</button>
        </form>
    )
};