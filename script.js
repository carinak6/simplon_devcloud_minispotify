//clique sur chaque chanson
document.getElementById("chanson1").addEventListener("click", function(){    
    //console.log(this);
    
    changerCouleur(this);
    jouerChanson("./mp3/Bohemian Rhapsody.flac");
});

document.getElementById("chanson2").addEventListener("click", function(){
    changerCouleur(this);    
    jouerChanson("./mp3/100 - Johnny Hallyday - Allumer le feu.mp3");
});

document.getElementById("chanson3").addEventListener("click", function(){    
    changerCouleur(this);
    jouerChanson("./mp3/alain-souchon-foule-sentimentale.mp3");
});

document.getElementById("chanson4").addEventListener("click", function(){  
    changerCouleur(this);  
    jouerChanson("./mp3/maurice-ravel-bolero.mp3");
});

document.getElementById("chanson5").addEventListener("click", function(){   
    changerCouleur(this); 
    jouerChanson("./mp3/pascal-obispo-lucie-clip-officiel.mp3");
});

document.getElementById("chanson6").addEventListener("click", function(){   
    changerCouleur(this); 
    jouerChanson("./mp3/polnareff-lettre-a-france-original-version.mp3");
});

//function qui joue la musique
function jouerChanson(chanson) {
    //il change le attribute source de la balise audio
    document.querySelector("#boutonPlay").setAttribute('src',chanson);    

    //il charge le fichier
    document.querySelector("#boutonPlay").load();

    //il joue la musique
    document.querySelector("#boutonPlay").play();
}

/*change le couleur de liste avec chaque click */
function changerCouleur(itemChoisie) {    

    /* pour enlever le background des items deja selectione
    mais peut etre on peut utiliser un changement de class
    */
    toutes = document.querySelectorAll("ul#listeMusique>li");
    toutes.forEach(element => {
        element.style.backgroundColor="";
    });
    
    itemChoisie.style.backgroundColor ="violet";

}