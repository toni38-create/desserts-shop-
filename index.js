
let boutonCart = document.querySelectorAll ('.rectangle');
let contenuBoutonCart = document.querySelectorAll ('.text');

// Gestion du clic sur le bouton principal

boutonCart.forEach((bouton) => {
    let chiffre = 0; // Compteur individuel pour ce bouton

    bouton.addEventListener('click', () => {

        let contenu = bouton.querySelector('.text');
        if (contenu) {

            // Ajouter l'élément HTML avec les boutons et le compteur
            contenu.innerHTML = `
                <div class="quantitéCart">
                    <img src="icon-moins.png" class="Moins">
                    <p class="compteur">${chiffre}</p>
                    <img src="icon-plus.png" class="Plus">
                </div>
            `;

            // Limiter la portée aux éléments créés dynamiquement dans `contenu`
            let ajoutCart = contenu.querySelector('.Plus');
            let réduitCart = contenu.querySelector('.Moins');
            let compteur = contenu.querySelector('.compteur');
        

            console.log(prix);
            console.log(prixTexte);


            // Gestion du clic sur le bouton "+"
        
            ajoutCart.addEventListener('click', () => {
                console.log('Clic sur ajouter');
                chiffre++; // Incrémente le compteur individuel
                console.log(chiffre);
                compteur.textContent = chiffre; // Met à jour l'affichage du compteur
                console.log(`Le compteur doit afficher ${chiffre}`);

                

            });

            // Gestion du clic sur le bouton "-"
            réduitCart.addEventListener('click', () => {
                console.log('Clic sur réduire');
                    chiffre--; // Décrémente le compteur individuel
                    compteur.textContent = chiffre; // Met à jour l'affichage du compteur

            if (chiffre <= 0) {
                chiffre = 0;
            }
            });
        }

        // Change la couleur de fond du bouton
        bouton.style.backgroundColor = "rgb(253, 93, 0)";

        // Supprime l'icône de caddie si elle existe
        let icone = bouton.querySelector('.imageCaddie');
        if (icone) {
            icone.remove();
        }

    });
});

let prixElements = document.querySelectorAll('.prixArticle'); // Sélectionne tous les éléments avec la classe .prixArticle

prixElements.forEach((prixElement) => {
    let prixTexte = prixElement.textContent; // Récupère le texte du prix (par exemple "$5.50")
    let prix = parseFloat(prixTexte.replace('$', '')); // Convertit le prix en nombre (ex. 5.50)
    let chiffre = 0; // Initialisation du compteur pour chaque rectangle

    let ajoutCart = contenu.querySelector('.Plus');



    // Ajout au panier
    ajoutCart.addEventListener('click', () => {
        chiffre++; // Incrémente le compteur d'articles
        let total = chiffre * prix; // Calcul du total en fonction du prix
        console.log(`Prix unitaire : $${prix}, Quantité : ${chiffre}, Total : $${total.toFixed(2)}`);
    });
});
