// recupérer le id de la div nav-barre du html.
const menuParent = document.getElementById("menu");
let a = "mic"
let b = 35
// inserer le menu
//menuParent.innerHTML = "bonjour "+ a + " tu as " + b + " ans"

menuParent.innerHTML = `
<a class="liens" onclick="ouvrirMenuGauche()">
<i class="fa fa-home fa-2x"></i>
</a>
<a class="liens" onclick="darkLightMode()">
<i id="toggleIcon" class="fa fa-toggle-on fa-2x" aria-hidden="true"></i>
</a>
<a href="#" class="liens">Accueil</a>
<a href="taches.html" class="liens">Liste des taches</a>
<a href="connexion.html" class="liens">page de connexion</a>
<a href="#" class="liens">casse break</a>
<a href="#" class="icon" onclick="showHideMenu()">
<i class="fa fa-bars fa-2x"></i>
</a>

`

//Le clic sur le btn burger
function showHideMenu(){
    //Dans une variable sont stcok la fiv qui a l'id "myTopNav"
    let open = document.getElementById("menu");
    //Si cette div possède la classe top nav on ajoute la classe responsive
    if(open.className === "topnav"){
        open.className += " responsive";
    }else{
        //Sinon on la retire
        open.className = "topnav";
    }
}

function femerMenuGauche() {
    document.getElementById("menuGaucheID").style.width = "0"
}
//passer au mode dark - light
//Fonction appelée depuis l'attribut onclick de ma balise <a> qui contient une icone <i>
function darkLightMode(){

    //Reucopere le <body>
    let btnLightDark = document.body;
    //Ajoute et retire la classe .dark-mode CSS
    btnLightDark.classList.toggle("dark-mode");
    //recup du bouton + icone par son ID
    const toggleIcon = document.getElementById("toggleIcon");

    //Si l'cone possède la classe fa fa-toggle-off
    if(toggleIcon.className === "fa fa-toggle-off"){
        //On change l'icone en ON
        toggleIcon.className = "fa";
        toggleIcon.classList.toggle("fa-toggle-on");
    }else{
        //Sinon on fait l'inverse
        toggleIcon.className = "fa fa-toggle-off"
    }

}





