import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Others from "./pages/Others";
import TouchRootsAfrica from './components/TouchRootsAfrica';
import Jhpiego from "./components/Jhpiego";
import DrugService from "./components/DrugService";
import CommunityHealth from "./components/CommunityHealth";
import YouthClub from "./components/YouthClub";
import Skills from "./components/Skills";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/others" element={<Others />} />
          <Route path="/touchrootsafrica" element={<TouchRootsAfrica />} />
          <Route path="/jhpiego" element={<Jhpiego />} />
          <Route path="/drugservice" element={<DrugService />} />
          <Route path="/communityhealth" element={<CommunityHealth />} />
          <Route path="/youthclub" element={<YouthClub />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
