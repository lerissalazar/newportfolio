import '../css/AboutPage.css'
import React from 'react'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function AboutPage() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);

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

    return (
        <div>
            <div class='row' className='navRow'>
                <button onClick={() => {
                    setToHome(true);
                }} className='navBtn'>Home</button>
                <button onClick={() => {
                    setToAbout(true);
                }} className='abtBtn'>About</button>
                <button onClick={() => {
                    setToProjects(true);
                }} className='navBtn'>Project</button>
                <button onClick={() => {
                    setToSkill(true);
                }} className='navBtn'>Skills</button>
            </div>
            <div class='container fluid' className='aboutContainer'>
                <div class='row' className='aboutRow'>
                    <div>
                        <p className='helloTxt'>Hello, my name is Lerissa Lazar</p>
                        <span className='line'>
                            <p className='helloInfo'>I specialize in Front End Web Development & UI/UX Design.
                                With 1 year of valuable experience, I am constantly seeking new opportunities to expand my expertise in development & design.
                                Beyond my technical skills, I also run two small businesses. I make custom cakes that bring joy to celebrations & I create unique and stylish custom shoes that make a statement. These businesses not only allow me to showcase my creativity but also enable me to connect with people on a personal level.</p>
                        </span>
                    </div>
                    <div>
                        <p className='contactTxt'>Contact</p>
                        <span className='line'>
                            <p className='contactItem'><Icon className='emailIcon' icon="mdi-light:email" width="35" height="35" />lerissalazarjob@gmail.com</p>
                            <a href='https://www.linkedin.com/in/lerissalazar12/' className='linkedItem'><Icon className='linkedIcon' icon="ph:linkedin-logo-thin" width="35" height="35" />LinkedIn</a>
                            <div className='git'>
                                <a href='https://github.com/lerissalazar' className='gitItem'><Icon className='gitIcon' icon="ph:github-logo-thin" width="35" height="35" />Github</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}