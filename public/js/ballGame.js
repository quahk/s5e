const KEY = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  A: 65,
  W: 87,
  D: 68,
  S: 83,
};

let keyStatus = {
  top: false,
  down: false,
  left: false,
  right: false,
};

document.addEventListener('keydown', (e) => {
  //console.log(e.keyCode);

  if (e.keyCode == KEY.W) {
    keyStatus.top = true;
  } else if (e.keyCode == KEY.A) {
    keyStatus.left = true;
  } else if (e.keyCode == KEY.D) {
    keyStatus.right = true;
  } else if (e.keyCode == KEY.S) {
    keyStatus.down = true;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.keyCode == KEY.W) {
    keyStatus.top = false;
  } else if (e.keyCode == KEY.A) {
    keyStatus.left = false;
  } else if (e.keyCode == KEY.D) {
    keyStatus.right = false;
  } else if (e.keyCode == KEY.S) {
    keyStatus.down = false;
  }
});

let avatar = document.querySelector('#avatar');
let enemy = document.querySelector('.enemy');

let gameData = {
  speed: 2,
  x: 200,
  y: 200,
  enemySpeed: 1,
  enemyX: 0,
  enemyY: 0,
};

function render() {
  avatar.style.left = gameData.x + 'px';
  avatar.style.top = gameData.y + 'px';
  enemy.style.left = gameData.enemyX + 'px';
  enemy.style.top = gameData.enemyY + 'px';
}

function moveAvatar() {
  if (keyStatus.top) {
    gameData.y -= gameData.speed;
  }

  if (keyStatus.down) {
    gameData.y += gameData.speed;
  }

  if (keyStatus.left) {
    gameData.x -= gameData.speed;
  }

  if (keyStatus.right) {
    gameData.x += gameData.speed;
  }
}

function moveEnemy() {
  if (gameData.x > gameData.enemyX) {
    gameData.enemyX += gameData.enemySpeed;
  }
  if (gameData.x < gameData.enemyX) {
    gameData.enemyX -= gameData.enemySpeed;
  }
  if (gameData.y > gameData.enemyY) {
    gameData.enemyY += gameData.enemySpeed;
  }
  if (gameData.y < gameData.enemyY) {
    gameData.enemyY -= gameData.enemySpeed;
  }
}

function checkCollision() {
  if (Math.abs(gameData.x - gameData.enemyX) < 15 && Math.abs(gameData.y - gameData.enemyY) < 15) {
    gameData.enemyX = 0;
    gameData.enemyY = 0;

    keyStatus.top = false;
    keyStatus.down = false;
    keyStatus.left = false;
    keyStatus.right = false;
  }
}

setInterval(() => {
  moveEnemy();
  moveAvatar();
  checkCollision();
  render();
}, 1000 / 120);

$('#startBallGame').on('click', () => {
    $('#ballGameMode').text('Difficulty: Quahkmatically Easy')
    setTimeout(() => {
        $('#ballGameMode').text('Difficulty: Super Easy');
        gameData.speed = 3;
        gameData.enemySpeed = 2;
    }, 10000);
})
