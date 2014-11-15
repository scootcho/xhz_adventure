
/*----------------------------------------------------*/
/*  Google Map
------------------------------------------------------*/
jQuery(document).ready(function($) {

    // main directions
      map = new GMaps({
        el: '#map', lat: 25.0465658, lng: 121.5488669, zoom: 13, zoomControl : true,
        zoomControlOpt: { style : 'SMALL', position: 'TOP_LEFT' }, panControl : false, scrollwheel: false
      });
    // add address markers
    map.addMarker({ lat: 37.40294, lng: -122.04994, title: 'Hacker Dojo',
      infoWindow: { content: '<p>599 Fairchild Dr, Mountain View, CA 94043</p>' } });
});
