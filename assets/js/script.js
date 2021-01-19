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
console.log(listeMusique)
//on ajoute la variable avec les LI dans la balise UL#listeMusique
listeChansons.innerHTML += "<tr><th class='nro'>#</th><th class='coeur'></th><th class='titre'>Titre</th><th class='play'></th><th class='artiste'>Artiste</th><th class='temps'><i class=\"fas fa-stopwatch\"></i></th></tr><tbody>"+ listeMusique +'</tbody>';


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
        //console.log(this);
        jouerChanson(listeChanson[index][2],listeChanson[index][3]);//j'appele la function jouer avec le paramettres
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
        if(elem.target.className == 'fas fa-heart' ){
            elem.target.setAttribute('class','far fa-heart')
        }else{
            elem.target.setAttribute('class','fas fa-heart')
        }
        
    });
   
});


/*************** Gestion des Plays ****************/
listPlays= document.querySelectorAll(".fa-play-circle");
//on parcours tous les labels dans li et on lui applique l'evenement click pour chaque
listPlays.forEach((valeur, index)=>{
    console.log(index);
    console.log(valeur);

    //j applique à chaque icon l'event click pour changer sa class et par ende l image
    valeur.addEventListener("click", function(elem){ //element c est l objet MouseEvent
        console.log(elem.target);//element clique avec le .target je peut le capter
        if(elem.target.className == 'fas fa-play-circle' ){
            elem.target.setAttribute('class','far fa-play-circle');
            let nro=elem.target.parentNode.parentNode.children[0].innerHTML;//je reçois le premier element fils de la ligne tr, c est le nro
            console.log(nro);
            document.querySelectorAll(".chanson")[nro-1].click();//je declanche le clique sur le titre de la chanson
        }else{
            elem.target.setAttribute('class','fas fa-play-circle');
            
        }
        
       /*TO DO : continuer avec l evenement clique sur les play que soit desactivé dans les autres*/
        
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
    toutes = document.querySelectorAll("table#listeMusique>tbody>tr");
    //console.log(toutes)
    toutes.forEach(element => {
        //console.log(element);        
        element.style.backgroundColor="";
    });
    
    //je modifie le background selectionné
    itemChoisie.parentNode.style.backgroundColor ='rgb(88, 168, 175)';

}
