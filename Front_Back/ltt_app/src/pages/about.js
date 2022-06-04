import React, {useState} from 'react'
import Footer from '../components/Footer'
import InfoAboutus from '../components/InfoAboutus'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const About = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <InfoAboutus {...homeObjOne}/>
        <Footer />
    </>
  )
}

export default About