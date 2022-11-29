import './BlobsTemporary.css';
import { Parallax } from "react-scroll-parallax";
import blob1 from './blobPNGs/1.png';
import blob2 from './blobPNGs/2.png';
import blob8 from './blobPNGs/8.png';
import blob9 from './blobPNGs/9.png';
import blob10 from './blobPNGs/10.png';
import line1 from './blobExtrasPNGs/3.png';
import line2 from './blobExtrasPNGs/4.png';
import line3 from './blobExtrasPNGs/5.png';
import line4 from './blobExtrasPNGs/6.png';
import line5 from './blobExtrasPNGs/7.png';

function About() {

  return (
    <Parallax speed={-40} className="parallaxBlobs">
      <div className="blobsTemporary">
        <img className="tempBlob1" src={blob1}></img>
        <img className="tempBlob2" src={blob2}></img>
        {/* <img className="tempBlob8" src={blob8}></img> */}
        {/* <img className="tempBlob9" src={blob9}></img> */}
        {/* <img className="tempBlob10" src={blob10}></img> */}
        <img className="line1" src={line1}></img>
        <img className="line2" src={line2}></img>
        <img className="line3" src={line3}></img>
        <img className="line4" src={line4}></img>
        {/* <img className="line5" src={line5}></img> */}
      </div>
    </Parallax>
  );
}

export default About;