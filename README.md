# USGS Earthquake Data Visualization - Leaflet Challenge 

## Overview

This project aims to visualize earthquake data collected by the United States Geological Survey (USGS) using a web-based interactive map. The map will display earthquake locations worldwide and provide additional information about each event when clicked. The visualization will help educate the public and government organizations about seismic activity and its impact on our planet.

## Background

The United States Geological Survey (USGS) is a scientific agency responsible for gathering data on natural hazards, ecosystem health, climate change, and land-use effects. To improve public awareness and secure funding, the USGS wants to develop a set of tools for visualizing earthquake data effectively.

## Instructions

### Part 1: Create the Earthquake Visualization

#### Get the Dataset

To visualize the earthquake data, we will use the USGS GeoJSON Feed. The dataset is available in JSON format, which is updated every 5 minutes. To access the data, follow these steps:

1. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.
2. Choose a dataset to visualize (e.g., "All Earthquakes from the Past 7 Days").
3. Obtain the JSON representation of the selected dataset by clicking on the link provided.

#### Import and Visualize the Data

We will use Leaflet, a JavaScript library for interactive maps, to create the earthquake visualization. Follow these steps to complete the visualization:

1. Use the URL of the JSON data to pull in the earthquake dataset.
2. Create a map with Leaflet and plot all the earthquakes on the map based on their longitude and latitude.
3. Represent the magnitude of each earthquake with markers of varying sizes.
4. Display the depth of the earthquake using different colors for the markers.
5. Add popups to provide additional information about each earthquake when a marker is clicked.
6. Create a legend that explains the relationship between marker size and magnitude and marker color and depth.
7. The resulting visualization should resemble the provided map example.

### Part 2: Gather and Plot More Data (Optional)

In this optional part, you can challenge yourself by adding a second dataset to the map to illustrate the relationship between tectonic plates and seismic activity. To do this:

1. Access the data on tectonic plates from [GitHub Repository Link].
2. Import and visualize the tectonic plates dataset alongside the original earthquake data on the map.
3. Provide options to toggle the earthquake data and tectonic plates data independently using layer controls.

