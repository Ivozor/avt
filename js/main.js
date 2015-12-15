var scene = null;
var camera = null;
var renderer = null;

// objects
var table = null;
var car = null;

// end objects




function render() {
    requestAnimationFrame( render );



    car.moveCar();

    renderer.render( scene, camera );
}


function init () {
    scene = new THREE.Scene();



    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // init camera with ortho
    setCamera(1);


    setLight();

    table = new Table().init();
    car = new Car().init(-45 , -45);

    document.addEventListener("keydown", onDocumentKeyDown, false);


    render();
}

$( document ).ready(function() {
    init();
});
