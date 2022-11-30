import Projects from './Projects.jsx';
import About from './About.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Contact from './Contact.jsx';
import About2 from './About2.jsx';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<About className="aboutComponent"/>} />
        <Route path='/about2' element={<About2 className="aboutComponent2"/>} />
        <Route path='/projects' element={<Projects className="projectsComponent"/>} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;