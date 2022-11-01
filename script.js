let tabMenusTag = document.getElementsByClassName("tabMenus")[0];
let ulTag = document.getElementsByClassName("ulTag")[0];
let sliderTag = document.getElementsByClassName("slider")[0];
let homeTag = document.getElementsByClassName("home")[0];
let servicesTag = document.getElementsByClassName("services")[0];
let aboutUsTag = document.getElementsByClassName("aboutUs")[0];
let contactUstag = document.getElementsByClassName("contactUs")[0];
let loginTag = document.getElementsByClassName("login")[0];

let tabs = ["home","services","about us","contact us","login"]

let handleTabChange = (event) => {
        let clickedTagId = event.target.id;
        // console.log(typeof clickedTagId); String
        let clickedLiTag = document.getElementById(clickedTagId);
        // console.log(clickedLiTag.id)
        switch(clickedLiTag.id){
            case "0" :
            homeTag.style.display = "block";
            servicesTag.style.display = "none";
            aboutUsTag.style.display = "none";
            contactUstag.style.display = "none";
            loginTag.style.display = "none";
            break;
            case "1":
            homeTag.style.display = "none";
            servicesTag.style.display = "block";
            aboutUsTag.style.display = "none";
            contactUstag.style.display = "none";
            loginTag.style.display = "none";
            break;
            case "2":
            homeTag.style.display = "none";
            servicesTag.style.display = "none";
            aboutUsTag.style.display = "block";
            contactUstag.style.display = "none";
            loginTag.style.display = "none";
            break;
            case "3":
            homeTag.style.display = "none";
            servicesTag.style.display = "none";
            aboutUsTag.style.display = "none";
            contactUstag.style.display = "block";
            loginTag.style.display = "none";
            break;
            case "4":
            homeTag.style.display = "none";
            servicesTag.style.display = "none";
            aboutUsTag.style.display = "none";
            contactUstag.style.display = "none";
            loginTag.style.display = "block";
            break;
            
        }

        let clickedLiTagWidth = clickedLiTag.offsetWidth ;
        let clickedLiTagOffsetLeft = clickedLiTag.offsetLeft ;
        sliderTag.style.width = clickedLiTagWidth + "px";
        sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
}

for(let i = 0 ; i < tabs.length ; i++){
    let liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click",handleTabChange)
    ulTag.append(liTag);
    if(i === 0){
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
}