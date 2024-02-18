$(document).ready(function() {
    $('#myTable').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'csv',
                text: 'Export CSV' // Texte du bouton
            },
            {
                extend: 'excel',
                text: 'Export Excel'
            },
            {
                extend: 'pdf',
                className: 'custom-btn',
                text: 'Export PDF',
                title: "Commande N°" + orderNumber, // Titre personnalisé du document PDF
            },
            {
                extend: 'print',
                text: 'Imprimer'
            }
        ],
        "language": {
            "sEmptyTable":     "Aucune donnée disponible dans le tableau",
            "sInfo":           "Affichage de _START_ à _END_ sur _TOTAL_ éléments",
            "sInfoEmpty":      "Affichage de 0 à 0 sur 0 éléments",
            "sInfoFiltered":   "(filtré à partir de _MAX_ éléments au total)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     "Afficher _MENU_ éléments",
            "sLoadingRecords": "Chargement...",
            "sProcessing":     "Traitement...",
            "sSearch":         "Rechercher :",
            "sZeroRecords":    "Aucun élément correspondant trouvé",
            "oPaginate": {
                "sFirst":      "Premier",
                "sLast":       "Dernier",
                "sNext":       "Suivant",
                "sPrevious":   "Précédent"
            },
            "oAria": {
                "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
            },
            "select": {
                "rows": {
                    "_": "%d lignes sélectionnées",
                    "0": "Aucune ligne sélectionnée",
                    "1": "1 ligne sélectionnée"
                }
            }
        }
    } );
} );

let orderCounter = 0; // Initialisation du compteur de commandes
const orderPrefix = "#ATP"; // Préfixe de la commande

function generateOrderNumber() {
    orderCounter++; // Incrémente le compteur de commandes
    const orderNumber = orderPrefix + orderCounter.toString().padStart(4, '0'); // Génère le numéro de commande avec le préfixe et des zéros ajoutés à gauche
    return orderNumber;
}

// Exemple d'utilisation
const orderNumber = generateOrderNumber();
const numeroCommande = document.getElementById("numero-commande");
numeroCommande.innerHTML = "N° de vente : " + orderNumber; // Ajoute le numéro de commande comme contenu de la balise <p>

// Récupère la référence de l'élément input
const startDateInput = document.getElementById("start");

// Obtient la date du jour
const today = new Date();
const day = today.getDate().toString().padStart(2, '0'); // Jour sur deux chiffres
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Mois sur deux chiffres
const year = today.getFullYear();

// Formatage de la date pour l'attribut value de l'input
const formattedDate = `${year}-${month}-${day}`;

// Affecte la date formatée à la valeur de l'input
startDateInput.value = formattedDate;


const form = document.getElementById('vente');
const inputNom = document.getElementById('inputNom');
const inputPrénom = document.getElementById('inputPrénom');
const inputTéléphone = document.getElementById('inputTéléphone');
const inputEmail4 = document.getElementById('inputEmail4');
const dataListOptions = document.getElementById('datalistOptions');
const inputClient = document.getElementById('exampleDataList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = inputNom.value.trim();
    const prenom = inputPrénom.value.trim();
    const tel = inputTéléphone.value.trim();
    const mail = inputEmail4.value.trim();
    const clientChoisi = inputClient.value.trim();

    const existingClients = Array.from(dataListOptions.options).map(option => option.value);
    if (existingClients.includes(clientChoisi)) {
        // Le client a été choisi dans la liste déroulante
        alert('Client choisi : ' + clientChoisi);
        location.href = './confirmation.html';
    } else if (nom !== "" && prenom !== "" && tel !== "" && mail !== "") {
        // Un nouveau client est créé car tous les champs sont remplis
        alert('Nouveau client créé : ' + nom + " " + prenom);
        location.href = './confirmation.html';

        // form.submit(); // Vous pouvez soumettre le formulaire ici si nécessaire
    } else {
        // Aucun client choisi dans la liste déroulante et les champs ne sont pas tous remplis
        alert('Veuillez choisir un client dans la liste déroulante ou remplir tous les champs.');
    }
});

