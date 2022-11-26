while(true) {
    let numberToGuess = Math.floor(Math.random() * 1000);

    let numberFromUser = prompt('Введите целое число от 0 до 999. Выход: q');

    if (numberFromUser === 'q') {
        alert('Спасибо за игру!');
        break;
    } if (isNaN(numberFromUser)) {
        alert('Вы ввели не число!');
    } else if (numberToGuess > numberFromUser) {
        alert('Вы ввели число меньше загаданного.');
    } else if (numberToGuess < numberFromUser) {
        alert('Вы ввели число больше загаданного.');
    } else {
        alert('Вы угадали!');
    }
}