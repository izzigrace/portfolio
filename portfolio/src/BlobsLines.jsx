import './BlobsLines.css';
import { Parallax } from "react-scroll-parallax";
import line1 from './blobExtrasPNGs/3.png';
import line2 from './blobExtrasPNGs/4.png';
import line4 from './blobExtrasPNGs/6.png';

function BlobsLines() {
  return (
    <Parallax speed={-35} className="parallaxBlobsLines">
      <div className="blobsLines">
        <img className="line1" src={line1}></img>
        <img className="line2" src={line2}></img>
        <img className="line4" src={line4}></img>
      </div>
    </Parallax>
  );
}

export default BlobsLines;