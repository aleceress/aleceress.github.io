
d3.csv("../cognitivefunctions-sentiment.csv", function (err, rows) {

  function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
  }

  var allSentimentNames = ["positive", "negative"],
      allFunctionsNames = unpack(rows, "dominant-function"),
      allPositive = unpack(rows, 'POSITIVE'),
      allNegative = unpack(rows, "NEGATIVE"),
      listofSentiment = [];

  for (var i = 0; i < allSentimentNames.length; i++ ){
    if (listofSentiment.indexOf(allSentimentNames[i]) === -1 ){
        listofSentiment.push(allSentimentNames[i]);
    }
  }
     

  function getSentimentData(chosenSentiment) {
      
      currentSentiment = []

      for (var i = 0 ; i < allFunctionsNames.length ; i++){
        if (chosenSentiment === "positive") {
            currentSentiment.push(allPositive[i])
        } else if (chosenSentiment === "negative") {
            currentSentiment.push(allNegative[i])
        }
    }
  }


  // Default Type Data
  setBarChart('positive');

   
    function setBarChart(chosenSentiment) {
        getSentimentData(chosenSentiment);
     
        var trace1 = {
            x: [currentSentiment[0]],
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
            x: [currentSentiment[1]],
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
                x: [currentSentiment[2]],
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
                x: [currentSentiment[3]],
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
                x: [currentSentiment[4]],
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
                x: [currentSentiment[5]],
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
                x: [currentSentiment[6]],
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
                x: [currentSentiment[7]],
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
            title: chosenSentiment.concat(" percentage comparison"),
            barmode: 'group',
            margin: {b: 30}
          };
     
        Plotly.newPlot('functionsentimentcomp', data, layout);
    };


  var innerContainer = document.querySelector('[data-num="7"'),
      plotEl = innerContainer.querySelector('.plot7'),
      typeSelector = innerContainer.querySelector('.typedata7');



  function assignOptions(textArray, selector) {
      for (var i = 0; i < textArray.length; i++) {
          var currentOption = document.createElement('option');
          currentOption.text = textArray[i];
          selector.appendChild(currentOption);
      }
  }


  assignOptions(["positive", "negative"], typeSelector);

  function updateType() {
      setBarChart(typeSelector.value);
  }

  typeSelector.addEventListener('change', updateType, false);
});



