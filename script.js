const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startDiv = document.getElementById('start');
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
let score = 0;
let highScore = 0;
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;


const botDoorPath = './maxwell.jpg';
//const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath  = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath  = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const numClosedDoors = 3;
let openDoor1= null;
let openDoor2= null;
let openDoor3= null;

let isBot = false;


let doorsSelected = 0

const setSelectionStatus = () =>{



};

const isBotCheck = () =>{

  
  doorsSelected = doorsSelected + 1;

  
    
  if(isBot && doorsSelected < 3){
    score = 0;
    currentStreak.innerHTML = score;
    doorsSelected = 0;
    startDiv.innerHTML = 'Game over! Play again?'

    }

   

    if(doorsSelected === 3)
    {
    score = score + 1;
    currentStreak.innerHTML = score;
    setBestStreak();
    doorsSelected = 0
    startDiv.innerHTML = 'You Win! Play again?'
    }
  
}

const setIsBot = (doorImage) =>{
  var str = doorImage.src;
  var n = str.length;
  var t = str.substring(n-6,n);

    if(t === "ll.jpg")
    {
      isBot = true;
    }
    else
    {
      isBot = false;
    }
}

const setBestStreak = () =>{

  if(score >  highScore)
  {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }

};


doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  setIsBot(doorImage1);
  isBotCheck();
 //console.log('hit it');
};

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    setIsBot(doorImage2);
    isBotCheck();
   //console.log('hit it');
};

  doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    setIsBot(doorImage3);
    isBotCheck();
   //console.log('hit it');
};


const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 3:
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 4:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;
    case 5:
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      break;
  }
}


startDiv.onclick = () =>{
  if(startDiv.innerHTML === 'You Win! Play again?' || startDiv.innerHTML === 'Game over! Play again?')
  {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startDiv.innerHTML = 'Good luck';

    randomChoreDoorGenerator(); 
    
    
    doorsSelected = 0;
    
  }
  if( startDiv.innerHTML === 'Game over! Play again?')
  {
    currentStreak.innerHTML = score;
    score = 0;
  }
}

randomChoreDoorGenerator();