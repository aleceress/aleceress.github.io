
d3.csv("../traits_emotions.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var allEmotionsNames = ["love", "joy", "anger", "sadness", "surprise", "fear"],
        allTraitsNames = unpack(rows, "trait"),
        allLove = unpack(rows, 'love'),
        allJoy = unpack(rows, "joy"),
        allAnger = unpack(rows, "anger"),
        allSadness = unpack(rows, "sadness"),
        allSurprise = unpack(rows, "surprise"),
        allFear = unpack(rows, "fear"),


        currentLove = [],
        currentJoy = [],
        currentAnger = [],
        currentSadness = [],
        currentSurprise = [],
        currentFear = [],
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
        currentLove = []
        currentJoy = []
        currentAnger = []
        currentSadness = []
        currentSurprise = []
        currentFear = []
        traitIndexes = []

        getTraitIndexes(chosenTrait)

        currentLove.push(allLove[traitIndexes[0]])
        currentLove.push(allLove[traitIndexes[1]])
        currentJoy.push(allJoy[traitIndexes[0]])
        currentJoy.push(allJoy[traitIndexes[1]])
        currentAnger.push(allAnger[traitIndexes[0]])
        currentAnger.push(allAnger[traitIndexes[1]])
        currentSadness.push(allSadness[traitIndexes[0]])
        currentSadness.push(allSadness[traitIndexes[1]])
        currentSurprise.push(allSurprise[traitIndexes[0]])
        currentSurprise.push(allSurprise[traitIndexes[1]])
        currentFear.push(allFear[traitIndexes[0]])
        currentFear.push(allFear[traitIndexes[1]])

    }


    // Default Type Data
    setBarChart('I/E');


    function setBarChart(chosenTrait) {

        getTraitData(chosenTrait);

        var trace1 = {
            x: [currentLove[0], currentJoy[0], currentAnger[0], currentSadness[0], currentSurprise[0], currentFear[0]],
            y: allEmotionsNames,
            name: allTraitsNames[traitIndexes[0]],
            orientation: 'h',
            marker: {
                color: 'darkred   ',
                width: 1
            },
            type: 'bar'
        };

        var trace2 = {
            x: [currentLove[1], currentJoy[1], currentAnger[1], currentSadness[1], currentSurprise[1], currentFear[1]],
            y: allEmotionsNames,
            name: allTraitsNames[traitIndexes[1]],
            orientation: 'h',
            type: 'bar',
            marker: {
                color: 'lightseagreen',
                width: 1
            }
        };

        var data = [trace1, trace2];

        var layout = {
            title: chosenTrait.concat(" comparison"),
            barmode: 'group',
            margin: { b: 30 }
        };

        Plotly.newPlot('traitemotioncomp', data, layout);

    };

    var innerContainer = document.querySelector('[data-num="4"'),
        plotEl = innerContainer.querySelector('.plot4'),
        typeSelector = innerContainer.querySelector('.typedata4');



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

    trait_description_div = document.getElementById("trait-comp-description")

    var trait_description = {
        "I/E": `
                <br> <b> Anger:</b> odds ratio:  0.97 , p value:  3.53e-07, so <b>3.11</b> less probable to get a anger score if <b>E</b> <br>
                <br> <b> Fear:</b> odds ratio:  0.92 ,  p value:  2.84e-07, so <b>8.17%</b> less probable to get a fear score if <b>E</b> <br>
                <br> <b> Joy:</b> odds ratio:  1.15 ,  p value:  1.25e-95, so <b>15.18%</b> more probable to get a joy score if <b>E</b> <br>
                <br> <b> Love:</b> odds ratio:  1.11 ,  p value:  4.80e-8, so <b>10.73%</b> more probable to get a love  score if <b>E</b> <br>
                <br> <b> Sadness:</b> odds ratio: 0.84 ,  p value:  7.06e-81, so <b>15.15%</b> less probable to get a sadness  score if <b>E</b> <br>
                <br> <b> Surprise:</b> odds ratio: 1.06 ,  p value:  0, so <b>6.3%</b> more probable to get a surprise  score if <b>E</b> <br>
                `,
        "N/S": "ns",
        "F/T": "ft",
        "P/J": "pj"

    }

    trait_description_div.innerHTML = trait_description["I/E"]

    typeSelector.addEventListener('change', ()=> {
       trait_description_div.innerHTML = trait_description[typeSelector.value]
    })
});



