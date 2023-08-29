import '../StarterPageComponent/Start.scss'
import React from 'react'
import Headshot from '../Assets/5FB7A5C3-C5BA-4DCB-85E0-44A82AAA3A66.png'
import { Navigate } from 'react-router-dom';

export default function StartPage() {
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);
    const [goToSkill, setToSkill] = React.useState(false);

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
        <div class='container fluid' className='homeContainer'>
            <div class='row' className='starterDivRow' >
                <div>
                    <p className='welcomeTxt'>
                        <span class="title-word title-word-1">Welcome </span>
                        <span class="title-word title-word-2">to </span>
                        <span class="title-word title-word-3">my </span>
                        <span class="title-word title-word-4">Portfolio</span>
                    </p>
                    <div className='sideNavLink'>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToAbout(true);
                            }} className='aboutSideLink'>About</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToProjects(true);
                            }} className='projectSideLink'>Projects</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToSkill(true);
                            }} className='skillSideLink'>Skills</button>
                        </div>
                    </div>
                </div>
                <div className='starterEmojiDiv'>
                    <img className='starterEmoji' src={Headshot} />
                </div>

            </div >
        </div>
    )
}