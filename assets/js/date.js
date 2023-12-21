function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
}

// Mettre à jour le contenu de la balise avec l'ID "current-date"
document.getElementById('current-date').innerHTML = getCurrentDate();