# SproutCore - Google Maps

A very basic [Sproutcore](http://www.github.com/sproutcore/sproutcore) app that implements the Google Maps JavaScript API.

On Buildfile you must include:

    config :google_maps, :javascript_libs => ['https://maps.googleapis.com/maps/api/js?v=3.exp']

In main view:

    googleMapsView: SC.View.extend({
      layout: {
        top: 40
      },
      layerId: 'map_container',
      render: function(context) {}
    }),

    didAppendToDocument: function() {
      var map;
      function initialize() {
        var mapOptions = {
          zoom: 8,
          // center: new google.maps.LatLng( - 34.397, 150.644)
          center: new google.maps.LatLng( 47.38, 8.53)
        };
        map = new google.maps.Map(document.getElementById('map_container'), mapOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);

    }