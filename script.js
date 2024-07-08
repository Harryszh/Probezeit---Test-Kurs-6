function bildWechseln(bildTyp) {
    var bild = document.getElementById('emojis').getElementsByTagName('img')[0];
    if (bildTyp === 'gut') {
        bild.src = "images/glücklich.svg";
        bild.alt = "Glückliches Bild";
    } 
    
    else if (bildTyp === 'schlecht') {
        bild.src = "images/traurig.svg";
        bild.alt = "Trauriges Bild";
    }
}