var healthPoints = 100;

function updateHealtPoints(points) {
    healthPoints = points ; 
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%" ; 

    if (healthPoints < 1) {
        alert("Game Over !");
        window.location.reload();
    }
}



function iShoot(enemy){
    enemy.classList.add("dead");
    if (!livingEnemies().length) {
        alert("Win!");
        window.location.reload();
    }
}

function enemyAttacksMe(enemy){
    enemy.classList.add("showing");

    setTimeout(() => {
        enemyShootsMe(enemy);
    }, 1000);

    setTimeout(() => {
        enemy.classList.remove("showing");
    }, 3000);
}

// var enemy1 = document.querySelector("#enemy1");
// enemyAttacksMe(enemy1);



function enemyShootsMe(enemy) {
    if (!enemy.classList.contains("dead")) {

    enemy.classList.add("shooting");
    updateHealtPoints(healthPoints - 20);

    setTimeout(() => {
        enemy.classList.remove("shooting")
    }, 200);

    }
}


 function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
 }


 function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo=Math.floor(randomEnemyNo);

    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;

    setTimeout(() => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
        
    }, randomDelay);
 }

 function newGame() {
    randomEnemyAttacks();
    document.querySelector("button").style.display="none";
 }

