import '../CodePageComponent/Code.scss'
import React from 'react'
import CodePic from '../Assets/CodeLaptop.png'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function Code() {
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
            <div class='row' className='navRow'>
                <button onClick={() => {
                    setToHome(true);
                }} className='codeNavBtn'>Home</button>
                <button onClick={() => {
                    setToAbout(true);
                }} className='codeNavBtn'>About</button>
                <button onClick={() => {
                    setToProjects(true);
                }} className='codeNav'>Project</button>
                <button onClick={() => {
                    setToSkill(true);
                }} className='codeNavBtn'>Skills</button>
            </div>
            <div className='backBtnDiv'>
                <Icon className='arrow' icon="ph:arrow-left-light" width="22" />
                <button onClick={() => {
                    setToBack(true);
                }}
                    className='backBtn'>Back To Projects</button>
            </div>
            <div class='row' className='SJCOERow'>
                <div className='CodeImg'>
                    <img src={CodePic} />
                </div>
                <div>
                    <p className='projectTitle'>Codewars Redo</p>
                    <p className='projectInfo'>UI/UX PROJECT</p>
                    <p className='SJCOEInfo'>The Codewars Redo project involved a sprint collaboration, where our team undertook the task of reimagining and reconstructing the 'Codewars' application according to our creative vision. Following the redesign, our proposed design was submitted for developer approval, with the intention of proceeding to develop the web application</p>
                    <a href='https://www.figma.com/file/f5AidIAMRgpGsHVIEuHDCY/codewars-portfolio?type=design&mode=design&t=ZlEHnMQWOZsCXlVa-0' className='figmaBtnTxt'>Figma</a>
                </div>
            </div>
        </div>
    )
}
