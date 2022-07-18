let c1 = "";
let div1 = document.getElementById("color1")
let div2 = document.getElementById("color2")
let div3 = document.getElementById("color3")
let div4 = document.getElementById("color4")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    c1 = "green";
    } 
    else if (event.key === 's') {
    c1 = "orange";
    }
    else if (event.key === 'd') {
        c1 = "yellow";
    }
    pintar(div1,c1)
    pintar(div2,c1)
    pintar(div3,c1)
    pintar(div4,c1)
    })
   
    function pintar(element,color){
        element.addEventListener("click",() => {
            element.style.backgroundColor = color
    })}