// Ajout DYNAMIQUE d'une liste 

const addItems = document.querySelector(".add-items");//(1)ajout d'une variable pour le form
const plateList = document.querySelector(".plates");
// 1. const items = []; au départ items est vide
// const items = addItems[0].value;
const items = JSON.parse(localStorage.getItem("items")) || []; // on a pris la valeur et on a tapé les items dedans

// écriture de l'objet en JSON
const cat = {
    'name' : 'Lucky'
}

console.log(addItems); //
console.log(addItems[0].value); 



// ajouter au form un addEventlistener
// 1. function handleAddItem() {}  // début de ma fonction

// 1. addItems.addEventListener("submit", handleAddItem); // fin de ma fonction

function handleAddItem(e) {
    e.preventDefault(); // empêche les reload intempestif
    //const item = document.querySelector(".name")// la valeur de l'item c'est son TEXTE
    const item = addItems[0].value; // (2) Vérifier si on récupère la bonne valeur
    console.log();
    items.push(item); // (3)les items qui ont été enregistrés par l'utilisateur dans l'array
    addItemList(items, plateList);
    // les clefs "items"
    // (6) le localStorage retourne 0 : premier item écrit par l'utilisateur
    localStorage.setItem("items", JSON.stringify(items));
    console.log(item);
    
}  // 1. début de ma fonction

//injection js
// param est tapas 
// function addItemList(param) {
    // obliger que le premier paramètre soit un tableau
    function addItemList(items = [], itemList) {

    // return `<li>${param}</li>`;
    // plateList.innerHTML = `<li>${param}</li>`; // l'objectif est de pouvoir écrire le code dans la liste au dessus des input
    //itemList.innerHTML = items.map(element, index);
itemList.innerHTML = items
.map((item, index) => { // (4) les items renvoyés le sont dans un tableau donc séparés par une virgule pour les séparer de façon différente on passera par join
    return `<li>${index + 1}. ${item}</li>`; // (5) pour renvoyer les infos  et +1 pour avoir le chiffre avant l'item 
})
.join(""); // jointure entre les différents 'objets' item 


}

// Appel de la fonction
addItems.addEventListener("submit", handleAddItem); // fin de ma fonction
addItemList(items, plateList);

// dans mon html j'envoi dans la liste ul li tapas et il faut l'injecter (l'ajouter) dans plate