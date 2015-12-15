function Car() {
    this.name= "Car";

    this.speed = 0;
    this.speedlimitforward = 1;
    this.speedlimitbackward = -0.1;

    this.speedincrement = 0.1;
    this.speeddecrement = 0.05;

    this.rotation = 0;
    this.rotationvalue = 3;



    this.init = function (posx, posy) {
        var geometry = new THREE.BoxGeometry( 2, 3, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x0000ff} );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.x = posx;
        cube.position.y = posy;
        cube.position.z = 3;

        cube.name = this.name;

        scene.add( cube );

        return this;
    };

    this.getObj = function () {
        return scene.getObjectByName( this.name );
    };

    this.getPos = function () {
        var obj = this.getObj();
        return obj.position;
    };


    this.moveCar = function () {
        var obj = this.getObj();
        var pos = this.getPos();



        obj.position.x = pos.x + (this.speed * Math.sin(this.rotation * (Math.PI/180)));
        obj.position.y = pos.y + (this.speed * Math.cos(this.rotation * (Math.PI/180)));
    };

    this.rotateCarRight = function () {
        var obj = this.getObj();

        this.rotation += this.rotationvalue;
        obj.rotation.z += this.rotationvalue;
    };

    this.rotateCarLeft = function () {
        var obj = this.getObj();
        this.rotation -= this.rotationvalue;
        obj.rotation.z -= this.rotationvalue;
    };

    this.incrementSpeed = function () {
        if(this.speed + this.speedincrement >= this.speedlimitforward) {
            this.speed = this.speedlimitforward;
        }
        else {
            this.speed += this.speedincrement;
        }
    };

    this.decrementSpeed = function () {
        if(this.speed - this.speeddecrement <= this.speedlimitbackwards)
        {
            this.speed = speedlimitbackwards;
        }
        else {
            this.speed -= this.speeddecrement;
        }
    };
}
