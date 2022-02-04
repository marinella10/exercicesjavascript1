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
<a href="#" class="liens">ACCUEIL</a>
<a href="#" class="liens">Liste des taches</a>
<a href="#" class="liens">page de connexion</a>
<a href="#" class="liens">casse break</a>
<a href="#" class="icon" onclick="showHideMenu()">
<i class="fa fa-bars fa-2x"></i>
</a>

`




