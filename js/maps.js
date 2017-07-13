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
		         var uluru = {lat: latitude, lng: longitude};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 16,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map
	        });
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

