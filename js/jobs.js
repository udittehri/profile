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
            document.getElementById('mainContent').innerHTML = "Associate DevOps Engineer at Rebus Code ";
            document.getElementById('extraContent').innerHTML = "Current, More About Company ";
            document.getElementById('description').innerHTML = "Working on Angular 5 and C# ";            
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "Software Developer Trainee Bhadani Technologies ";
            document.getElementById('extraContent').innerHTML = "Jan 2018 - July 2018, More About Company ";
            document.getElementById('description').innerHTML = "Worked on Angular 5 and PHP";            
            
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
            window.open('https://www.rebuscloud.com/') ;
            break;
        case 1:
        window.open('http://bhadanitech.com/') ;      
            break;

    }

}

function goIndex(caseValue)
{
    debugger
    window.location.href = '..\\index.html';
    

}