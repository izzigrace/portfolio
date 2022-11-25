import React from "react";
import * as THREE from "three";
import { GLTFLoader } from '../three.js/three.js-master/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../three.js/three.js-master/examples/jsm/controls/OrbitControls.js';
import duckModel from '../gltfs/duck.gltf';
import './Goalseekr.css';

class NotNakedThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
        //make and render scene
        var scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0x00000 );

        // webglrenderer displays your scene using webgl. antialias: true is making it more realistic by smoothing jagged lines
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth * 0.5, window.innerHeight * 0.5);
        renderer.setClearColor( 0x000000, 0 ); //??
        renderer.outputEncoding = THREE.sRGBEncoding;
        const theGDiv = document.getElementById("goalseekrDiv");
        theGDiv.appendChild( renderer.domElement );

        //make and position camera
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.set( 0, 1, 0 );
        camera.position.z = 5;
        scene.add(camera);

        //make lights
        const ambientLight = new THREE.AmbientLight( 0xffffff, 0.3 );
        scene.add( ambientLight );
        var light = new THREE.PointLight( 0xffffff, 1.3 );
        camera.add( light );

        const gltfLoader = new GLTFLoader();
        let saturn = new THREE.Group();
        gltfLoader.load(duckModel, function(gltf) {
          let saturn1 = gltf.scene;
          // saturn1.rotation.x = -0.15;
          gltf.scene.scale.set(1.2, 1.2, 1.2);
          saturn.add(saturn1);
          scene.add(saturn1);
        });
        scene.add(saturn);
        saturn.position.set(0, 0, 0);

        //set orbit controls
        var controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = true;
        // controls.minPolarAngle = Math.PI / 2;
        // controls.maxPolarAngle = Math.PI / 2;
        controls.autoRotate = true;

        function animate() {
          controls.update();
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
        }
        animate();
  }

  render() {
    return (
      <div id="goalseekrDiv" className="goalseekrModel">
      </div>
    )
  }
}

export default NotNakedThree;