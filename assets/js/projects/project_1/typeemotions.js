d3.csv("../types_emotions.csv", function(err, rows){
 
function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}
 
var allTypesNames = unpack(rows, 'type'),
    allLove = unpack(rows, 'love'),
    allJoy = unpack(rows, "joy"),
    allAnger = unpack(rows, "anger"),
    allSadness = unpack(rows, "sadness"),
    allSurprise = unpack(rows, "surprise"),
    allFear = unpack(rows, "fear"),
 
    listofTypes = [],
    currentType,
    currentLove,
    currentJoy,
    currentAnger,
    currentSadness,
    currentSurprise,
    currentFear;
 

 
for (var i = 0; i < allTypesNames.length; i++ ){
    if (listofTypes.indexOf(allTypesNames[i]) === -1 ){
        listofTypes.push(allTypesNames[i]);
    }
}
 

function getTypeData(chosenType) {

    for (var i = 0 ; i < allTypesNames.length ; i++){
        if ( allTypesNames[i] === chosenType ) {
            currentLove = allLove[i];
            currentJoy = allJoy[i];
            currentAnger = allAnger[i];
            currentSadness = allSadness[i];
            currentSurprise = allSurprise[i];
            currentFear = allFear[i]
        }
    }

};
 
// Default Type Data
setBarChart('infj');
 
function setBarChart(chosenType) {
    getTypeData(chosenType);
 
    var trace1 = {
        x: ["love", "joy", "anger", "sadness", "surprise", "fear"],
        y: [currentLove, currentJoy, currentAnger, currentSadness, currentSurprise, currentFear],
        name: "Type emotions",
        type: "bar",
        marker:{
            color: ['darkred', 'coral', 'gold', 'darkslateblue', 'lightseagreen', 'darkslategrey']
        }
    };
 
    var layout = {
                    title: chosenType.concat(" average emotions"), 
                    margin: {b: 25},
                };

    var data = [trace1]
 
    Plotly.newPlot('plotdiv', data, layout);
};
 
var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    typeSelector = innerContainer.querySelector('.typedata');
 

function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length;  i++) {
        var currentOption = document.createElement('option');
        currentOption.text = textArray[i];
        selector.appendChild(currentOption);
    }
}

 
assignOptions(listofTypes, typeSelector);
 
function updateType(){
    setBarChart(typeSelector.value);
}

 
typeSelector.addEventListener('change', updateType, false);
});

 

