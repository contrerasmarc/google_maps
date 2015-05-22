// ==========================================================================
// Project:   GoogleMaps - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals GoogleMaps */

// This page describes the main user interface for your application.
GoogleMaps.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['labelView', 'googleMapsView'],

    labelView: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: {
        centerX: 0,
        top: 8,
        width: 300,
        height: 24
      },
      tagName: "h1",
      value: "SproutCore - Google Maps Example"
    }),

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

  })

});
