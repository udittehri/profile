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
            document.getElementById('mainContent').innerHTML = "B.Tech in Computer Science ";
            document.getElementById('extraContent').innerHTML = "The Technological Institute of Textile and Science";
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "Higher Secondary School";
            document.getElementById('extraContent').innerHTML = "Shree Ram Public School";
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
            window.open('http://www.titsbhiwani.ac.in/','_blank') ;
            break;
        case 2:
            break;

    }

}

function goIndex(caseValue)
{
    debugger
    window.location.href = '..\\index.html';
    

}