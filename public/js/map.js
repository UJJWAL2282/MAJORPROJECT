
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/dark-v11',
    center: listing.geometry.coordinates,
    zoom: 10,
});


// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: 'red'})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.location}</h4><p>Exact location will be Provided after booking</p>`))
    .addTo(map);



    //logo on map


    //  map.on('load', () => {
    //     // Load an image from an external URL.
    //     map.loadImage(
    //         'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
    //         (error, image) => {
    //             if (error) throw error;

    //             // Add the image to the map style.
    //             map.addImage('cat', image);

    //             // Add a data source containing one point feature.
    //             map.addSource('point', {
    //                 'type': 'geojson',
    //                 'data': {
    //                     'type': 'FeatureCollection',
    //                     'features': [
    //                         {
    //                             'type': 'Feature',
    //                             'geometry': {
    //                                 'type': 'Point',
    //                                 'coordinates': listing.geometry.coordinates
    //                             }
    //                         }
    //                     ]
    //                 }
    //             });

    //             // Add a layer to use the image to represent the data.
    //             map.addLayer({
    //                 'id': 'points',
    //                 'type': 'symbol',
    //                 'source': 'point', // reference the data source
    //                 'layout': {
    //                     'icon-image': 'cat', // reference the image
    //                     'icon-size': 0.25
    //                 }
    //             });
    //         }
    //     );
    // });
    

    



// //  Map My India 

//         window.onload = function() {
//             var map = new MapmyIndia.Map("map", {
//                 center: [28.61, 77.23], // Example: Delhi coordinates
//                 zoom: 9,
//                 hybrid: true // Example: Use hybrid map style
//             });
//         };
        