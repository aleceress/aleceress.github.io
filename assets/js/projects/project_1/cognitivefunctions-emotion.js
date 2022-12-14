
  d3.csv("../cognitivefunctions-emotion.csv", function(err, rows){
 
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
     
    var allEmotionsNames = ["love","joy","anger", "sadness", "surprise","fear"],
        allFunctionsNames = unpack(rows, "dominant-function"),
        allLove = unpack(rows, 'love'),
        allJoy = unpack(rows, "joy"),
        allAnger = unpack(rows, "anger"),
        allSadness = unpack(rows, "sadness"),
        allSurprise = unpack(rows, "surprise"),
        allFear = unpack(rows, "fear"),
        listofEmotions = [],
        currentEmotions = [];
     
    
     
    for (var i = 0; i < allEmotionsNames.length; i++ ){
        if (listofEmotions.indexOf(allEmotionsNames[i]) === -1 ){
            listofEmotions.push(allEmotionsNames[i]);
        }
    }
     
    
    function getEmotionData(chosenEmotion) {
        currentEmotions = []

        for (var i = 0 ; i < allFunctionsNames.length ; i++){
            if (chosenEmotion === "love") {
                currentEmotions.push(allLove[i])
            } else if (chosenEmotion === "anger") {
                currentEmotions.push(allAnger[i])
            } else if (chosenEmotion === "joy") {
                currentEmotions.push(allJoy[i])
            } else if (chosenEmotion == "surprise") {
                currentEmotions.push(allSurprise[i])
            } else if (chosenEmotion == "sadness") {
                currentEmotions.push(allSadness[i])
            } else if (chosenEmotion == "fear") {
                currentEmotions.push(allFear[i])
            }
        }
        
    
    };
     
    // Default Type Data
    setBarChart('love');
     
    function setBarChart(chosenEmotion) {
        getEmotionData(chosenEmotion);


        var trace1 = {
            x: [currentEmotions[0]],
            y: [allFunctionsNames[0]],
            name: allFunctionsNames[0],
            orientation: 'h',
            marker: {
              color: 'coral',
              width: 1
            },
            type: 'bar'
          };
          
          var trace2 = {
            x: [currentEmotions[1]],
            y: [allFunctionsNames[1]],
            name: allFunctionsNames[1],
            orientation: 'h',
            type: 'bar',
            marker: {
              color: 'crimson',
              width: 1
            }
            };
        
            var trace3 = {
                x: [currentEmotions[2]],
                y: [allFunctionsNames[2]],
                name: allFunctionsNames[2],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'navajowhite',
                width: 1
                }
            };
        
            var trace4 = {
                x: [currentEmotions[3]],
                y: [allFunctionsNames[3]],
                name: allFunctionsNames[3],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'olive',
                width: 1
                }
            };
        
            var trace5 = {
                x: [currentEmotions[4]],
                y: [allFunctionsNames[4]],
                name: allFunctionsNames[4],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'slategrey',
                width: 1
                }
            };
        
            var trace6 = {
                x: [currentEmotions[5]],
                y: [allFunctionsNames[5]],
                name: allFunctionsNames[5],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'teal',
                width: 1
                }
            };
        
            var trace7 = {
                x: [currentEmotions[6]],
                y: [allFunctionsNames[6]],
                name: allFunctionsNames[6],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'purple',
                width: 1
                }
            };
        
            var trace8 = {
                x: [currentEmotions[7]],
                y: [allFunctionsNames[7]],
                name: allFunctionsNames[7],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'violet',
                width: 1
                }
            };
          
          var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

          
          var layout = {
            title: chosenEmotion.concat(" average comparison"),
            barmode: 'group',
            margin: {b: 30}
          };

           
          Plotly.newPlot('functionsemotioncomp', data, layout);
    };
     
    var innerContainer = document.querySelector('[data-num="6"'),
        plotEl = innerContainer.querySelector('.plot6'),
        typeSelector = innerContainer.querySelector('.typedata6');
     
    

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofEmotions, typeSelector);
    
    typeSelector.addEventListener('change', updateType, false)

    function updateType() {
        setBarChart(typeSelector.value);
    }
     

    });
    
     
    
    