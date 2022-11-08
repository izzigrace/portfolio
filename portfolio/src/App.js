import logo from './logo.svg';
import './App.css';
import AnimationPractice from './AnimationPractice';
import Typical from "react-typical";
import Typed from 'react-typed';

function App() {

  return (
    <div className="App">
      <div className="helloWorldIAm">
        Hello World! I am:
      </div>
      <div className="isabelleSmith">
        Isabelle Smith
      </div>
      <div className="aFullStackSE">
        {/* <Typical
          steps={['A Front End Developer', 1000, 'A Back End Developer', 1000, 'A Full Stack Software Engineer.', 5000]}
          loop={Infinity}
          wrapper="p"
        /> */}
        <Typed
          strings={[
              'A Front End Developer',
              'A Back End Developer',
              'A Full Stack Software Engineer.^5000']}
              typeSpeed={40}
              backSpeed={50}
              loop >
        </Typed>
        </div>
      {/* <AnimationPractice /> */}
      </div>
  );
}

export default App;
