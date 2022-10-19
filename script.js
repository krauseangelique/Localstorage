// Ajout DYNAMIQUE d'une liste 

const addItems = document.querySelector(".add-items");
const plateList = document.querySelector(".plates");
const items = [];
console.log(addItems); //
console.log(addItems[0].value); 



// ajouter au form un addEventlistener
// 1. function handleAddItem() {}  // début de ma fonction

// 1. addItems.addEventListener("submit", handleAddItem); // fin de ma fonction

function handleAddItem(e) {
    e.preventDefault(); // empêche les relod intempestif
    //const item = document.querySelector(".name")// la valeur de l'item c'est son TEXTE
    const item = addItems[0].value;
    console.log();
    items.push(item);
    addItemList(items, plateList);
    localStorage.setItem("items", JSON.stringify(items));
    console.log(item);
    
}  // 1. début de ma fonction

//injection js
// param est tapas 
// function addItemList(param) {
    function addItemList(items = [], itemList) {

    // return `<li>${param}</li>`;
    // plateList.innerHTML = `<li>${param}</li>`; // l'objectif est de pouvoir écrire le code dans la liste au dessus des input
    //itemList.innerHTML = items.map(element, index);
itemList.innerHTML = items
.map((item, index) => {
    return `<li>${index + 1}. ${item}</li>`;
})
.join("");


}

// Appel de la fonction
addItems.addEventListener("submit", handleAddItem); // fin de ma fonction

// dans mon html j'envoi dans la liste ul li tapas et il faut l'injecter (l'ajouter) dans plate