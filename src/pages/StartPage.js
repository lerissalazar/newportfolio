import '../css/HomePage.css'
import React from 'react'
import Headshot from '../Assets/headshot 2.png'
import { Navigate } from 'react-router-dom';

export default function StartPage() {
    const [goToAbout, setToAbout] = React.useState(false);
    const [goToProjects, setToProjects] = React.useState(false);

    if (goToAbout) {
        return <Navigate to='/aboutPage' />
    }

    if (goToProjects) {
        return <Navigate to='/projectPage' />
    }

    return (
        <div class='container fluid' className='homeContainer'>
            <div class='row' className='divRow' >
                <div>
                    <p className='welcomeTxt'>Welcome to my Portfolio</p>
                    <div className='sideNavLink'>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToAbout(true);
                            }} className='sideLink'>About</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToProjects(true);
                            }} className='sideLink'>Projects</button>
                        </div>
                        <div className='sideNavDiv'>
                            <button onClick={() => {
                                setToAbout(true);
                            }} className='sideLink'>Skills</button>
                        </div>
                    </div>
                </div>
                <img className='headshot' src={Headshot} />
            </div >
        </div>
    )
}