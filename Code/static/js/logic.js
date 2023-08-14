// Store the API endpoint for earthquake data. I used the JSON file that had earthquakes that occurred in the last 7 days. 
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the map instance.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add base layer (e.g., OpenStreetMap).
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Fetch earthquake data and create markers.
d3.json(queryUrl).then(function (data) {
  createMarkers(data.features);
});

// Create markers with size and color based on magnitude and depth.
function createMarkers(earthquakeData) {
  for (let i = 0; i < earthquakeData.length; i++) {
    let earthquake = earthquakeData[i];
    
    // Calculate marker size based on magnitude.
    let markerSize = earthquake.properties.mag * 5; // Adjust as needed.
    
    // Determine marker color based on depth.
    let depth = earthquake.geometry.coordinates[2];
    let markerColor = getColor(depth);

    // Create a circle marker with the calculated size and color.
    let marker = L.circleMarker([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]], {
      radius: markerSize,
      fillColor: markerColor,
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity:0.75
    }).addTo(myMap);

    // Bind a popup to the marker with information.
    marker.bindPopup(`<h3>Location: ${earthquake.properties.place}</h3><hr><p>Date and Time: ${new Date(earthquake.properties.time)}</p><hr><p>Magnitude: ${earthquake.properties.mag}</p><p>Depth: ${depth} km</p>`);
  }

// Function to determine marker color based on depth.
function getColor(depth) {
  // Define color ranges based on depth.
  // You can customize this based on your preference.
  if (depth < 10) {
    return "#99ffcc"; // Depth <10
  } else if (depth < 30) {
    return "#99ff99"; // Depth >10 and <30
} else if (depth < 50) {
    return "#ccff99"; // Depth >30 and <50
} else if (depth < 70) {
    return "#ffff99"; // Depth >50 and <70
} else if (depth < 90) {
    return "#ffcc99"; // Depth >70 and <90
  } else {
    return "#ff9999"; // Depth >90
  }
}

 // Setting up the legend
 let legend = L.control({position: 'bottomright'});

 legend.onAdd = () => {
  let div = L.DomUtil.create('div', 'info legend legend-background'); // Add 'legend-background' class
  grades = [-10, 10, 30, 50, 70, 90];

// Add title to the legend
    div.innerHTML = '<strong>Color Ranges based on Depth (km) of Earthquake</strong><br>';

  // Looping through our intervals and generating a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};
 legend.addTo(myMap);
}; 

