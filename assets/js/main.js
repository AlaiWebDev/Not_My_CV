var x = window.matchMedia("(min-width: 980px)");
x.addListener(myFunction)
let variable = document.querySelectorAll(".arrow").forEach(function (elt) {
    
elt.parentNode.addEventListener("click", function () {
        
    if (x.matches) {return}else{
        if (elt.parentNode.nextElementSibling.style.display == "block") {
            
            elt.parentNode.nextElementSibling.style.display = "none";
        } else {
            elt.parentNode.nextElementSibling.style.display = "block";
            
        }
        elt.classList.toggle("arrow-top");
    }})
})
function myFunction(x){
    if (x.matches) {
        let toto = document.querySelectorAll(".sous").forEach(function (elt2){
            elt2.style.display = "block"})
}else {let toto = document.querySelectorAll(".sous").forEach(function (elt2){
    elt2.style.display = "none"})}
}

    