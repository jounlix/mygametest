let map = {
    x: 0,
    y: 0,
    width: window.outerWidth,
    height: window.outerHeight,
    color: '#f5f5f5'
}

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

let bots = [];

let bot = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}

//bots.push(spawnCube(map, bot));

let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'yellow'
}

let table = {
    display: inline-block,
    width: window.left,
    height: window.bottom,
    color: '#000000',
}

//buffs.push(spawnCube(map, buff));

renderMap(map);
renderCube(spawnCube(map, cube));
//renderBots(bots);
//renderBuffs(buffs);
renderTable(timeTike(bots, table));

let tike = setInterval(timeTike, 3000);