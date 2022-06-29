let nav = document.querySelector("nav");
let navAnchor = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);
    if(window.pageYOffset != 0){
        nav.style.backgroundColor = "rgba(220,220,220,0.9)";
        navAnchor.forEach(a => {
            a.style.color = "black";
        });        
    }
    else{
        nav.style.backgroundColor = "";
        navAnchor.forEach(a => {
            a.style.color = "";
        });
    }
})