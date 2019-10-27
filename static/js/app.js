// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select("#ufo-table");
var tableBody = table.select("tbody");
var filterButton = d3.select("#filter-btn");

var buttonSearchField = d3.select("#datetime");
// var seriesSearchField = d3.select("#seriesSearch");
var resetButton = d3.select("#resetAllButton")

var ufoData = data;

function createDefault() {
    ufoData.forEach(sighting => {
        row = tableBody.append("tr")
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);
    });
}
//createDefault();

resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

// seriesSearchField.on("keyup", () => {
//     var seriesToSearchFor = seriesSearchField.property("value");
//     if (seriesToSearchFor.length >= 3) {


//         tableBody.remove();
//         tableBody = table.append("tbody");

//         fighters.filter(f => f.series.toLowerCase().trim() == seriesToSearchFor.toLowerCase().trim())
//             .forEach(fighter => {
//                 row = tableBody.append("tr")
//                 row.append("td").text(sighting.datetime);
//                 row.append("td").text(sighting.city);
//                 row.append("td").text(sighting.state);
//                 row.append("td").text(sighting.country);
//                 row.append("td").text(sighting.shape);
//                 row.append("td").text(sighting.durationMinutes);
//                 row.append("td").text(sighting.comments);
//             });

//     }
// });

filterButton.on("click", () => {
    var dateToSearchFor = buttonSearchField.property("value");
    console.log(dateToSearchFor);
    tableBody.remove();
    tableBody = table.append("tbody");

    ufoData.filter(f => f.datetime.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())
        .forEach(sighting => {
            row = tableBody.append("tr")
            row.append("td").text(sighting.datetime);
            row.append("td").text(sighting.city);
            row.append("td").text(sighting.state);
            row.append("td").text(sighting.country);
            row.append("td").text(sighting.shape);
            row.append("td").text(sighting.durationMinutes);
            row.append("td").text(sighting.comments);
        });

})