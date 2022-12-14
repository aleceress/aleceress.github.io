var trace1 = { 
            x: [-3.20192803,-3.25663478], 
            y: [3.0749664,-0.75155023],
            text: ["INFJ", "INTJ"],
            mode: "text+markers",
            textposition: "right",
            type: "scatter",
            marker: {
                        size: 20,
                        color: "rgba(0,100,0, 0.6)"
                    }


};

var trace2 = { 
    x: [4.24251365], 
    y: [1.46330914],
    text: ["INFP"],
    mode: "text+markers",
    textposition: "right",
    type: "scatter",
    marker: {
                size: 20,
                color: "rgba(128,0,128, 0.6)"
            }


};

var trace3 = { 
    x: [-0.9227703, 0.89239823, -0.57866615, -0.92554099, -0.59603527, 2.29549714, 0.12338303], 
    y: [-2.55056058, 0.16373354, -1.65491658, -1.16273203, -0.35358265, -2.00085392, -1.10072917],
    text: ["ENTJ", "INTP", "ENTP", "ISTJ", "ISTP", "ESTJ", "ESTP"],
    mode: "text+markers",
    textposition: ["left", "right", "left", "right", "right", "left", "right"],
    type: "scatter",
    marker: {
                size: 20,
                color: "rgba(246,190,0, 0.6)"
            }


};

var trace4 = { 
    x: [0.03487774, 0.08011975, 0.2730135, 0.55501768, 0.84568977, 0.13906504], 
    y: [1.64978418, 1.34975315, 1.12445397, 0.35238429, 0.63868401, -0.24214351],
    text: ["ENFP", "ENFJ", "ISFJ", "ISFP", "ESFJ", "ESFP"],
    mode: "text+markers",
    textposition: ["left", "left", "right", "left", "right", "right"],
    type: "scatter",
    marker: {
                size: 20,
                color: "rgba(0, 0, 139, 0.6)"
            }


};


data = [trace1, trace2, trace3, trace4]

layout = {
            showlegend: false,
            xaxis: {
                title: "PCA1"
            },
            yaxis: {
                title: "PCA2"
            }
        };

Plotly.newPlot('clustering', data, layout);
