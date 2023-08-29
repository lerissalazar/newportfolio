import '../ProjectsPageComponent/Project.scss'
import React from 'react'
import SJCOE from '../Assets/SJCOE Laptop.png'
import Remember from '../Assets/Remember Laptop.png'
import Cake from '../Assets/cake Laptop.png'
import Code from '../Assets/CodeLaptop.png'
import Portfolio from '../Assets/port.png'
import Emoji from '../Assets/67862293-8805-4AA2-88A4-732B982DCA03.png'
import { Navigate } from 'react-router-dom';

export default function ProjectPage() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);
    const [goToSJCOE, setToSJCOE] = React.useState(false);
    const [goToRemember, setToRemember] = React.useState(false);
    const [goToCake, setToCake] = React.useState(false);
    const [goToCode, setToCode] = React.useState(false);
    const [goToPort, setToPort] = React.useState(false);

    if (goToHome) {
        return <Navigate to='/' />
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

    if (goToSJCOE) {
        return <Navigate to='/SJCOEPage' />
    }

    if (goToRemember) {
        return <Navigate to='/RememberPage' />
    }

    if (goToCake) {
        return <Navigate to='/CakePage' />
    }

    if (goToCode) {
        return <Navigate to='/CodePage' />
    }

    if (goToPort) {
        return <Navigate to='/PortPage' />
    }

    return (
        <div>
            <div class='row' className='navRow'>
                <button onClick={() => {
                    setToHome(true);
                }} className='projectsNavBtn'>Home</button>
                <button onClick={() => {
                    setToAbout(true);
                }} className='projectsNavBtn'>About</button>
                <button className='projectNav'>Project</button>
                <button onClick={() => {
                    setToSkill(true);
                }} className='projectsNavBtn'>Skills</button>
            </div>
            <div className='emojiDiv'>
                <img className='emoji' src={Emoji} />
            </div>
            <div class='container fluid' className='projectContainer'>
                <div class='row' className='SCJOEprojectRow'>
                    <div>
                        <img className='mobileImg' src={SJCOE} />
                    </div>
                    <div className='projectDiv'>
                        <p className='projectTitle'>SJCOE Admin</p>
                        <p className='projectInfo'>UI/UX PROJECT & WEBSITE</p>
                        <button onClick={() => {
                            setToSJCOE(true);
                        }} className='learnBtn'>Learn more</button>
                    </div>
                </div>
                <div class='row' className='projectRow'>
                    <div>
                        <img className='mobileImg' src={Remember} />
                    </div>
                    <div className='projectDiv'>
                        <p className='projectTitle'>Remember When</p>
                        <p className='projectInfo'>UI/UX PROJECT &  WEB APP</p>
                        <button onClick={() => {
                            setToRemember(true);
                        }} className='learnBtn'>Learn more</button>
                    </div>
                </div>
                <div class='row' className='projectRow'>
                    <div>
                        <img className='mobileImg' src={Cake} />
                    </div>
                    <div className='projectDiv'>
                        <p className='projectTitle'>Cake Business</p>
                        <p className='projectInfo'>UI/UX PROJECT & WEBSITE</p>
                        <button onClick={() => {
                            setToCake(true);
                        }} className='learnBtn'>Learn more</button>
                    </div>
                </div>
                <div class='row' className='codeProjectRow'>
                    <div>
                        <img className='mobileImg' src={Code} />
                    </div>
                    <div className='projectDiv'>
                        <p className='projectTitle'>Codewars</p>
                        <p className='projectInfo'>UI/UX PROJECT</p>
                        <button onClick={() => {
                            setToCode(true);
                        }} className='learnBtn'>Learn more</button>

                    </div>
                </div>
                <div class='row' className='codeProjectRow'>
                    <div>
                        <img className='mobileImg' src={Portfolio} />
                    </div>
                    <div className='projectDiv'>
                        <p className='projectTitle'>Portfolio</p>
                        <p className='projectInfo'>UI/UX PROJECT & WEBSITE</p>
                        <button onClick={() => {
                            setToPort(true);
                        }} className='learnBtn'>Learn more</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
