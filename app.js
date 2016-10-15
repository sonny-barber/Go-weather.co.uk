

// Add Event listener
window.addEventListener("load", start, false);

function start(){
 document.getElementById("button1").addEventListener("click", loadCity, false);
}


function loadCity() {
    
    
    // UserCity is Grabbing the users input from dialog box on html 
    userCity = document.getElementById('city').value;
    
    
    // including open weathers api and concatenating into a string to create one URL to get City Weather
    userInput = "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&mode=html&APPID=6b488858e0ed26b48ec6fde0d58a666b";
    
    // Log out the full URL to Javascript Console.. 
    //console.log(userInput);
    
    
    // ****************** Make an Ajax Call ****************************************
    
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        
        
        if (http.readyState == 4 && http.status == 200){
            var response = http.responseText;
            document.getElementById('current_temp').innerHTML = response;
            
            
    //Response 
            var response2 = JSON.parse(response);
            document.getElementById('icon').innerHTML = response2;
            //document.getElementById("current_temp").innerHTML = response2.name;
            
        }
    };
    
    http.open("GET", userInput, true);
    http.send();
    
    // ****************  END OF AJAX CALL *********************************
    
}
    