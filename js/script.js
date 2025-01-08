
function playGame(playerInput) {
    clearMessage();
    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = 'nieznany ruch';
    if(playerInput == '1'){
        playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3'){
        playerMove = 'nozyce';
    }

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3){
            return 'nozyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    printMessage('Twój ruch to: ' + playerMove);

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

// let randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('Wylosowana liczba to: ' + randomNumber);
// let computerMove = 'nieznany ruch';
// if(randomNumber == 1){
//     computerMove = 'kamień';
// } else if(randomNumber == 2){
//     computerMove = 'papier';
// } else if(randomNumber == 3){
//     computerMove = 'nożyce';
// }

    printMessage('Mój ruch to: ' + computerMove);

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argPlayerMove == argComputerMove) {
            printMessage("nikt nie wygrał");
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
            printMessage('Ty Przegrywasz!');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
            printMessage('Ty Przegrywasz!');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ty Przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
        }
    }
    displayResult(computerMove, playerMove);
}
document.getElementById('play-papier').addEventListener('click', function (){playGame(2)});
document.getElementById('play-rock').addEventListener('click', function (){playGame(1)});
document.getElementById('play-scissors').addEventListener('click', function (){playGame(3)});
