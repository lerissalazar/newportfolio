import '../css/Remember.css'
import React from 'react'
import RememberWhen from '../Assets/Remember Laptop.png'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function Remember() {

    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);
    const [goToBack, setToBack] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />
    }

    if (goToAbout) {
        return <Navigate to='/about' />
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
            </div >
            <button onClick={() => {
                setToBack(true);
            }}
                className='backBtn'><Icon className='arrow' icon="ph:arrow-left-light" width="22" />Back To Projects</button>
            <div class='row' className='RememberRow'>
                <div className='RememberImg'>
                    <img src={RememberWhen} />
                </div>
                <div>
                        <p className='projectTitle'>Remember When</p>
                        <p className='projectInfo'>UI/UX PROJECT &  WEB APP</p>
                        <p className='SJCOEInfo'>"Remember When" is an application designed to preserve your cherished memories within a personalized album. These memories include a variety of images, captions, dates and hashtags, with plans to expand its features further. The application's standout feature involves the spontaneous appearance of these cherished memories on your dashboard, serving as delightful reminders of momentous occasions. I had he task of the app's layout, design, and logo, and played a pivotal role in enhancing its functionality by ensuring responsiveness and resolving minor issues.</p>
                        <button className='figmaBtn'>
                            <a href='https://www.figma.com/file/IyEMWlNXsu9srmpMU50GXx/SJCOE-Admin?type=design&node-id=0-1&mode=design&t=XIacO1Wc56fcwiIo-0' className='figmaBtnTxt'>Figma</a>
                        </button>
                        <button className='webBtn'>
                            <a href='#' type='button' className='webBtnTxt' >Web App</a>
                        </button>
                </div>
            </div>
        </div>
    )
}
