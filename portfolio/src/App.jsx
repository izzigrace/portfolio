import './App.css';
import { useState, useEffect } from 'react';
import Projects from './Projects.jsx';
import Menu from './Menu.jsx';
import Blobs from './Blobs.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import gif from './loadingGif/blobLoader.gif';
import About from './About.jsx';
import BlobsTemporary from './BlobsTemporary.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import BlobsLines from './BlobsLines.jsx';

function App() {
  const [loadingDiv, setLoadingDiv] = useState(<img src={gif} className="gif"></img>);

  useEffect(() => {setLoadingDiv(<div></div>)}, []);


  return (
    <ParallaxProvider className="App">
      <Router>
        {loadingDiv}
        <Menu />
        <BlobsTemporary className='blobsTempComponent'/>
        <BlobsLines className='blobsTempComponent'/>
        {/* <Blobs className="blobsComponent"/> */}
        <AnimatedRoutes />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
