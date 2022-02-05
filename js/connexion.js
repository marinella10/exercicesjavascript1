//Variable globale
//les constantes unique pour ce connectez
const email = "marine@gmail.com";
const password = "test";
//recup de la div id="erreur" pour afficher les erreurs de connexion
let erreursBloc = document.getElementById("erreurs");

//Fonction appelée par le bouton HTML attribut onclick="connexion()"
function connexion(){
    //recuperer les 2 inputs a l'aide de leurs ID et afficher leurs valeur dans la console
    let emailUser = document.getElementById("email").value;
    let passwordUser = document.getElementById("password").value;
    //Debug
    console.log("EMAIL enter = " + emailUser);
    console.log("MOT DE PASSE ENTRER = " + passwordUser);

    //Detection des erreurs
    //verifié que les champs ne sont pas vide
    if(emailUser === "" || passwordUser === ""){
        //Afficher les erreur
        //Ajout d'une classe .erreur
        erreursBloc.className = "erreurs"
        erreursBloc.innerHTML = "Merci de remplir tous les champs"
    }else{
        //Seconde verification
        //Si email enter par utilisateur === a la constante et password
        if(emailUser === email && passwordUser === password){
            //Check dans la console si ca matche
            console.log("Vous etes connectez !")
            //On recup id du parent formualaire et on le cache avec css
            document.getElementById("unique").style.display = "none";
            //On recup la div id=loader et on lui ajoute une classe (le loader infinis)
            document.getElementById("loader").classList.add("loader")
            //Redirection grace a l'Objet window.location = 'url absolue ou relative'
            function redirection(){
                window.location = "taches.html";
                console.log("tetst 5s")
            }
            //Delay avant appel de la fonction de redirection
            //setTimeout = 2 paramètres la fontion + temps en miliseconde avant appel de la fonction
            setTimeout(redirection, 5000)

        }else{
            //Sinon on affiche les erreur relative au mauvais email et mot de passe
            erreursBloc.className = "erreurs"
            erreursBloc.innerHTML = "Erreur : Merci de verifié votre email et mot de passe"
        }
    }

}
