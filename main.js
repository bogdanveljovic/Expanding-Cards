const panels = document.querySelectorAll(".panel")
const h3 = document.querySelectorAll("h3")
panels.forEach (panel => {
    panel.addEventListener ("click", (e) => {
        removeActiveClass()
        panel.classList.add("active");

        h3.forEach(element => {
            if(element.parentElement.classList.contains("active")) {
                element.style = "display:block";
            } else {
                element.style = "display:none"
            }
        })  
    })
    function removeActiveClass() {
        panels.forEach(panel => {
            panel.classList.remove("active");
        })
    }    
})

