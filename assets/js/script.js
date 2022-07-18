function pintar(element, color="green"){
    element.style.backgroundColor = color
    }
    let color = "yellow"
    ele = document.getElementById("ele1")
    ele.addEventListener("click", () => {
        pintar(ele, color)
    });