/*!
* Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/
var maxImageSize = 0;
$(document).ready(function(){
  $('#year').text(new Date().getFullYear());
  $('#play-button').click(function (){
    var music = document.getElementById("music"); 
    music.paused ? music.play() : music.pause();
    var newClass = music.paused ? "play" : "pause";
    $('#play-button').removeClass("fa-play fa-pause").addClass(`fa-${newClass}`);
  });
  $('.carousel-control').on("focus",function(){
        $(':focus').blur();
    });
    $("#images").append('<div class="item active default"><img src="img/default.jpg"></div>');
    var feed = new Instafeed({
        //If the accessToken dies, redo it at http://instagram.pixelunion.net/
        accessToken: '481121239.1677ed0.6581ba1d44e54029a60ce2841fa17a50',
        get: 'user',
        userId:'481121239',
        sortBy: 'most-recent',
        target: 'images',
        resolution: 'standard_resolution',
        template: '<div class="item"><img class="instafeed-image" src="{{image}}" style="width:{{width}}px;" /></div>',
        filter: function(image) {
            if (image != null && image.images.standard_resolution.height >= maxImageSize){
                maxImageSize = image.images.standard_resolution.height;
                $("#images").css("height", maxImageSize);
            }
            return image.tags.indexOf('dreamsmadetruepageant') >= 0;
        }
    });
    feed.run();
});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 13,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(42.080, -94.8664), // Carroll

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    draggable: true,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#ff0099"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "hue": "#ff0099"
          },
          {
            "visibility": "on"
          },
          {
            "invert_lightness": true
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ff0099"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ff0099"
          },
          {
            "lightness": 16
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0f252e"
          },
          {
            "lightness": 17
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var markers = {
    CarrollHighSchool: new google.maps.Marker({
      position: new google.maps.LatLng(42.091630, -94.862089),
      map: map,
      icon: 'img/rainbow.png',
      title: "Carroll High School"
    }), 
    Carrollton: new google.maps.Marker({
      position: new google.maps.LatLng(42.077613, -94.877861),
      map: map,
      icon: 'img/hotel.png',
      title: "Carrollton, Super 8 Hotel"
    }),
    Super8Motel:  new google.maps.Marker({
      position: new google.maps.LatLng(42.065333, -94.847562),
      map: map,
      icon: 'img/hotel.png',
      title: "Super 8 Hotel, Burke Inn"
    }),
    DaysInn: new google.maps.Marker({
      position: new google.maps.LatLng(42.073616, -94.880371),
      map: map,
      icon: 'img/hotel.png',
      title: "Day's Inn"
    })
  }
}
