import '../css/SJCOE.css'
import React from 'react'
import SJCOEPic from '../Assets/SJCOE Laptop.png'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function SJCOE() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);
    const [goToBack, setToBack] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/homePage' />
    }

    if (goToAbout) {
        return <Navigate to='/aboutPage' />
    }

    if (goToProjects) {
        return <Navigate to='/projectPage' />
    }

    if (goToSkill) {
        return <Navigate to='/skillPage' />
    }

    if (goToBack) {
        return <Navigate to='/projectPage' />
    }

    return (
        <div>
            <div class='row' className='navRow'>
                <button onClick={() => {
                    setToHome(true);
                }} className='navBtn'>Home</button>
                <button onClick={() => {
                    setToAbout(true);
                }} className='navBtn'>About</button>
                <button onClick={() => {
                    setToProjects(true);
                }} className='projetBtn'>Project</button>
                <button onClick={() => {
                    setToSkill(true);
                }} className='navBtn'>Skills</button>
            </div>
            <button onClick={() => {
                setToBack(true);
            }}
             className='backBtn'><Icon className='arrow' icon="ph:arrow-left-light" width="22" />Back To Projects</button>
            <div class='row' className='SJCOERow'>
                <div className='SJCOEImg'>
                    <img src={SJCOEPic} />
                </div>
                <div>
                    <span className='line'>
                        <p className='projectTitle'>Remember When</p>
                        <p className='projectInfo'>UI/UX PROJECT &  WEB APP</p>
                        <p className='SJCOEInfo'>SJCOE Admin serves as a Content Management System (CMS) website tailored for administrative users, granting them the capability to seamlessly edit their site as required. I was assigned the responsibility of designing the foundational pages and layout for this website. Using Figma, I crafted the initial design, which was handed off to the system specialist, Ernestina Rodriguez, for the purpose of rectifying any issues</p>
                        <button className='figmaBtn'>
                            <a href='https://www.figma.com/file/IyEMWlNXsu9srmpMU50GXx/SJCOE-Admin?type=design&node-id=0-1&mode=design&t=XIacO1Wc56fcwiIo-0' className='figmaBtnTxt'>Figma</a>
                        </button>

                    </span>
                </div>
            </div>
        </div>
    )
}
