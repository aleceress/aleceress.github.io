d3.csv("../types_sentiment.csv", function(err, rows){
 
function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}
 
var allTypesNames = unpack(rows, 'type'),
    allPositive = unpack(rows, 'POSITIVE'),
    allNegative= unpack(rows, "NEGATIVE"),
 
    listofTypes = [],
    currentPositive,
    currentNegative;
 

 
for (var i = 0; i < allTypesNames.length; i++ ){
    if (listofTypes.indexOf(allTypesNames[i]) === -1 ){
        listofTypes.push(allTypesNames[i]);
    }
}
 

function getTypeData(chosenType) {

    for (var i = 0 ; i < allTypesNames.length ; i++){
        if ( allTypesNames[i] === chosenType ) {
            currentPositive = allPositive[i];
            currentNegative = allNegative[i];
        }
    }

};
 
// Default Type Data
setPieChart('infj');
 
function setPieChart(chosenType) {
    getTypeData(chosenType);
 
    var trace1 = {
        values: [currentPositive, currentNegative],
        labels: ["Positive", "Negative"],
        name: "Type emotions",
        type: "pie",
        marker: {
            colors: ['darkred', 'darkslategrey']
        }
    };

    var data = [trace1]

    var layout = { title: chosenType.concat(" comparison")};
 
    Plotly.newPlot('plotsentimentdiv', data, layout);
};
 
var innerContainer = document.querySelector('[data-num="1"'),
    plotEl = innerContainer.querySelector('.plot'),
    typeSelector = innerContainer.querySelector('.typedata_s');
 

function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length;  i++) {
        var currentOption = document.createElement('option');
        currentOption.text = textArray[i];
        selector.appendChild(currentOption);
    }
}

 
assignOptions(listofTypes, typeSelector);
 
function updateType(){
    setPieChart(typeSelector.value);
}
 
typeSelector.addEventListener('change', updateType, false);
});



