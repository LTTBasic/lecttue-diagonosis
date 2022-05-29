import React, {useState} from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import MainSection from '../components/MainSection' 
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <MainSection />
            <InfoSection {...homeObjOne}/>
            <Footer />
        </>
    )
}

export default Home