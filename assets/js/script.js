//liste des chanson avec le titre, son fichier audio et l image qui l acompagne
listeChanson=[
['Queen - Bohemian Rhapsody','Bohemian Rhapsody.flac','queen.jpg'],
["Johnny Hallyday - Allumer le feu","100 - Johnny Hallyday - Allumer le feu.mp3","johnny.jpg"],
["Alain Souchon - Foule sentimentale","alain-souchon-foule-sentimentale.mp3","AlainSouchon.jpg"],
["Le bolero de Ravel","maurice-ravel-bolero.mp3","bolero.jpg"], 
["Pascal Obispo - Lucie", "pascal-obispo-lucie-clip-officiel.mp3","obispo.jpg"],
["Polnareff - Lettre a France","polnareff-lettre-a-france-original-version.mp3","polnareff.jpg"]
];


/************ generation de liste des chanson  dynamiquement **************/
//on capte la balise ul
listeChansons = document.querySelector("#listeMusique");

//on declare la variable string qui recevra les balises pour ajouter à l ul capté avant
let listeMusique="";

//on cree la liste des chanson
for(let i = 0 ; i < listeChanson.length; i++){    
    listeMusique += "<li id=\""+ i +"\">"+(i+1)+" - <i class=\"far fa-heart\"></i> <label class='chanson'>"+listeChanson[i][0]+"</label></li> ";
}
//on ajoute la variable avec les LI dans la balise UL#listeMusique
listeChansons.innerHTML =listeMusique;


/************* des label avec les chansons ****************/
//on capte toutes les balises li crée anteriorment
listLabel= document.querySelectorAll(".chanson");
console.log(listLabel);

//on parcours tous les labels dans li et on lui applique l'evenement click pour chaque
//for(let x in listLi){//x c est le item ou index de l'array, c est plutot pour les objet
listLabel.forEach((valeur, index)=>{
    console.log(index);
    console.log(valeur);

    //j applique à chaque label l'event click
    valeur.addEventListener("click", function(){ 
        changerCouleur(this);
        
        jouerChanson(listeChanson[index][1],listeChanson[index][2]);
    });
   
});


/*************** Gestion des coeurs ****************/
listCoeur= document.querySelectorAll(".fa-heart");
//on parcours tous les labels dans li et on lui applique l'evenement click pour chaque
listCoeur.forEach((valeur, index)=>{
    console.log(index);
    console.log(valeur);

    //j applique à chaque icon l'event click pour changer sa class et par ende l image
    valeur.addEventListener("click", function(elem){ 
        console.log(elem.target);
        elem.target.setAttribute('class','fas fa-heart')
    });
   
});

/**
 * function qui joue la musique
 */
function jouerChanson(chanson, imgChanteur) {

    document.querySelector("section>img").setAttribute('src','./assets/images/'+imgChanteur)
    document.querySelector("#boutonPlay").pause();
    //il change le attribute source de la balise audio
    document.querySelector("#boutonPlay").setAttribute('src','./assets/mp3/'+chanson);    

    //il charge le fichier
    document.querySelector("#boutonPlay").load();

    //il joue la musique
    document.querySelector("#boutonPlay").play();
}


/*
* change le couleur de liste avec chaque click 
*/
function changerCouleur(itemChoisie) {    
    
    /* pour enlever le background des items deja selectione
    mais peut etre on peut utiliser un changement de nom de class qui aura le background souhaité
    */
    toutes = document.querySelectorAll("ul#listeMusique>li");
    toutes.forEach(element => {
        element.style.backgroundColor="";
    });
    
    //je modifie le background selectionné
    itemChoisie.parentNode.style.backgroundColor ='rgb(88, 168, 175)';

}
