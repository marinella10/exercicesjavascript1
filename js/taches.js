//appeler depis l'attribut onclick du bouton html

function ajouterTache(){

// ici on recupere l id de input et sa valeur
    let champsinput = document.getElementById("Liste").value 

    // affiche dans la console tous ce qu on rentre dans l'input
    console.log (champsinput)

    // recupere l ul 
    let listeparent = document.getElementById("listeparent");

    //creer un li 
    let listeenfant = document.createElement("li")
    // creer un attribu class lis
    listeenfant.className="lis"

    //ajoute du texte à li = l'entree de l'utilisateur
    listeenfant.innerHTML=champsinput

    //ul ajout li 
    listeparent.appendChild(listeenfant);

    document.getElementById("Liste").value = ""

    // creer un bouton supprimer
   let btnSupprime = document.createElement ("button")

   // ajouter du texte au bouton
   btnSupprime.innerHTML="supprimer"

   //li ajout bouton supprime
   listeenfant.appendChild(btnSupprime)


    // ajouter une classe dans bouton
   btnSupprime.className="supprimer"

   //recuperer tous les bouton qui ont la classe supprimé
   supprimerTaches = document.getElementsByClassName("supprimer")



   
   // boucle de parcours de tous les boutons qui ont la classe supprimer
   let iteration;
   //3 paremetres i=0 est < a la longeur du tableau <buton class="supprimer"; i +=1
   for(iteration = 0; iteration < supprimerTaches.length; iteration++){
    //console.log(iteration)
    //declachant le click sur les boutons 
    supprimerTaches[iteration].onclick = function () {
        //alert('test')
       // on recupere le li parent des boutons
       //let butonparentli = supprimerTaches[iteration].parentElement;
    let butonparentli = this.parentElement;
    //cache les li avec du css
    butonparentli.style.display= "none";
   }
}


}


