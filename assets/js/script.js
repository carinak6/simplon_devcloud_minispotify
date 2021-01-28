//liste des chanson avec le titre, son fichier audio et l image qui l acompagne
listeChanson=[
['Bohemian Rhapsody','Queen','Bohemian Rhapsody.flac','queen.jpg','5:54'],
["Allumer le feu",'Johnny Hallyday',"100 - Johnny Hallyday - Allumer le feu.mp3","johnny.jpg","4:21"],
["Foule sentimentale","Alain Souchon","alain-souchon-foule-sentimentale.mp3","AlainSouchon.jpg","5:51"],
["Le bolero de Ravel","Maurice Ravel","maurice-ravel-bolero.mp3","bolero.jpg","15:28"], 
["Lucie","Pascal Obispo", "pascal-obispo-lucie-clip-officiel.mp3","obispo.jpg","4:12"],
//["Lettre a France","Polnareff","polnareff-lettre-a-france-original-version.mp3","polnareff.jpg","4:50"],
["Fantasy","Earth, Wind & Fire","Fantasy.mp3","fantasy.jpg","3:43"],
["Virtual Insanity","Jamiroquai","Jamiroquai--VirtualInsanity.mp3","jamiroquai.jpg","4:02"],
['La Bilirrubina',"Juan Luis Guerra","JuanLuisGuerra-LaBilirrubina.mp3","labilirrubina-juanluisguerra.jpg","3:55"],
['Corazon espinado',"Mana - Santana","mana-CorazonEspinado.mp3","manaSantana.jpg","4:36"],
['Todo a pulmon',"Alejandro Lerner","AlejandroLerner-Todo a Pulmon.mp3","alejandroLerner.jpg","5:10"],
["La gota fria","carlosVives","carlosVives-Lagotafria.mp3","laGotaFriaCarlosVives.jpg","3:29"],
["Sin Documento","Los Rodriguez","LOSRODRIGUEZ-SIN DOCUMENTOS.mp3","los-rodriguez-sin-documentos.jpg","4:46"],
["La pachanga","Vilma Palma e Vampiros","VilmaPalmaYVampiros-LaPachanga.mp3","lapachanga.jpg","4:37"]
];

indiceActuel = 0;//pour savoir quelle chanson joue actuelement

/************ generation de liste des chanson  dynamiquement **************/
//on capte la balise table                       
listeChansons = document.querySelector("#listeMusique");

//on declare la variable string qui recevra les balises pour ajouter à l ul capté avant
let listeMusique="";

//on cree la liste des chanson
for(let i = 0 ; i < listeChanson.length; i++){    
    //listeMusique += "<li id=\""+ i +"\">"+(i+1)+" - <i class=\"far fa-heart\"></i> <label class='chanson'>"+listeChanson[i][0]+"</label></li> ";
    
    listeMusique += "<tr> <td class='nro' >"+ (i+1) +"</td><td class='coeur'><i class=\"far fa-heart\"></i></td><td class='chanson titre'>"+listeChanson[i][0]+"</td><td class='play'><i class='fas fa-play-circle'></i></td><td class='artiste'>"+ listeChanson[i][1]+ "</td><td class='temps'>"+ listeChanson[i][4]+ "</td></tr>";
}


//on ajoute la variable dans la balise table#listeMusique
listeChansons.innerHTML += "<tr><th class='nro'>#</th><th class='coeur'></th><th class='titre'>Titre</th><th class='play'></th><th class='artiste'>Artiste</th><th class='temps'><i class=\"fas fa-stopwatch\"></i></th></tr><tbody>"+ listeMusique +'</tbody>';

/************* les label avec les chansons ****************/
//on capte toutes les celules td crée anteriorment
listLabel= document.querySelectorAll(".chanson");
//console.log(listLabel);

//**************** Ajouter le Play à chaque td du titre de la chanson ************************
//on parcours tous les celules td de la table et on lui applique l'evenement click pour chaque
listLabel.forEach((valeur, index)=>{ 

    //j applique à chaque td l'event click
    valeur.addEventListener("click", function(){ 

        indiceActuel = index; //pour manipuler une lecture continue        
        console.log('indiceActuel', indiceActuel);  

        changerCouleur(this);    

        jouerChanson(listeChanson[index][2],listeChanson[index][3]);//j'appele la function jouer avec le paramettres
    });
   
});


/*************** Gestion des coeurs ****************/
listCoeur= document.querySelectorAll(".fa-heart");
//on parcours tous les labels dans li et on lui applique l'evenement click pour chaque
listCoeur.forEach((valeur, index)=>{
 
    //j applique à chaque icon l'event click pour changer sa class et par ende l image
    valeur.addEventListener("click", function(elem){ 
                
        if(elem.target.className == 'fas fa-heart' ){
            elem.target.setAttribute('class','far fa-heart')
        }else{
            elem.target.setAttribute('class','fas fa-heart')
        }
        
    });
   
});


/*************** Ajouter le Play au chaque icone play  ****************/
listPlays= document.querySelectorAll(".fa-play-circle");
//on parcours tous les labels dans li et on lui applique l'evenement click pour chaque
listPlays.forEach((valeur, index)=>{   

    //j applique à chaque icon l'event click pour changer sa class et par ende l image
    valeur.addEventListener("click", function(elem){ //element c est l objet MouseEvent
        console.log(elem.target);//element clique avec le .target je peut le capter
        if(elem.target.className == 'fas fa-play-circle' ){
            elem.target.setAttribute('class','far fa-play-circle');

            nro = parseInt(elem.target.parentNode.parentNode.children[0].innerHTML);//je reçois le premier element fils de la ligne tr, c est le nro
            
            document.querySelectorAll(".chanson")[nro-1].click();//je declanche le clique sur le titre de la chanson
        }else{
            elem.target.setAttribute('class','fas fa-play-circle');
            
        }

    });
   
});


/**
 * *************function qui joue la musique **********************
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

/**
 * ***********Evenement qui Renvoie si la lecture de l'audio / vidéo est terminée ou non *********
 */
document.querySelector("#boutonPlay").addEventListener("ended", function(){
    
    indiceActuel++; 
    /* je verifie si la derniere chanson est fini et apres le indiceActuel passe à 0 pour revenir */
    if(indiceActuel == listeChanson.length){
        indiceActuel = 0;
    }
    console.log('indiceActuel apres', indiceActuel);
    document.querySelectorAll(".chanson")[indiceActuel].click();//je declanche le clique sur le titre de la chanson
 
}, false)


/*
* **********change le couleur de liste avec chaque click et modifie l icon play ************
*/
function changerCouleur(itemChoisie) {    
    
    /* pour enlever le background des items deja selectione
    mais peut etre on peut utiliser un changement de nom de class qui aura le background souhaité
    */
    toutes = document.querySelectorAll("table#listeMusique>tbody>tr");
    //console.log(toutes)
    toutes.forEach(element => {
        //console.log(element);        
        element.style.backgroundColor="";
    });
    
    //je capte le node parent 
    objParent=itemChoisie.parentNode;

    //je modifie le background du parent
    objParent.style.backgroundColor ='rgb(88, 168, 175)';

    //je modifie le icon de la celule .play en ciblant son fils node
    // et maintenant on pourra savoir quel chanson on a deja ecouté
    objParent.querySelector('.play').childNodes[0].setAttribute('class','far fa-play-circle');

    
}
