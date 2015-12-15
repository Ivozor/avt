function setCamera(type) {
    switch(type) {
        case 1:
        cameraOrtho();
        break;
        case 2:
        cameraPerspectiveCar();
        break;
        default:
        cameraOrtho();
        break;
    }
}

function cameraOrtho() {
    camera = new THREE.OrthographicCamera(  (window.innerWidth / 4) / - 2,
    (window.innerWidth / 4) / 2,
    (window.innerHeight / 4) / 2,
    (window.innerHeight / 4) / - 2,
    - 500,
    500 );

    scene.add( camera );
}

function cameraPerspectiveCar() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 100;


    scene.add( camera );
}
