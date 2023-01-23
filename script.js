let root = document.querySelector(':root');

const colourArray = ["#F39C12", "#2ECC71", "#9B59B6", "#3498DB", "#E74C3C"];
let colourIndex = 0;

function changeColour(){
    if(colourIndex >= colourArray.length)
        colourIndex = 0;

    root.style.setProperty('--primary', colourArray[colourIndex]);
    console.log("current hex: " + colourIndex);
    colourIndex++;
};

