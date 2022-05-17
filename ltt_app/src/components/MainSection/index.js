import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../BottonElements'
import { MainSectionContainer, MainBg, VideoBg, 
    MainContent, MainH1, MainP,
MainBtnWrapper,ArrowForward,ArrowRight } from './MainSectionElements'
const MainSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <MainSectionContainer id="Home">
        <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </MainBg>
        <MainContent>
            <MainH1>Ai Disease Diagnosis</MainH1>
            <MainP>
            Let's check the disease state of crops.
            </MainP>
            <MainBtnWrapper>
                <Button to="/signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary="true"
                dark="true">
                    Sign Up {hover ? <ArrowForward /> :<ArrowRight />}
                </Button>
            </MainBtnWrapper>
        </MainContent>
    </MainSectionContainer>
  )
}

export default MainSection