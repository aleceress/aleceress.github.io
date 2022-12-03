
  d3.csv("../types_emotions.csv", function(err, rows){
 
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
     
    var allEmotionsNames = ["love","joy","anger", "sadness", "surprise","fear"],
        allTypesNames = unpack(rows, "type"),
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

        for (var i = 0 ; i < allTypesNames.length ; i++){
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
            y: [allTypesNames[0]],
            name: allTypesNames[0],
            orientation: 'h',
            marker: {
              color: 'coral',
              width: 1
            },
            type: 'bar'
          };
          
          var trace2 = {
            x: [currentEmotions[1]],
            y: [allTypesNames[1]],
            name: allTypesNames[1],
            orientation: 'h',
            type: 'bar',
            marker: {
              color: 'crimson',
              width: 1
            }
            };
        
            var trace3 = {
                x: [currentEmotions[2]],
                y: [allTypesNames[2]],
                name: allTypesNames[2],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'navajowhite',
                width: 1
                }
            };
        
            var trace4 = {
                x: [currentEmotions[3]],
                y: [allTypesNames[3]],
                name: allTypesNames[3],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'olive',
                width: 1
                }
            };
        
            var trace5 = {
                x: [currentEmotions[4]],
                y: [allTypesNames[4]],
                name: allTypesNames[4],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'slategrey',
                width: 1
                }
            };
        
            var trace6 = {
                x: [currentEmotions[5]],
                y: [allTypesNames[5]],
                name: allTypesNames[5],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'teal',
                width: 1
                }
            };
        
            var trace7 = {
                x: [currentEmotions[6]],
                y: [allTypesNames[6]],
                name: allTypesNames[6],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'purple',
                width: 1
                }
            };
        
            var trace8 = {
                x: [currentEmotions[7]],
                y: [allTypesNames[7]],
                name: allTypesNames[7],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'violet',
                width: 1
                }
            };
        
            var trace9 = {
                x: [currentEmotions[8]],
                y: [allTypesNames[8]],
                name: allTypesNames[8],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'pink',
                width: 1
                }
            };
        
            var trace10 = {
                x: [currentEmotions[9]],
                y: [allTypesNames[9]],
                name: allTypesNames[9],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'mediumpurple',
                width: 1
                }
            };
        
            var trace11 = {
                x: [currentEmotions[10]],
                y: [allTypesNames[10]],
                name: allTypesNames[10],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'midnightblue',
                width: 1
                }
            };
        
            var trace12 = {
                x: [currentEmotions[11]],
                y: [allTypesNames[11]],
                name: allTypesNames[11],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'blue',
                width: 1
                }
            };
        
            var trace13 = {
                x: [currentEmotions[12]],
                y: [allTypesNames[12]],
                name: allTypesNames[12],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'cornflowerblue',
                width: 1
                }
            };
        
            var trace14 = {
                x: [currentEmotions[13]],
                y: [allTypesNames[13]],
                name: allTypesNames[13],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'darkturquoise',
                width: 1
                }
            };
        
            var trace15 = {
                x: [currentEmotions[14]],
                y: [allTypesNames[14]],
                name: allTypesNames[14],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'lightblue',
                width: 1
                }
            };
        
            var trace16 = {
                x: [currentEmotions[15]],
                y: [allTypesNames[15]],
                name: allTypesNames[15],
                orientation: 'h',
                type: 'bar',
                marker: {
                color: 'black',
                width: 1
                }
            };
          
          var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16];
          
          var layout = {
            title: chosenEmotion.concat(" comparison"),
            barmode: 'group'
          };
     
        Plotly.newPlot('plotemotioncomp', data, layout);
    };
     
    var innerContainer = document.querySelector('[data-num="2"'),
        plotEl = innerContainer.querySelector('.plot2'),
        typeSelector = innerContainer.querySelector('.typedata2');
     
    
    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }
    
     
    assignOptions(listofEmotions, typeSelector);
     
    function updateType(){
        setBarChart(typeSelector.value);
    }
     
    typeSelector.addEventListener('change', updateType, false);
    });
    
     
    
    