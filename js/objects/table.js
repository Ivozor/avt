function Table() {


    this.init = function() {
        var geometry = new THREE.BoxGeometry( 100, 100, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0xff0000} );
        var cube = new THREE.Mesh( geometry, material );
        cube.name = "Table";
        scene.add( cube );

        return this;

    };
}
