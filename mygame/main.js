function RandomCube(event) {

   
}

#cube.click(function() {
    var mapHeight = $(map).height(),
        mapWidth = $(map).width(),
        $map = $('#cube'),
        cubeWidth = $cube.width(),
        cubeHeight = $cube.height(),
        heightMax = mapHeight - mapHeight,
        widthMax = mapWidth - mapWidth;

    $map.css ({
        right: Math.floor (Math.random() * widthMax),
        left: Math.floor (Math.random() * widthMax),
        up: Math.floor (Math.random() * heightMax),
        down: Math.floor (Math.random() * heightMax)
    });
});

let cube = {
    x: 0,
    y: 0,
    id: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 0,
    y: 0,
    width: 470,
    height: 470,
    color: '#f5f5f5'
}

renderMap(map);
renderCube(cube);