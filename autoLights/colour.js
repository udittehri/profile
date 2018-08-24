var again = 0;
var items = ['red', 'blue', 'green', 'yellow', 'black', 'pink', 'grey','cyan','lime','orange','Marble Blue','beer'];
// function changeColour(colour) {
//     document.body.style.backgroundColor = colour;
//    startActivity();

// }

function startActivity() {
    if (again < 100) {
        var container = document.getElementById("load");
        var content = container.innerHTML;
        container.innerHTML = content;
        debugger;
        again++;
        var item = items[Math.floor(Math.random() * items.length)];
        document.body.style.backgroundColor = item;
        document.getElementById("load").style.backgroundColor = item;

        setTimeout(window.location.reload(true), 1000);
    }
}

