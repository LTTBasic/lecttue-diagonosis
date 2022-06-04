import React, {useState} from 'react'
import FileUpload from '../components/imgUpload/FileUpload'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const ServicePage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <h1> 서비스페이지</h1>
        <FileUpload />
      </>
    
  )
}

export default ServicePage