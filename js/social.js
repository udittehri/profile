var number = 0;
function changeContent() {
    debugger
    if (number < -1)
        number = -1;
    else if (number > 5)
        number = 5
    switch (number) {
        case -1:
            document.getElementById('mainContent').innerHTML = "No Previous!";
            document.getElementById('extraContent').innerHTML = "";
            number = -1;
            break;
        case 0:
            document.getElementById('mainContent').innerHTML = "LinkedIn";
            document.getElementById('extraContent').innerHTML = "Make a Connection ";
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "Phone Call ";
            document.getElementById('extraContent').innerHTML = "+91 807-653-5887 ";
            break;
        case 2:
            document.getElementById('mainContent').innerHTML = "Email ";
            document.getElementById('extraContent').innerHTML = "Info@iamudit.tk ";
            break;
        case 3:
            document.getElementById('mainContent').innerHTML = "Instagram";
            document.getElementById('extraContent').innerHTML = "Let's Follow ";
            break;
        case 4:
            document.getElementById('mainContent').innerHTML = "Snapchat";
            document.getElementById('extraContent').innerHTML = "Snapping without Dog Filter";
            break;
        case 5:
            document.getElementById('mainContent').innerHTML = "Facebook";
            document.getElementById('extraContent').innerHTML = "Lets Be Friends ";
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
            window.open('https://www.linkedin.com/in/udit-tehri-a8055b132');
            break;
        case 2:
            window.open('MailTo : info@iamudit.tk');
            break;
        case 3:
            window.open('https://www.instagram.com/udittehri/');
            break;
        case 4:
            window.open('#');
            break;
            case 5:
            window.open('https://www.facebook.com/udittehri');
            break;

    }

}

function goIndex(caseValue) {
    debugger
    window.location.href = '..\\index.html';


}