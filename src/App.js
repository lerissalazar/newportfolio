import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutPage from './pages/AboutPage';
import StartPage from './pages/StartPage';
import ProjectPage from './pages/ProjectPage';
import SkillPage from './pages/SkillPage';
import SJCOE from './pages/SJCOE';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/homePage' element={<StartPage />}/>
          <Route path='/aboutPage' element={<AboutPage />}/>
          <Route path='/projectPage' element={<ProjectPage />}/>
          <Route path='/skillPage' element={<SkillPage />}/>
          <Route path='/SJCOEPage' element={<SJCOE />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
