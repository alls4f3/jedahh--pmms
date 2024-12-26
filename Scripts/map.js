//map.js

//Set up some of our variables.
var map; //Will contain map object.
var marker = false; ////Has the user plotted their location marker? 
        
//Function called to initialize / create the map.
//This is called when the page has loaded.
function initMap(names) {
   
    if (names == null || names == "undefined" || names == "") {
        names = "25.3858109,49.5638589";
    } else {

      
    }
   
   
    var nameArr = names.split(',');

    //The center location of our map.
    var centerOfMap = new google.maps.LatLng(nameArr[0], nameArr[1]);
    
    //Map options.
    var options = {
      center: centerOfMap, //Set center.
        zoom: 10,//The zoom value.
        mapTypeId: google.maps.MapTypeId.HYBRID

    };


    var nameArr2 = names.split(',');
  
   



    //Create the map object.
    map = new google.maps.Map(document.getElementById('map'), options);

    //var input = document.getElementById('searchMapInputmap');
    //var autocomplete = new google.maps.places.Autocomplete(input, options);
    





    var searchBox = new google.maps.places.SearchBox(document.getElementById('searchMapInputmap'));
    //map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('searchMapInputmap'));
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        searchBox.set('map', null);


        var places = searchBox.getPlaces();

        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for (i = 0; place = places[i]; i++) {
            (function (place) {
                //marker = new google.maps.Marker({

                //    position: place.geometry.location,
                //    draggable: true
                //});
                marker.setPosition(place.geometry.location);
                marker.bindTo('map', searchBox, 'map');
                google.maps.event.addListener(marker, 'map_changed', function () {
                    if (!this.getMap()) {
                        this.unbindAll();
                    }

                   
                });
                bounds.extend(place.geometry.location);
             

            }(place));

        }
        map.fitBounds(bounds);
       searchBox.set('map', map);
        map.setZoom(Math.min(map.getZoom(), 12));
      //  marker.setPosition(bounds);
       

    });













    marker= new google.maps.Marker({
        position: new google.maps.LatLng(nameArr2[0], nameArr2[1]),
        map: map,
        title: 'Hello World!',
        draggable: true
    });



    google.maps.event.addListener(marker, 'dragend', function (event) {
        markerLocation();
    })

    //Listen for any clicks on the map.
    google.maps.event.addListener(map, 'click', function(event) {                
        //Get the location that the user clicked.
        var clickedLocation = event.latLng;
        //If the marker hasn't been added.
        if(marker === false){
            //Create the marker.
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true //make it draggable
            });
            //Listen for drag events!
            google.maps.event.addListener(marker, 'dragend', function(event){
                markerLocation();
            });
        } else{
            //Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation);
        }
        //Get the marker's location.
        markerLocation();
    });
    //marker = new google.maps.Marker({
    //    position: new google.maps.LatLng(24.710695, 46.725954),
    //    map: map,
    //    draggable: true //make it draggable
    //});
    ////marker.
  //  markerLocation();
} 
        
//This function will get the marker's current location and then add the lat/long
//values to our textfields so that we can save the location.
function markerLocation(){
    //Get location.
    var currentLocation = marker.getPosition();
    marker.setPosition(marker.getPosition());
    //Add lat and lng values to a field that we can save.
    $(".maptextboxitem").val(currentLocation.lat() + ',' + currentLocation.lng());
    document.getElementsByClassName("maptextboxitem").value = currentLocation.lat() + ',' + currentLocation.lng(); //latitude
    //document.getElementById('lng').value = currentLocation.lng(); //longitude

  
}


        
        
//Load the map when the page has finished loading.
