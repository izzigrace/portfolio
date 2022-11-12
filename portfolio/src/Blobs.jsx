import { useState, useEffect } from 'react';
import React from "react";
// import Snap from "snapsvg";
import { ReactComponent as Blob1 } from './blobSVGs/blob1.svg';
import './Blobs.css';

class Blobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="blobs">
        <Blob1 className="blob1" />
      </div>
    );
  }
}

export default Blobs;