function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}
function clearMessage() {
  document.getElementById('messages').innerHTML = '';
}
function playGame(playerInput) {
  clearMessage();
  console.log('Gracz wpisał: ' + playerInput);
  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  displayResult(computerMove, playerMove);
  console.log(computerMove);
  console.log(playerMove);
}

function getMoveName(argMoveId) {
  if (argMoveId === 1) {
    return 'kamień';
  }

  if (argMoveId === 2) {
    return 'papier';
  }

  if (argMoveId === 3) {
    return 'nozyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argPlayerMove === argComputerMove) {
    printMessage('nikt nie wygrał');
  } else if (
    (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
    (argComputerMove === 'nozyce' && argPlayerMove === 'papier') ||
    (argComputerMove === 'kamień' && argPlayerMove === 'nozyce')
  ) {
    printMessage('Ty Przegrywasz!');
  } else {
    printMessage('Ty wygrywasz!');
  }
}
