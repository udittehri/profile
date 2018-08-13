var number = 0;
function changeContent(eventesent) {
    debugger
    console.log(eventesent);
    number++;
    switch (number) {
        case 0:
            document.getElementById('mainContent').innerHTML = "Hi, I am Udit Tehri";
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "I am a Software Engineer"
            break;
        case 2:
            document.getElementById('mainContent').innerHTML = "I love to make games";
            break;
        case 3:
            document.getElementById('mainContent').innerHTML = "";
            break;
        case 4:
            document.getElementById('mainContent').innerHTML = "Hi";
            break;
        case 5:
            document.getElementById('mainContent').innerHTML = "Hi";
            break;
        case 6:
            document.getElementById('mainContent').innerHTML = "Hi";
            break;
        case 7:
            document.getElementById('mainContent').innerHTML = "Hi";
            break;

    }
    debugger
}