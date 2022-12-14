
d3.csv("../traits_sentiment.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var allSentimentNames = ["POSITIVE", "NEGATIVE"],
        allTraitsNames = unpack(rows, "trait"),
        allPositive = unpack(rows, 'POSITIVE'),
        allNegative = unpack(rows, "NEGATIVE"),
        allSentiment = [],
 
        currentPositive = [],
        currentNegative = [],
        traitIndexes = [];


    function getTraitIndexes(chosenTrait) {
        traitIndexes = []

        if (chosenTrait == "I/E") {
            traitIndexes.push(0)
            traitIndexes.push(1)
        } else if (chosenTrait == "N/S") {
            traitIndexes.push(2)
            traitIndexes.push(3)
        } else if (chosenTrait == "F/T") {
            traitIndexes.push(4)
            traitIndexes.push(5)
        } else if (chosenTrait == "P/J") {
            traitIndexes.push(6)
            traitIndexes.push(7)
        }
    }

    function getTraitData(chosenTrait) {
        
        currentPositive = []
        currentNegative = []

        getTraitIndexes(chosenTrait)

        currentPositive.push(allPositive[traitIndexes[0]])
        currentPositive.push(allPositive[traitIndexes[1]])

        currentNegative.push(allNegative[traitIndexes[0]])
        currentNegative.push(allNegative [traitIndexes[1]])
    }


    // Default Type Data
    setBarChart('I/E');


    function setBarChart(chosenTrait) {

        getTraitData(chosenTrait);

        var trace1 = {
            y : [currentPositive[0], currentNegative[0]],
            x: allSentimentNames,
            name: allTraitsNames[traitIndexes[0]],
            orientation: 'v',
            marker: {
                color: '#00008b',
                width: 1
            },
            type: 'bar',
        };

        var trace2 = {
            y: [currentPositive[1], currentNegative[1]],
            x: allSentimentNames,
            name: allTraitsNames[traitIndexes[1]],
            orientation: 'v',
            type: 'bar',
            marker: {
                color: '#734fe3',
                width: 1
            },
        };

        var data = [trace1, trace2];

        var layout = {
            title: chosenTrait.concat(" sentiment percentage comparison"),
            barmode: 'group',
            margin: { b: 60},
        };

        Plotly.newPlot('traitsentimentcomp', data, layout);

    };

    var innerContainer = document.querySelector('[data-num="5"'),
        plotEl = innerContainer.querySelector('.plot5'),
        typeSelector = innerContainer.querySelector('.typedata5');



    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }


    assignOptions(["I/E", "N/S", "F/T", "P/J"], typeSelector);

    function updateType() {
        setBarChart(typeSelector.value);
    }

    typeSelector.addEventListener('change', updateType, false);

    trait_description_div = document.getElementById("trait-sentiment-description")

    var trait_description = {
        "I/E": `
                <br> <b> chi squared </b> 0 with <b> p value </b> 1 <br>
                <br> non significant relationship between introversion and sentiment <br>
                `,
        "N/S": `
                <br> <b> chi squared </b> 16.18 with <b> p value </b> 0.002 <br>
                <br> <b> odds ratio </b>  0.96  with <b> p value </b>  5.77e-05, so <b>3.56%</b> less probable to get a negative score if <b>N</b> <br>
                `,
        "F/T": `
                <br> <b> chi squared </b> 5271.12 with <b> p value </b>  0  <br>
                <br> <b> odds ratio </b>  0.67  with <b> p value </b>  0, so <b>32.53% </b> less probable to get a negative score if <b>F</b> <br>
                `,
        "P/J": `
                <br> <b> chi squared </b> 9201.44 with <b> p value </b> 0  <br>
                <br> <b> odds ratio </b>  1.75  with <b> p value </b>  0, so <b>75.54% </b> more probable to get a negative score if <b>J</b> <br>
                `

    }

    trait_description_div.innerHTML = trait_description["I/E"]

    typeSelector.addEventListener('change', ()=> {
       trait_description_div.innerHTML = trait_description[typeSelector.value]
    })
});



