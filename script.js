 $("#sub"). on("click", function(){
     //console.log("Step 2: Button Click");
     var id=$("#place").val();
     if (isNaN(id)){
         alert("Enter valid zipcode.");
         return;
     }
     if(id==""){
         alert("Zip Code can't be empty.");
         return;
     }
     //console.log("Step 3: Making Ajax Call");
     $.ajax(
        {
        url: 'http://api.openweathermap.org/data/2.5/weather?zip='+id+',us&APPID=512ee1e8d76d7ad1f6e81acafcc685b0',
        type: 'GET',
        success: function(data){
            //console.log(data);
            showImage(data.weather[0].main);
            initMap(data.coord.lat, data.coord.lon)
            showLocation(data);
            
        },
        error: function(data){
            //console.log("Step 4: Got the Error");
            alert("The Entered ZipCode doesnot exist");
            
        }
    }
    )
})

function showImage(imageData){
    $("#weatherImage").attr("src",weatherImages[imageData]);
}

var weatherImages={
    "Clear": "./images/clearsky.png",
    "Rain": "./images/rain.png",
    "Snow": "./images/snow.png",
    "Clouds": "./images/clouds.png"
}

function showLocation(data){
    locationHtml='<span> In '+data.name+' the weather now is '+data.weather[0].main+'</span><br />'+
    '<span> Temperature is: '+data.main.temp+'</span><br />'+
    '<span>Max Temperature is: '+data.main.temp_max+'</span><br />'+
    '<span>Min Temperature is: '+data.main.temp_min+'</span<<br />'
    $("#location").html(locationHtml);
}

function initMap(latitude,longitude) {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: {
            lat: parseFloat(latitude), 
            lng: parseFloat(longitude)
        }
      });
}