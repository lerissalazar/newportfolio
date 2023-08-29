import '../PortfolioPageComponent/Portfolio.scss'
import React from 'react'
import Portfolio from '../Assets/port.png'
import { Icon } from '@iconify/react';
import { Navigate } from 'react-router-dom';

export default function PortfolioPage() {
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
        }} className='portNavBtn'>Home</button>
        <button onClick={() => {
          setToAbout(true);
        }} className='portNavBtn'>About</button>
        <button onClick={() => {
          setToProjects(true);
        }} className='portNav'>Project</button>
        <button onClick={() => {
          setToSkill(true);
        }} className='portNavBtn'>Skills</button>
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
          <img src={Portfolio} />
        </div>
        <div>
          <p className='projectTitle'>Portfolio</p>
          <p className='projectInfo'>UI/UX PROJECT & CURRENT WEBSITE</p>
          <p className='SJCOEInfo'>My portfolio was both designed and developed by me. I utilized React for its development and employed Figma for its design. While working on the design within Figma, there were a number of initial attempts that didn't succeed as planned. However, those endeavors were integral in refining and ultimately arriving at the version of my portfolio that you see today.</p>
          <a href='https://www.figma.com/file/nFRAkmbIxJ393YzfGgknUh/portfolio?type=design&node-id=368-33&mode=design&t=hYmyGdVbGLx3lHgS-0' className='figmaBtnTxt'>Figma</a>
        </div>
      </div>
    </div>
  )
}
