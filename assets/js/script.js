//liste des chanson avec le titre et son fichier audio
listeChanson=[['Queen - Bohemian Rhapsody','Bohemian Rhapsody.flac','queen.jpg'],
["Johnny Hallyday - Allumer le feu","100 - Johnny Hallyday - Allumer le feu.mp3","johnny.jpg"],
["Alain Souchon - Foule sentimentale","alain-souchon-foule-sentimentale.mp3","AlainSouchon.jpg"],
["Le bolero de Ravel","maurice-ravel-bolero.mp3","bolero.jpg"], 
["Pascal Obispo - Lucie", "pascal-obispo-lucie-clip-officiel.mp3","obispo.jpg"],
["Polnareff - Lettre a France","polnareff-lettre-a-france-original-version.mp3","polnareff.jpg"]
];

//on capte la balise ul
listeChansons = document.querySelector("#listeMusique");

//on declare la variable string qui recevra les balises pour ajouter à l ul capté avant
let listeMusique="";

//on cree la liste des chanson
for(let i = 0 ; i < listeChanson.length; i++){    
    listeMusique += "<li id=\""+ i +"\">"+(i+1)+" - <i class=\"fab fa-accessible-icon\"></i> "+listeChanson[i][0]+"</li> ";
}
//on ajoute la variable avec les LI dans la balise UL#listeMusique
listeChansons.innerHTML =listeMusique;

//on capte toutes les balises li crée anteriorment
listLi= document.querySelectorAll("#listeMusique>li");

//on parcours tous le LI et on lui applique l'evenement click pour chaque
for(let x in listLi){
    console.log(x);
    document.getElementById(x).addEventListener("click", function(){ 
        changerCouleur(this);
        console.log(listeChanson[x][1]);
        jouerChanson(listeChanson[x][1],listeChanson[x][2]);
    });
   
}


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
    itemChoisie.style.backgroundColor ='rgb(88, 168, 175)';

}