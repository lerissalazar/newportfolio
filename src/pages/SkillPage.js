import '../css/SkillPage.css'
import React from 'react'
import { Navigate } from 'react-router-dom';

export default function SkillPage() {

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
        }} className='navBtn'>Home</button>
        <button onClick={() => {
          setToAbout(true);
        }} className='navBtn'>About</button>
        <button onClick={() => {
          setToProjects(true);
        }} className='navBtn'>Project</button>
        <button onClick={() => {
          setToSkill(true);
        }} className='skillBtn'>Skills</button>
      </div>




    </div>
  )
}
