import { useState, useEffect } from 'react';
import React from "react";
// import Snap from "snapsvg";
import { ReactComponent as Blob1 } from './blobSVGs/blob1.svg';
import './Blobs.css';
import pinkblob from './blobSVGs/allpinkblob.png';
import pinkgreenblob from './blobSVGs/pinkgreenblob.png';
import { Parallax } from "react-scroll-parallax";

class Blobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <Parallax speed={-40} className="blobs">
        {/* <Blob1 className="blob1" /> */}
        <img src={pinkblob} className="pinkgreenblob"></img>
        {/* <img src={pinkgreenblob} className="pinkgreenblob"></img> */}
      </Parallax>
    );
  }
}

export default Blobs;