
let player = {
  hp: 100,
  dmg: 10,
  Abillity1: "Arrow",
  Abillity2: "Fire Arrow",
  Abillity3: "Lightning Arrow",
  Abillity4: "Cold Arrow"
};

let enemy = {
  hp: 110,
  dmg: 10
};




const characterNameCreated = () => {
  player.name = $("#inputName").val();
  charactersNameMeny.hidden = true;
  charactersclassMeny.hidden = false;
  selectedName.innerText = "The name of our Hero is " + player.name + ", now select your class! "
};

selectCharacterClassWarrior = () => {
  selectedClass.innerText = "You have selected the way of the Warrior, " + player.name + ""
  charactersclassMeny.hidden = true;

  player.class = "Warrior";
  player.Abillity1 = "Hack";
  player.Abillity2 = "Slash";
  player.Abillity3 = "Slam";
  player.Abillity4 = "Punch";
  startFight.hidden = false;
};
selectCharacterClassMage = () => {
  charactersclassMeny.hidden = true;
  document.getElementById("contanierHidden").id = "contanierShow"; 
  selectedClass.innerText = "You have selected the wise Mage";
  player.class = "Mage";
  player.Abillity1 = "Fire boll";
  player.Abillity2 = "Ice Blast";
  player.Abillity3 = "Lightning bolt";
  player.Abillity4 = "Staff Bash";
  startFight.hidden = false;
};
selectCharacterClassArcher = () => {
  charactersclassMeny.hidden = true;
  selectedClass.innerText = "You have selected the agile Archer";
  player.class = "Archer";
  player.Abillity1 = "Flame Arrow";
  player.Abillity2 = "Stun Arrow";
  player.Abillity3 = "Piercing Arrow";
  player.Abillity4 = "Assasination Strike";
  startFight.hidden = false;
  contanier.display = false;
};


/*used later for disable button*/
let attack1 =  document.getElementById('attack1');
let attack2 = document.getElementById('attack2');
let attack3 = document.getElementById('attack3');
let attack4 = document.getElementById('attack4');
/*used later for disable button*/

/*used later for classes so that the ability in player object is displayed
the attack button, to switch spells just change ability1-4*/
attack1.innerText = ""+ player.Abillity1 +"";
attack2.innerText = ""+ player.Abillity2 +"";
attack3.innerText = ""+ player.Abillity3 +"";
attack4.innerText = ""+ player.Abillity4 +"";
/*used later for classes*/

/*Attack functions*/
  const attackFunction1 = () => {
    let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
    let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
    //Give the player attack information, maybe later make a combatlog?

    //Players Combat starts
    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    //hits the target, change the + 5 for more or less dmg abilitys
    enemy.hp -= playerAttack;

    messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
    printToScreen();

      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;
    //Players Combat ends

    //enemy combat start
      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "Opponent strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          attack1.disabled = false;
          attack2.disabled = false;
          attack3.disabled = false;
          attack4.disabled = false;
      }, 1500 /*valu to change time it takes for combat*/);

  };
  const attackFunction2 = () => {
    let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
    let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity2 + " ability and did "+ playerAttack +" damage!"
    printToScreen();
      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;

      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";

      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "Opponent strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          attack1.disabled = false;
          attack2.disabled = false;
          attack3.disabled = false;
          attack4.disabled = false;
      }, 1500 );
  };
  const attackFunction3 = () => {
    let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
    let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity3 + " ability and did "+ playerAttack +" damage!"
    printToScreen();
      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;

      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";

      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "Opponent strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          attack1.disabled = false;
          attack2.disabled = false;
          attack3.disabled = false;
          attack4.disabled = false;
      }, 1500 );

  };
  const attackFunction4 = () => {
    let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
    let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity4 + " ability and did "+ playerAttack +" damage!"

    printToScreen();
      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;

      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";

      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "Opponent strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          attack1.disabled = false;
          attack2.disabled = false;
          attack3.disabled = false;
          attack4.disabled = false;
      }, 1500 );

  };
/*Attack functions*/

/*Write out new value of enemy and player*/
const printToScreen = () => {
  document.getElementById('enemy-hp').innerText =
  enemy.hp + " /100" ;

  document.getElementById('player-hp').innerText =
  player.hp + " /100" ;
};


printToScreen();
/*Write out new value of enemy and player*/
