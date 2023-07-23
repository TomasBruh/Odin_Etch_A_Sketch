generateNewCanvas(16);

function hoverOverDiv(e) {
    let hoveredDivBackgroundColor = e.target.style.backgroundColor;
    if(hoveredDivBackgroundColor == "")
    {
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } 
    else
    {
        hoveredDivBackgroundColor = hoveredDivBackgroundColor.substring(4);
        hoveredDivBackgroundColor = hoveredDivBackgroundColor.substring(0, hoveredDivBackgroundColor.length - 1);
        rgb = hoveredDivBackgroundColor.split(', ');
        for(let i = 0; i  < 3; i++)
        {
            rgb[i] = Math.random() * (rgb[i] - 26);
        }
        console.log(rgb);
        e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }
}

sizeButton = document.querySelector(".sketchSizeButton");
sizeButton.addEventListener('click', determineNewSize);

function determineNewSize() {
    let newSize = prompt("What size now?");
    if(isNaN(newSize))
    {
        alert("Given value is not a numeber");
        return;
    }
    if(newSize > 100)
    {
        alert("Don't try to crash the page!")
        return;
    }
    if(newSize < 1)
    {
        generateNewCanvas(0);
    }
    generateNewCanvas(newSize);
}

function generateNewCanvas (size) {
    const containerDiv = document.querySelector(".container");
    const previousDivs = document.querySelectorAll('.container > div');
    previousDivs.forEach(previousDiv => {
        containerDiv.removeChild(previousDiv)
    });
    const divSize = containerDiv.clientWidth / size;
    for (let column = 0; column < size; column++) {
        for (let row = 0; row < size; row++) {
            const div = document.createElement('div');
            
            div.classList.add('squareDiv')
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;
            
            div.addEventListener('mouseover', hoverOverDiv);
            containerDiv.appendChild(div);
        }
    }
}