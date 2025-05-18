let firstClick = null; 

function click (x, y) {
    if (firstClick===null){
        firstClick = {x: x, y: y }; 
    }
    else {
        if (firstClick.x === x) {
            firstClick.y.style.backgroundColor = "lightgreen"; 
            y.style.backgroundColor = "lightgreen"; 
        }
        else { 
            firstClick.y.style.backgroundColor = "lightred"; 
            y.style.backgroundColor = "lightred"; 
        }
        firstClick = null; 
    }
}

  
