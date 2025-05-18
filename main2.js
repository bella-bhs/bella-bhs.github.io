let firstClick = null; 

function click (x, y) {
    if (firstClick===null){
        firstClick = {x: x, y: y }; 
    }
    else {
        if (firstClick.x === x) {
            firstClick.y.style.backgroundColor = '#8080F0'; 
            y.style.backgroundColor = "lightgreen"; 
        }
        else { 
            firstClick.y.style.backgroundColor = '#F08080'; 
            y.style.backgroundColor = "lightred"; 
        }
        firstClick = null; 
    }
}

  
