const menuGauche = document.getElementById("menuGaucheID");

menuGauche.innerHTML = 
`
    <a href="javascript:void(0)" class="fermerBtn" onclick="femerMenuGauche()">&times;</a>
    <a href="">ACCUEIL</a>
    <a href="taches.html">LISTE DE TACHES</a>
    <a href="">INSCRIPTION</a>
    <a href="connexion.html">CONNEXION</a>
`

function ouvrirMenuGauche() {
    document.getElementById("menuGaucheID").style.width = "100%";
}