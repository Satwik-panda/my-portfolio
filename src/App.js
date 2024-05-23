import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import ContactMe from './component/contact';
import Experience from './component/experience';
import Skills from './component/skills';
import Projects from './component/projects';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <Projects/>
      <Skills/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;
