const currentMenuId = new URLSearchParams(window.location.search).get("menu");
const currentMenu = menus[currentMenuId];

// Tab tittle
document.title=currentMenu.nom;
// Image
document.querySelector("img").setAttribute("src", currentMenu.image);
// Menu name
document.querySelector("h2").innerHTML = currentMenu.nom;
// Dishes
append(currentMenu.entrees, "#entrees");
append(currentMenu.plats, "#plats");
append(currentMenu.desserts, "#desserts");


function append(array, anchor) {
    let temp = document.querySelector("#menu-template");

    array.forEach(entry => {
        let clone = temp.cloneNode(true);
        clone.removeAttribute('id');
        clone.querySelector(".item-text_title").innerHTML=entry.name;
        clone.querySelector(".item-text_desc").innerHTML=entry.desc;
        clone.querySelector(".item-price").innerHTML=entry.price;
        document.querySelector(anchor).appendChild(clone);
    })
}

function loadDefaultImage(element) {
    element.setAttribute("src","img/ohmyfood.png");
}