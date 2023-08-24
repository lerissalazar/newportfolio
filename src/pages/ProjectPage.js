import '../css/ProjectPage.css'
import React from 'react'
import SJCOE from '../Assets/SJCOE Laptop.png'
import Remember from '../Assets/Remember Laptop.png'
import Cake from '../Assets/cake Laptop.png'
import Code from '../Assets/CodeLaptop.png'
import { Navigate } from 'react-router-dom';

export default function ProjectPage() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);
    const [goToSJCOE, setToSJCOE] = React.useState(false);

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

    if (goToSJCOE) {
        return <Navigate to='/SJCOEPage' />
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
            <div class='container fluid' className='projectContainer'>
                <div class='row' className='projectRow'>
                    <div>
                        <img src={SJCOE} />
                    </div>
                    <div className='projectDiv'>
                        <span className='line'>
                            <p className='projectTitle'>SJCOE Admin</p>
                            <p className='projectInfo'>UI/UX PROJECT & WEBSITE</p>
                            <button onClick={() => {
                                setToSJCOE(true);
                            }} className='learnBtn'>Learn more</button>
                        </span>
                    </div>
                </div>
            </div>
            <div class='row' className='projectRow'>
                <div>
                    <img src={Remember} />
                </div>
                <div className='projectDiv'>
                    <span className='line'>
                        <p className='projectTitle'>Remember When</p>
                        <p className='projectInfo'>UI/UX PROJECT &  WEB APP</p>
                        <button className='learnBtn'>Learn more</button>
                    </span>
                </div>
            </div>
            <div class='row' className='projectRow'>
                <div>
                    <img src={Cake} />
                </div>
                <div className='projectDiv'>
                    <span className='line'>
                        <p className='projectTitle'>Cake Business</p>
                        <p className='projectInfo'>UI/UX PROJECT & WEBSITE</p>
                        <button className='learnBtn'>Learn more</button>
                    </span>
                </div>
            </div>
            <div class='row' className='projectRow'>
                <div>
                    <img src={Code} />
                </div>
                <div className='projectDiv'>
                    <span className='line'>
                        <p className='projectTitle'>Codewars</p>
                        <p className='projectInfo'>UI/UX PROJECT</p>
                        <button className='learnBtn'>Learn more</button>
                    </span>
                </div>
            </div>
        </div>
    )
}