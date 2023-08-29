import '../AboutPageComponent/About.scss'
import React from 'react'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';
import Headshot2 from '../Assets/AC3549C2-4C94-4AE3-BFC0-23BA21D134E1.png'

export default function AboutPage() {
    const [goToHome, setToHome] = React.useState(false);
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);

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

    return (
        <div>
            <div class='row' className='navRow'>
                <button onClick={() => {
                    setToHome(true);
                }} className='aboutNavBtn'>Home</button>
                <button className='aboutNav'>About</button>
                <button onClick={() => {
                    setToProjects(true);
                }} className='aboutNavBtn'>Project</button>
                <button onClick={() => {
                    setToSkill(true);
                }} className='aboutNavBtn'>Skills</button>
            </div>
            <div class='container fluid' className='aboutContainer'>
                <div class='row' className='aboutRow'>
                    <div>
                        <p className='helloTxt'>Hello, my name is Lerissa Lazar</p>
                        <p className='helloInfo'>I specialize in Frontend Web Development UI/UX Design.<br />
                            I am constantly seeking new opportunities to expand my expertise in development & design. <br />
                            Beyond my technical skills, I also run two small businesses. I make custom cakes that bring joy to celebrations & I create unique and stylish custom shoes that make a statement. These businesses not only allow me to showcase my creativity but also enable me to connect with people on a personal level.</p>
                        <p className='contactTxt'>Contact</p>
                        <span className='contactLine'>
                            <div className='mobileIcon'>
                                <Icon className='emailIcon' icon="mdi-light:email" width="35" height="35" />
                                <a href='mailto:lerissalazarjob@gmail.com' className='contactItem'>lerissalazarjob@gmail.com</a>
                            </div>
                            <div className='mobileIcon'>
                                <Icon className='linkedIcon' icon="ph:linkedin-logo-thin" width="35" height="35" />
                                <a href='https://www.linkedin.com/in/lerissalazar12/' className='linkedItem'>LinkedIn</a>
                            </div>
                            <div className='mobileIcon'>
                                <Icon className='gitIcon' icon="ph:github-logo-thin" width="35" height="35" />
                                <a href='https://github.com/lerissalazar' className='gitItem'>Github</a>
                            </div>
                        </span>
                    </div>
                    <div>
                        <img className='aboutEmoji' src={Headshot2} />
                    </div>
                </div>
            </div>
        </div>

    )
}