import '../css/Cake.css'
import React from 'react'
import CakePic from '../Assets/cake Laptop.png'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function Cake() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);
    const [goToBack, setToBack] = React.useState(false);
    const [goToPortfolio, setToPortfolio] = React.useState(false);

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

    if (goToPortfolio) {
        return <Navigate to='/PortfolioPage' />
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
                <button onClick={() => {
                    setToPortfolio(true);
                }} className='navBtn'>Portfolios</button>
            </div>
            <div className='backBtnDiv'>
                <Icon className='arrow' icon="ph:arrow-left-light" width="22" />
                <button onClick={() => {
                    setToBack(true);
                }}
                    className='backBtn'>Back To Projects</button>
            </div>
            <div class='row' className='cakeRow'>
                <div className='CakeImg'>
                    <img src={CakePic} />
                </div>
                <div>
                    <span className='line'>
                        <p className='projectTitle'>Simply Caked</p>
                        <p className='projectInfo'>UI/UX PROJECT &  WEB APP <span className='comingSoon'>&lt; coming soon /&gt;</span> </p>
                        <p className='SJCOEInfo'>"Simply Caked" is a passion project of mine, driven by my desire to create a dedicated website for my custom cake business. This upcoming platform will feature a gallery showcasing my different types of cake orders, pricing details, contact information, and a detailed guide on the process of ordering personalized cakes. I took charge of designing the website's layout, and I'm currently in the process of actively developing it to bring my vision to life in the near future.</p>
                        <a href='https://www.figma.com/file/x5mRWztR09Png5aF4KhEyu/cake-buisness-portfolio?type=design&node-id=0-1&mode=design&t=ZlEHnMQWOZsCXlVa-0' className='figmaBtnTxt'>Figma</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
