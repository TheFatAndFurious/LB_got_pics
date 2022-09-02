let image = document.getElementById("background");
let prevScrollpos = window.pageYOffset; 

window.onscroll = (event)=>{
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos){
        document.querySelector("header").style.top = "0";
    } 
    if (prevScrollpos < currentScrollpos){
        document.querySelector("header").style.top = "-200px";
    }
    prevScrollpos = currentScrollpos;
    
}


let title = document.querySelector("span");
let list = ["talent", "pics", "whatuneed"];

setInterval(function(){
for (let i=0; i<list.length; i++){
    title.textContent = li
}
}
,200);

