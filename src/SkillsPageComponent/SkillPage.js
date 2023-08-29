import '../SkillsPageComponent/Skill.scss'
import React from 'react'
import Smart from '../Assets/F2035401-0E3E-476B-B397-D04F269F9B5F.png'
import { Navigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

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
        }} className='skillNavBtn'>Home</button>
        <button onClick={() => {
          setToAbout(true);
        }} className='skillNavBtn'>About</button>
        <button onClick={() => {
          setToProjects(true);
        }} className='skillNavBtn'>Project</button>
        <button className='skillBtn'>Skills</button>
      </div>
      <div className='skillRow'>
        <div className='skillCol1'>
          <p className='langDiv'>Languages</p>
          <div className='skillFlex'>
            <div>
              <span class="icon icon-1">
                <Icon icon="icon-park-outline:html-five" width="60" />
              </span>
              <p className='skillTxt'>HTML</p>
            </div>
            <div>
              <span class="icon icon-2">
                <Icon icon="ph:file-css-duotone" width="60" />
              </span>
              <p className='skillTxt'>CSS</p>
            </div>
            <div>
              <span class="icon icon-3">
                <Icon icon="fluent:document-javascript-20-regular" width="60" />
              </span>
              <p className='skillTxt'>JAVASCRIPT</p>
            </div>
            <div>
              <span class="icon icon-4">
                <Icon icon="nonicons:c-sharp-16" width="60" />
              </span>
              <p className='skillTxt'>C #</p>
            </div>
            <div>
              <span class="icon icon-5">
                <Icon className='icon' icon="nonicons:typescript-16" width="60" />
              </span>
              <p className='skillTxt'>TYPESCRIPT</p>
            </div>
          </div>
        </div>
        <div className='skillCol2'>
          <p className='langDiv'>Frameworks</p>
          <div className='skillFlex'>
            <div>
              <span class="icon icon-5">
                <Icon icon="bxl:react" width="60" />
              </span>
              <p className='skillTxt'>REACT</p>
            </div>
            <div>
              <span class="icon icon-3">
                <Icon icon="tabler:brand-bootstrap" width="60" />
              </span>
              <p className='skillTxt'>BOOTSTRAP</p>
            </div>
            <div>
              <span class="icon icon-2">
                <Icon icon="simple-icons:dotnet" width="60" />
              </span>
              <p className='skillTxt'>DOTNET</p>
            </div>
            <div>
              <span class="icon icon-1">
                <Icon icon="ph:angular-logo" width="60" />
              </span>
              <p className='skillTxt'>ANGULAR </p>
            </div>
          </div>
          <div className='smartIconDiv'>
            <img className='smartIcon' src={Smart} />
          </div>
        </div>
      </div>
    </div>
  )
}
