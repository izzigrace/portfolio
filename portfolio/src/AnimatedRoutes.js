import Projects from './Projects.jsx';
import About from './About.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<About className="aboutComponent"/>} />
      <Route path='/projects' element={<Projects className="projectsComponent"/>} />
    </Routes>
  );
}

export default AnimatedRoutes;