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

function showFeedback(type) {
    var feedbackText = document.getElementById("feedback-text");
    var feedbackMessage = document.getElementById("feedback-message");

    if (type === 'gut') {
        feedbackMessage.textContent = "Danke vielmals, freut mich das zu hören!";
    } else if (type === 'schlecht') {
        feedbackMessage.textContent = "Oh nein, tut mir leid das zu hören!";
    }

    feedbackText.style.display = "block";
}

