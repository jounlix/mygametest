document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    if (event.keyCode === 38) {
        // key: "ArrowUp"
        if (map.y < cube.y) {
            if (cube.y < cube.step) {
                cube.y -= cube.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
    }

    else if (event.keyCode === 40) {
        // key: "ArrowDown"
        if (cubeBottom < map.height) {
            if ((map.height - cubeBottom) < cube.step) {
                cube.y += map.height - cubeBottom;
            }

            else {
                cube.y += cube.step;
            }
        }
    }

    else if (event.keyCode === 37) {
        // key: "ArrowLeft"
        if (map.x < cube.x) {
            if (cube.x < cube.step) {
                cube.x -= cube.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
    }

    else if (event.keyCode === 39) {
        // key: "ArrowRight"
        if (cubeRight < map.width) {
            if ((map.width - cubeRight) < cube.step) {
                cube.x += map.width - cubeRight;
            }

            else {
                cube.x += cube.step;
            }
        }
    }

    renderCube(cube);
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function spawnCube(map, cube) {

    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;

    let mapMinY = map.y;
    let mapMaxY =  map.y + map.height - cube.height;

    cube.x = Math.round(
        mapMinX +
        Math.random() * (mapMaxX - mapMinX)
    );

    cube.y = Math.round(
        mapMinY +
        Math.random() * (mapMaxY - mapMinY)
    );


    return cube;
}

function renderBots(bots) {
    bots.map(bot => {
        let div = document.createElement('div');
        div.id = 'bot_' + bot.id;
        div.className = 'bot';
        document.body.append(div);
        renderBot(bot);
    });
}

function renderBot(bot) {
    document.getElementById('bot_' + bot.id).style.top = bot.y + 'px';
    document.getElementById('bot_' + bot.id).style.left = bot.x + 'px';
    document.getElementById('bot_' + bot.id).style.transition = 'ease ' + bot.trn + 's';
    document.getElementById('bot_' + bot.id).style.width = bot.width + 'px';
    document.getElementById('bot_' + bot.id).style.height = bot.height + 'px';
    document.getElementById('bot_' + bot.id).style.backgroundColor = bot.color;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        let div = document.createElement('div');
        div.id = 'buff_' + buff.id;
        div.className = 'buff';
        document.body.append(div);
        renderBuff(buff);
    });
}

function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'ease ' + buff.trn + 's';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.backgroundColor = buff.color;
}

function timeTike(bots) {
    //console.log(new Date().getSeconds());
    buffsLogic();
    botsLogic();
}

function buffsLogic() {
    buffs.push(spawnCube(map, buff));
    
    renderBuffs(buffs);
}

function botsLogic() {
    bots.push(spawnCube(map, bot));
    renderBots(bots);
}

function scoreTable() {
    table.push(timeTike(bots));

    renderTable(table);
}
