window.onload = getMyLocation;

function getMyLocation() 
{
 if (navigator.geolocation) 
 {
   navigator.geolocation.getCurrentPosition(displayLocation, displayError);

 } 
 else 
 {
 alert("Oops, no geolocation support");
 }
}

function displayLocation(position) 
{
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;
 convert(latitude, longitude);
}

function convert(latitude, longitude)
{
	var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude  + "&key=AIzaSyCNKoNqgwkk3x5QKK95krp6TzLq4NB_In4", true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);

    xhr.onreadystatechange = processRequest;
 
    function processRequest(e) 
    {
    	if (xhr.readyState == 4 && xhr.status == 200) 
    	{
          var response = JSON.parse(xhr.responseText);
          var city = response["results"][0]["address_components"][3]["long_name"];
          document.getElementById("body").style.backgroundImage = 'url(img/' + city + '.jpg)';    
          document.getElementById("my_location").innerHTML = city;   
        } 
    }
}



function displayError(error) 
{
 var errorTypes = 
 {
 0: "Unknown error",
 1: "Permission denied by user",
 2: "Position is not available",
 3: "Request timed out"
 };
 var errorMessage = errorTypes[error.code];
 if (error.code == 0 || error.code == 2) 
 {
 errorMessage = errorMessage + " " + error.message;
 }
 console.log(errorMessage);
}

//
//AIzaSyCNKoNqgwkk3x5QKK95krp6TzLq4NB_In4