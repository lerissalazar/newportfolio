import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutPage from './AboutPageComponent/AboutPage';
import StartPage from './StarterPageComponent/StartPage';
import ProjectPage from './ProjectsPageComponent/ProjectPage';
import SkillPage from './SkillsPageComponent/SkillPage';
import SJCOE from './SJCOEPageComponent/SJCOE';
import Remember from './RememberPageComponent/Remember';
import Cake from './CakePageComponent/Cake';
import Code from './CodePageComponent/Code';
import PortfolioPage from './PortfolioPageComponent/PortfolioPage';


function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<StartPage />} />
            <Route path='/aboutPage' element={<AboutPage />} />
            <Route path='/projectPage' element={<ProjectPage />} />
            <Route path='/skillPage' element={<SkillPage />} />
            <Route path='/SJCOEPage' element={<SJCOE />} />
            <Route path='/RememberPage' element={<Remember />} />
            <Route path='/CakePage' element={<Cake />} />
            <Route path='/CodePage' element={<Code />} />
            <Route path='/PortPage' element={<PortfolioPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
