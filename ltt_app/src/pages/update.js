import { useState } from 'react';
import { FileUploader } from '../components/FileUploader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from '../components/Preview';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Upyo() {
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <FileUploader onSuccess={onSuccess}/>
      <Preview files={files}/>
      <ToastContainer/>
    </div>
  );
}

export default Upyo;