var number = 0;
function changeContent() {
    debugger
    if (number < -1 )
        number = -1;
    else if (number > 1)
        number = 1 
    switch (number) {
        case -1:
            document.getElementById('mainContent').innerHTML = "No Previous!";
            document.getElementById('extraContent').innerHTML = "";
            number = -1;
            break;

        case 0:
            document.getElementById('mainContent').innerHTML = "Jumble Words!";
            document.getElementById('extraContent').innerHTML = "Play Now";
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "Tic Tac Toe";
            document.getElementById('extraContent').innerHTML = "Play Now";
            break;
    }
    debugger
}

function next(plusMinus) {
    if (plusMinus == 'next') {
        number++;
        changeContent();
    }
    else if (plusMinus == 'back') {
        number--;
        changeContent();
    }
}


function changeUrl() {
    debugger
    switch (number) {

        case 0:
            window.open('..\\Games\\JumbleWord\\index.html') ;
            break;
        case 1:
        window.open('..\\Games\\TicTacToe\\tictac.html') ;      
            break;

    }

}