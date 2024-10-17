const nflTeams = [
    {
      "team": "Arizona Cardinals",
      "stadium": "State Farm Stadium",
      "coordinates": {
        "latitude": 33.5276,
        "longitude": -112.2626
      },
      "address": "1 Cardinals Drive, Glendale, AZ 85305"
    },
    {
      "team": "Atlanta Falcons",
      "stadium": "Mercedes-Benz Stadium",
      "coordinates": {
        "latitude": 33.7555,
        "longitude": -84.4008
      },
      "address": "1 AMB Drive NW, Atlanta, GA 30313"
    },
    {
      "team": "Baltimore Ravens",
      "stadium": "M&T Bank Stadium",
      "coordinates": {
        "latitude": 39.2780,
        "longitude": -76.6227
      },
      "address": "1101 Russell Street, Baltimore, MD 21230"
    },
    {
      "team": "Buffalo Bills",
      "stadium": "Highmark Stadium",
      "coordinates": {
        "latitude": 42.7738,
        "longitude": -78.7868
      },
      "address": "1 Bills Drive, Orchard Park, NY 14127"
    },
    {
      "team": "Carolina Panthers",
      "stadium": "Bank of America Stadium",
      "coordinates": {
        "latitude": 35.2251,
        "longitude": -80.8530
      },
      "address": "800 South Mint Street, Charlotte, NC 28202"
    },
    {
      "team": "Chicago Bears",
      "stadium": "Soldier Field",
      "coordinates": {
        "latitude": 41.8623,
        "longitude": -87.6167
      },
      "address": "1410 S Museum Campus Drive, Chicago, IL 60605"
    },
    {
      "team": "Cincinnati Bengals",
      "stadium": "Paycor Stadium",
      "coordinates": {
        "latitude": 39.0954,
        "longitude": -84.5160
      },
      "address": "1 Paul Brown Stadium, Cincinnati, OH 45202"
    },
    {
      "team": "Cleveland Browns",
      "stadium": "Cleveland Browns Stadium",
      "coordinates": {
        "latitude": 41.5061,
        "longitude": -81.6995
      },
      "address": "100 Alfred Lerner Way, Cleveland, OH 44114"
    },
    {
      "team": "Dallas Cowboys",
      "stadium": "AT&T Stadium",
      "coordinates": {
        "latitude": 32.7473,
        "longitude": -97.0945
      },
      "address": "1 AT&T Way, Arlington, TX 76011"
    },
    {
      "team": "Denver Broncos",
      "stadium": "Empower Field at Mile High",
      "coordinates": {
        "latitude": 39.7439,
        "longitude": -105.0201
      },
      "address": "1701 Bryant Street, Denver, CO 80204"
    },
    {
      "team": "Detroit Lions",
      "stadium": "Ford Field",
      "coordinates": {
        "latitude": 42.3400,
        "longitude": -83.0456
      },
      "address": "2000 Brush Street, Detroit, MI 48226"
    },
    {
      "team": "Green Bay Packers",
      "stadium": "Lambeau Field",
      "coordinates": {
        "latitude": 44.5013,
        "longitude": -88.0622
      },
      "address": "1265 Lombardi Avenue, Green Bay, WI 54304"
    },
    {
      "team": "Houston Texans",
      "stadium": "NRG Stadium",
      "coordinates": {
        "latitude": 29.6847,
        "longitude": -95.4107
      },
      "address": "NRG Parkway, Houston, TX 77054"
    },
    {
      "team": "Indianapolis Colts",
      "stadium": "Lucas Oil Stadium",
      "coordinates": {
        "latitude": 39.7601,
        "longitude": -86.1639
      },
      "address": "500 South Capitol Avenue, Indianapolis, IN 46225"
    },
    {
      "team": "Jacksonville Jaguars",
      "stadium": "TIAA Bank Field",
      "coordinates": {
        "latitude": 30.3240,
        "longitude": -81.6375
      },
      "address": "1 TIAA Bank Field Drive, Jacksonville, FL 32202"
    },
    {
      "team": "Kansas City Chiefs",
      "stadium": "Arrowhead Stadium",
      "coordinates": {
        "latitude": 39.0490,
        "longitude": -94.4839
      },
      "address": "1 Arrowhead Drive, Kansas City, MO 64129"
    },
    {
      "team": "Las Vegas Raiders",
      "stadium": "Allegiant Stadium",
      "coordinates": {
        "latitude": 36.0909,
        "longitude": -115.1830
      },
      "address": "3333 Al Davis Way, Las Vegas, NV 89118"
    },
    {
      "team": "Los Angeles Chargers",
      "stadium": "SoFi Stadium",
      "coordinates": {
        "latitude": 33.9535,
        "longitude": -118.3392
      },
      "address": "1001 Stadium Drive, Inglewood, CA 90301"
    },
    {
      "team": "Los Angeles Rams",
      "stadium": "SoFi Stadium",
      "coordinates": {
        "latitude": 33.9535,
        "longitude": -118.3392
      },
      "address": "1001 Stadium Drive, Inglewood, CA 90301"
    },
    {
      "team": "Miami Dolphins",
      "stadium": "Hard Rock Stadium",
      "coordinates": {
        "latitude": 25.9580,
        "longitude": -80.2389
      },
      "address": "347 Don Shula Drive, Miami Gardens, FL 33056"
    },
    {
      "team": "Minnesota Vikings",
      "stadium": "U.S. Bank Stadium",
      "coordinates": {
        "latitude": 44.9738,
        "longitude": -93.2575
      },
      "address": "401 Chicago Avenue, Minneapolis, MN 55415"
    },
    {
      "team": "New England Patriots",
      "stadium": "Gillette Stadium",
      "coordinates": {
        "latitude": 42.0909,
        "longitude": -71.2643
      },
      "address": "1 Patriot Place, Foxborough, MA 02035"
    },
    {
      "team": "New Orleans Saints",
      "stadium": "Caesars Superdome",
      "coordinates": {
        "latitude": 29.9511,
        "longitude": -90.0812
      },
      "address": "1500 Sugar Bowl Drive, New Orleans, LA 70112"
    },
    {
      "team": "New York Giants",
      "stadium": "MetLife Stadium",
      "coordinates": {
        "latitude": 40.8135,
        "longitude": -74.0745
      },
      "address": "1 MetLife Stadium Drive, East Rutherford, NJ 07073"
    },
    {
      "team": "New York Jets",
      "stadium": "MetLife Stadium",
      "coordinates": {
        "latitude": 40.8135,
        "longitude": -74.0745
      },
      "address": "1 MetLife Stadium Drive, East Rutherford, NJ 07073"
    },
    {
      "team": "Philadelphia Eagles",
      "stadium": "Lincoln Financial Field",
      "coordinates": {
        "latitude": 39.9008,
        "longitude": -75.1675
      },
      "address": "1 Lincoln Financial Field Way, Philadelphia, PA 19148"
    },
    {
      "team": "Pittsburgh Steelers",
      "stadium": "Acrisure Stadium",
      "coordinates": {
        "latitude": 40.4467,
        "longitude": -80.0158
      },
      "address": "100 Art Rooney Avenue, Pittsburgh, PA 15212"
    },
    {
      "team": "San Francisco 49ers",
      "stadium": "Levi's Stadium",
      "coordinates": {
        "latitude": 37.4030,
        "longitude": -121.9702
      },
      "address": "4900 Marie P. DeBartolo Way, Santa Clara, CA 95054"
    },
    {
      "team": "Seattle Seahawks",
      "stadium": "Lumen Field",
      "coordinates": {
        "latitude": 47.5952,
        "longitude": -122.3316
      },
      "address": "800 Occidental Avenue South, Seattle, WA 98134"
    },
    {
      "team": "Tampa Bay Buccaneers",
      "stadium": "Raymond James Stadium",
      "coordinates": {
        "latitude": 27.9759,
        "longitude": -82.5033
      },
      "address": "4201 North Dale Mabry Highway, Tampa, FL 33607"
    },
    {
      "team": "Tennessee Titans",
      "stadium": "Nissan Stadium",
      "coordinates": {
        "latitude": 36.1665,
        "longitude": -86.7713
      },
      "address": "1 Titans Way, Nashville, TN 37213"
    },
    {
      "team": "Washington Commanders",
      "stadium": "FedExField",
      "coordinates": {
        "latitude": 38.9078,
        "longitude": -76.8645
      },
      "address": "1600 FedEx Way, Landover, MD 20785"
    }
  ];

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) { // Haversine Formula
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c * 0.621371; // Distance in miles
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const teamName = document.getElementById("teams").value;
    const address = document.getElementById("address").value;

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

    let lat = 0.0; // Use let
    let long = 0.0; // Use let

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                lat = parseFloat(data[0].lat); // Get latitude as a float
                long = parseFloat(data[0].lon); // Get longitude as a float
            } else {
                console.log('No results found');
                return; // Exit if no results found
            }

            const distances = []; // Initialize distances as an array

            nflTeams.forEach(team => {
                const distance = getDistanceFromLatLonInKm(lat, long, team.coordinates.latitude, team.coordinates.longitude);
                distances.push([team.team, distance]); // Push the calculated distance
                // console.log(`${team.team}: ${distance.toFixed(2)} miles`);
            });

            const near_stadiums = [];

            for(i = 0; i < 32; i++){
                console.log(distances[i]);
                if(distances[i][1] <= 150){
                    console.log(distances[i][0]);
                    near_stadiums.push(distances[i][0]);
                }
            }

            // Display the collected data (you can replace this with any action)
            // alert(`Team: ${teamName}\nAddress: ${address}\nDistances: ${distances.join(", ")}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Select the form and add a submit event listener
    const form = document.getElementById("info");
    form.addEventListener("submit", handleFormSubmit);
});
