// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
data.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Clear out the current table and refresh with new filtered data
    tbody.html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    var inputDuration = d3.select("duration").property("value");
    var inputComments = d3.select("comments").property("value");

    // console.log(inputValue);

    function filterUFO(sighting) {
        if (inputDate != "") {
            return sighting.datetime === inputDate 
            && sighting.city===inputCity 
            && sighting.state ===inputState && sighting.country===sightingCountry
            && sighting.shape===inputShape && sightingDuration===inputDuration && sightingcomments===inputComments                
        }
    }
    
    var filteredDate = tableData.filter(filterUFO);
    console.log("filteredDate: ", filteredDate)
    filteredDate.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });

    });

});

