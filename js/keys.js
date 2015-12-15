function onDocumentKeyDown(event){
    var keyCode = event.which;

    switch (keyCode) {
        case 49:
        // tecla 1
        cameraPerspectiveCar();
        break;
        case 50:
        // tecla 2
        //cameraPerspectiveTable();
        break;
        case 51:
        // tecla 1
        cameraOrtho();
        break;

        //movimento
        case 81:
        // tecla q
        car.incrementSpeed();
        break;
        case 65:
        // tecla a
        car.decrementSpeed();
        break;
        case 79:
        // tecla o
        car.rotateCarLeft();
        break;
        case 80:
        // tecla p
        car.rotateCarRight();
        break;
    }
}
