function moveIt(catchEvent)
{
    if (catchEvent.keyCode ==32 )
    {
        console.log(document.getElementById('mainhead').offsetTop);
        document.getElementById('mainhead').style.position='relative';
        // document.getElementById('mainhead').style.left ="100px";     
        var hi = 100;
        for (let index = 0; index < 30; index++) {
            debugger;
            // setTimeout(1000); 
            // setTimeout(myFunction, 900000);
            sleep(20);
            document.getElementById('mainhead').style.left = document.getElementById('mainhead').offsetLeft + 1 +'px';      
            hi += 20;
            sleep(20);
            
        }  
    }   
    
    else 
    console.log("Only Space Bar");
    
    
}
function sleep(milliseconds) {
    debugger;
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }