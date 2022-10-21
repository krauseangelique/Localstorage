// Ajout DYNAMIQUE d'une liste le MIEN

/* Variables globales */
// .addItems récupère le form
const addItems = document.querySelector(".add-items");
// plateList récupère  l'ul
const plateList = document.querySelector(".plates");
// 1. const items = []; au départ items est un tableau vide
// const items = addItems[0].value; > console.log(items); // Vérifier qu'on reçoit bien la valeur du premier input
const items = JSON.parse(localStorage.getItem("items")) || []; // on a pris la valeur et on a tapé les items dedans. Une des dernières étape du projet est l'objet JSON (JavaScript Object Notation)parse, une méthode liée à JSON.
// LocalStorage.getItem() permet d'accéder et de reprendre les valeurs précédemment enregistrées dans l'onglet Application de votre inspecteur.


// écriture de l'objet en JSON
const cat = {
    'name' : 'Lucky'
}

console.log(addItems); // Output: > form.add-items avec les deux inputs à l'indice 0 et 1.
console.log(addItems[0].value); // Output: > <input type="text" name="item" placeholder="Item Name" required />


// ajouter au form un addEventlistener
// 1. function handleAddItem() {} 
 // début de ma fonction
function handleAddItem(e) {

    e.preventDefault(); // empêche les reloads intempestifs
    //const item = document.querySelector(".name")// la valeur de l'item c'est son TEXTE

    const item = addItems[0].value; // (2) Vérifier si on récupère la bonne valeur, c'est à dire la valeur tapée dans l'input
    console.log(item);

    items.push(item); // On envoi dans notre tableau items[] les valeurs enregistrées(item) par l'utilisateur (3)

    // la fonction addItemList EST la fonction où la magie opère càd INJECTER le code JS dans l'HTML
    addItemList(items, plateList);
    // les clefs "items"
    // (6) le localStorage retourne 0 : premier item écrit par l'utilisateur

    // localStorage.setItem() permet d'initialiser les items. Elle prend deux paramètres : la clé ('items') et la valeur (JSON.stringify(items))
    localStorage.setItem("items", JSON.stringify(items));

    console.log(item);
    
}  // 1. Fin de ma fonction

// 1. addItems.addEventListener("submit", handleAddItem); 

//Injection js
// param est tapas
// Au départ nous n'avions pas de paramètre car nous souhaitions uniquement TESTER la fonction
// function addItemList(param) {
    // return `<li>${param}</li>`;
// }

    // obliger que le premier paramètre soit un tableau
    function addItemList(items = [], itemList) {
    
    // plateList.innerHTML = `<li>${param}</li>`; // l'objectif est de pouvoir écrire le code dans la liste au dessus des input

    // le résultat est que chaque nouvel élément s'afficher mais sur une seule ligne. Nous devons créer un li pour chaque nouvelle itération.

  // les items renvoyés le seront dans un tableau donc séparés par une virgule. Pour les séparer de façon différente on passera par la méthode join() en fin de cycle. Cette méthode ne prend qu'un paramètre, un séparateur repris entre guillemets. Dans ce cas-ci rien.

    //itemList.innerHTML = items.map(element, index);
    itemList.innerHTML = items
        .map((item, index) => { // (4) les items renvoyés le sont dans un tableau donc séparés par une virgule pour les séparer de façon différente on passera par join

        return `<li>${index + 1}. ${item}</li>`; // (5) pour renvoyer les infos  et +1 pour avoir le chiffre. avant l'item 
    })
    .join(""); // jointure entre les différents 'objets' item 

    }

// Création de l'eventListener qui attend un événement submit (repris dans notre cas-ci via l'input de type submit)

// Appel de la fonction
addItems.addEventListener("submit", handleAddItem);
// l'appel de cette fonction est lié à notre variable possèdant le getItems(). On l'appelle dans notre fonction handleAddItem et on l'appelle de façon classique pour afficher les données enregistrées dans notre localStorage.
// fin de ma fonction

addItemList(items, plateList);
// dans mon html j'envoi dans la liste ul li tapas et il faut l'injecter (l'ajouter) dans plate
// Dans mon HTML j'envoie donc un nouvel <li> dans la liste <ul> à chaque fois que je clique sur le bouton Add item.