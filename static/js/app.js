// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select("#ufo-table");
var tableBody = table.select("tbody");
var filterButton = d3.select("#filter-btn");
var menuOptions = d3.select("#menuoptions");
var buttonSearchField = d3.select("#datetime");
// var seriesSearchField = d3.select("#seriesSearch");
var showAllButton = d3.select("#showAll-btn");
var clearButton = d3.select("#clear-btn");

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

showAllButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

clearButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
});

menuOptions.on("change", () => {
    var menuOption = menuOptions.node().value;
    var dateToSearchFor = buttonSearchField.property("value");
    console.log(menuOption, dateToSearchFor)
})

filterButton.on("click", () => {
    var dateToSearchFor = buttonSearchField.property("value");
    var menuOption = menuOptions.node().value

    if (menuOption === "Date") {
        tableBody.remove();
        tableBody = table.append("tbody");
        console.log(menuOption, dateToSearchFor)

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
    }
    else if (menuOption === "City") {
        tableBody.remove();
        tableBody = table.append("tbody");
        console.log(menuOption, dateToSearchFor)

        ufoData.filter(f => f.city.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())
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
    }
    else if (menuOption === "State") {
        tableBody.remove();
        tableBody = table.append("tbody");
        console.log(menuOption, dateToSearchFor)

        ufoData.filter(f => f.state.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())
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
    }
    else if (menuOption === "Country") {
        tableBody.remove();
        tableBody = table.append("tbody");
        console.log(menuOption, dateToSearchFor)

        ufoData.filter(f => f.country.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())
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
    }
    else if (menuOption === "Shape") {
        tableBody.remove();
        tableBody = table.append("tbody");
        console.log(menuOption, dateToSearchFor)

        ufoData.filter(f => f.shape.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())
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
    }

})