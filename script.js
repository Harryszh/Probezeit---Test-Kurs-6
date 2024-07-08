function bildWechseln(bildTyp) {
    var bild = document.getElementById('emoji-img');
    if (bildTyp === 'gut') {
        bild.src = "images/glücklich.svg";
        bild.alt = "Glückliches Bild";
    } else if (bildTyp === 'schlecht') {
        bild.src = "images/traurig.svg";
        bild.alt = "Trauriges Bild";
    }
}

function resetPage() {
    var bild = document.getElementById('emoji-img');
    bild.src = "images/neutral.svg";
    bild.alt = "neutral";
}
