var number = 0;
function changeContent() {
    debugger
    if (number < -1 )
        number = -1;
    switch (number) {
        case -1:
            document.getElementById('mainContent').innerHTML = "No Previous!";
            number = -1 ;
            break;
            case 0:
            document.getElementById('mainContent').innerHTML = "Hi, I am Udit Tehri"
            break;
        case 1:
            document.getElementById('mainContent').innerHTML = "A B.Tech"
            document.getElementById('extraContent').innerHTML = "My Education Profile"
            break;
        case 2:
            document.getElementById('mainContent').innerHTML = "I am a Software Engineer";
            document.getElementById('extraContent').innerHTML = "Really. I dont Copy Paste because I love it "
            
            break;
        case 3:
            document.getElementById('mainContent').innerHTML = "I love to make games";
            document.getElementById('extraContent').innerHTML = "Want to play them now ?"
            break;
        case 4:
            document.getElementById('mainContent').innerHTML = "Currently Not UnEmployed";
            document.getElementById('extraContent').innerHTML = "Experience in Employment";
            break;
        case 5:
            document.getElementById('mainContent').innerHTML = "Hangout ?";
            document.getElementById('extraContent').innerHTML = "Socially ";
            break;
        case 6:
            document.getElementById('mainContent').innerHTML = "Have a good Day!";
            document.getElementById('extraContent').innerHTML = " ";
            
            break;
        case 7:
            document.getElementById('mainContent').innerHTML = "And I Love Music !";
            
            break;
    }
    debugger
}

function next(plusMinus)
{
 if (plusMinus == 'next')
 {
    number++;
    changeContent();
 }
 else if (plusMinus == 'back')
 {
     number--;
     changeContent();
 }   
}