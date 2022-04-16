import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const MainSectionContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%), rgba(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
    }
    z-index: 2;
`;

export const MainBg= styled.div`
    postion: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1235px;
    position: absolute;
    padding: 200px 24px 8px 24px;
    flex-direciton: column;
    align-items: center;
    justify-content: center;
    
`;
export const MainH1 = styled.h1`
    color: #fff;
    font-align: center;
    font-size: 60px;
    @meida screen and (max-width:1235px) {
        font-size: 48px;
    }

    @meida screen and (max-width:768px) {
        font-size: 40px;
    }
`;
export const MainP = styled.p`
    margin-top: 24px;
    
    color: #fff;
    font-size: 40px;
    text-align: center;
    max-width: 100%;
    @meida screen and (max-width:1235px) {
        font-size: 24px;
    }

    @meida screen and (max-width:768px) {
        font-size: 24px;
    }
`;

export const MainBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-lef: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-lef: 8px;
    font-size: 20px;
`;