// menu
const btn = document.getElementById("btnNav")
const nav = document.getElementById("nav")

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});


// light Mode
const toggle = document.getElementById("toggle")

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('light', e.target.checked);
})

function changeIcon() {
    var iconTheme = document.getElementById('iconChange');
    if (iconTheme.src.match("image/day.svg")) {
        iconTheme.src = "image/night.svg";
    }
    else {
        iconTheme.src = "image/day.svg";
    }
} 



// Music
let track_art = document.querySelector(".track-picture");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause");
let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".prev");

let seek_slider = document.querySelector(".seek_slider");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "Les Démons de Minuit",
        artist: "Images",
        image: "music-logo/les-demons-de-minuit-picture.png",
        path: "music/les-demons-de-minuit.mp3",
    },
    {
      name: "Big Bisous",
      artist: "Carlos",
      image: "music-logo/carlos.png",
      path: "music/big-bisous.mp3",
    },
    {
        name: "Fruit de la Passion",
        artist: "Francky Vincent",
        image: "music-logo/francky-vincent-picture.png",
        path: "music/francky-vincent-fruit-de-la-passion-avec-paroles.mp3",
    },
    {
        name: "Partenaire Particulier",
        artist: "Partenaire Particulier",
        image: "music-logo/partenaire-particulier-picture.png",
        path: "music/partenaire-particulier.mp3",
    },
    {
        name: "Femme Like U",
        artist: "K.Maro",
        image: "music-logo/kmaro-picture.png",
        path: "music/une-femme-like-you-k-maro-letre-lyrics-on-screen.mp3",
    },
    {
        name: "Le Bal Masqué",
        artist: "La Compagnie Créole",
        image: "music-logo/la-compagnie-creole-picture.png",
        path: "music/le-bal-masque.mp3",
    },
    {
        name: "La Danse d'Hélène",
        artist: "Real Joy",
        image: "music-logo/real-joy-picture.png",
        path: "music/la-danse-dhelene-helene-mix.mp3",
    },
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    curr_track.addEventListener("ended", nextTrack);

}
  
function resetValues() {
    seek_slider.value = 0;
}
  
loadTrack(track_index);
  
function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    var playIcon = document.getElementById('playpauseIconChange');
    if (playIcon.src.match("image/light/play.svg")) {
        playIcon.src = "image/light/pause.svg";
    }
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    var pauseIcon = document.getElementById('playpauseIconChange');
    if (pauseIcon.src.match("image/light/pause.svg")) {
        pauseIcon.src = "image/light/play.svg";
    }
}
  
function nextTrack() {
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}
  
function prevTrack() {
    if (track_index > 0) track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}



// ~ VARIABLES ~
    // Choix des couleurs du joueur :
        // - Variables pour récupérer des 'class' de l'html
const player_choice_color_1 = document.querySelector(".player_choice_color1"); 
const player_choice_color_2 = document.querySelector(".player_choice_color2"); 
const player_choice_color_3 = document.querySelector(".player_choice_color3"); 
const player_choice_color_4 = document.querySelector(".player_choice_color4");
        // - Variables pour mettre les couleurs choisis par le joueur dans des listes
choices = [player_choice_color_1, player_choice_color_2, player_choice_color_3, player_choice_color_4];
let player_choice = [];
const player_color = [];

    // Score :
        // - Variables pour récupérer des 'class' de l'html
const answer_1 =  document.querySelector(".answer1"); 
const answer_2 =  document.querySelector(".answer2"); 
const answer_3 =  document.querySelector(".answer3"); 
const answer_4 =  document.querySelector(".answer4");
        // - Variables pour mettre le score dans une liste
let answer_list =  [answer_1, answer_2, answer_3, answer_4];

    // Variables du compteur de tours :
    const text = document.querySelector(".text")
    let round_text = 1


//////////////////////////////////////////////////////////////////////////////////////////////////////


// Push couleurs -> onClick :
    // - Push Bleu 
function pushBlue() {
    const blue = "b";
    const blue_color = "#ABDAFC";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(blue);
        player_color.push(blue_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}
    // - Push Vert 
function pushGreen() {
    const green = "g"; 
    const green_color = "#A7E8BD";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(green);
        player_color.push(green_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}    
    // - Push Violet 
function pushPurple() {
    const purple = "p"; 
    const purple_color = "#D4ADCF";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(purple);
        player_color.push(purple_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}
    // - Push Rouge 
function pushRed() {
    if (player_choice.length < 4) {
        let i = 0;
        const red = "r"; 
        const red_color = "#F57266";
        player_choice.push(red);
        player_color.push(red_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}
    // - Push Jaune 
function pushYellow() {
    if (player_choice.length < 4) {
        let i = 0;
        const yellow = "y";
        const yellow_color = "#FFD970";
        player_choice.push(yellow);
        player_color.push(yellow_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}


// Fonction pour clear les choix de la manche :
function clearChoice() {
    player_choice_color_1.style.removeProperty("background-color");
    player_choice_color_2.style.removeProperty("background-color");
    player_choice_color_3.style.removeProperty("background-color");
    player_choice_color_4.style.removeProperty("background-color");
    player_choice.length = 0;
    player_color.length = 0;
}
// Fonction pour clear le score de la manche :
function clearScore() {
    answer_1.style.removeProperty("background-color");
    answer_2.style.removeProperty("background-color");
    answer_3.style.removeProperty("background-color");
    answer_4.style.removeProperty("background-color");
}
// Fonction pour compter le nombre de tours :
function round() { 
    round_text++;
    return round_text
}


// Fonction pour envoyer les choix de la manche dans le plateau de jeu
function sendChoice() {
    if (player_choice.length == 4) {
        const emplacement_color1 = document.querySelector(`#line-${round_text} .choice_color1`); 
        const emplacement_color2 = document.querySelector(`#line-${round_text} .choice_color2`); 
        const emplacement_color3 = document.querySelector(`#line-${round_text} .choice_color3`); 
        const emplacement_color4 = document.querySelector(`#line-${round_text} .choice_color4`);

        color1 = player_color[0];
        color2 = player_color[1];
        color3 = player_color[2]; 
        color4 = player_color[3];

        emplacement_color1.style.background = color1; 
        emplacement_color2.style.background = color2; 
        emplacement_color3.style.background = color3; 
        emplacement_color4.style.background = color4;

        emplacement_color1.style.border = "solid"; 
        emplacement_color2.style.border = "solid"; 
        emplacement_color3.style.border = "solid"; 
        emplacement_color4.style.border = "solid";

        // Pour contrer le light mode qui met les bords en noir
        emplacement_color1.style.borderColor = "white";
        emplacement_color2.style.borderColor = "white"; 
        emplacement_color3.style.borderColor = "white"; 
        emplacement_color4.style.borderColor = "white"; 
        
        const text_round = document.querySelector(`#text-${round_text}`); 

        text_round.style.color = "white" 
        text_round.textContent = round_text


        verif(player_choice)
    }
}


// Définition des couleurs possibles
const couleurs = ['r', 'g', 'b', 'y', 'p'];
const couleursRGB = ['#F57266', '#A7E8BD', '#ABDAFC', '#FFD970', '#D4ADCF']


// Fonction de création de la séquence aléatoire pour l'ordinateur
function construireSequenceOrdinateur() {
    // Initialisation de la séquence
    const sequence = [];
    const sequenceRGB = [];
    // Ajout de 4 couleurs
    for (let i = 0; i < 4; i++) {
        // Calcul une position aléatoire
        const position = Math.floor(Math.random() * 5);

        // Récupère la couleur à la position aléatoire
        const couleur = couleurs[position];
        const couleurRGB = couleursRGB[position];

        // Ajoute la couleur à la séquence
        sequence.push(couleur);
        sequenceRGB.push(couleurRGB);
    }

    const a1 = document.getElementById("1");
    const a2 = document.getElementById("2");
    const a3 = document.getElementById("3");
    const a4 = document.getElementById("4");

    a1.style.background = sequenceRGB[0];
    a2.style.background = sequenceRGB[1];
    a3.style.background = sequenceRGB[2];
    a4.style.background = sequenceRGB[3];

    // Renvoi la séquence
    return sequence;
    // return sequenceString;
}

let sequenceOrdinateur = construireSequenceOrdinateur();
console.log("Séquence Ordi : " + sequenceOrdinateur);


function verif(player_choice) {
    let goodColor = 0;
    let badSpot = 0;
    let list_score = [];

    var iconTheme = document.getElementById('iconChange');
    if (iconTheme.src.match("image/night.svg")) {
        color_good = "#fff";
    }
    else {
        color_good = "#333333 ";
    }

    color_bad = "#E94435";

    // copie séq ordi
    let copyOrdi = sequenceOrdinateur.slice();
    
    // boucle pour identifier le nombre de couleur bien placée
    let i = 0;
    while (i < player_choice.length) {
        if (player_choice[i] == copyOrdi[i]) {
            list_score.push(color_good)
            goodColor++;
            copyOrdi.splice(i, 1);
            player_choice.splice(i, 1);
        } else {
            i++;
        }
    }

    // Boucle pour identifier le nombre de couleur mal placée
    i = 0;
    while (i < player_choice.length) {
        const positionColor = copyOrdi.indexOf(player_choice[i])

        if (positionColor > -1) {
            list_score.push(color_bad)
            badSpot++;
            player_choice.splice(i, 1);
            copyOrdi.splice(positionColor, 1);
        } else {
            i++;
        }
    }

    const answer1 = document.querySelector(`#score-${round_text} .answer1`); 
    const answer2 = document.querySelector(`#score-${round_text} .answer2`); 
    const answer3 = document.querySelector(`#score-${round_text} .answer3`); 
    const answer4 = document.querySelector(`#score-${round_text} .answer4`);

    answer1.style.background = list_score[0];
    answer2.style.background = list_score[1];
    answer3.style.background = list_score[2];
    answer4.style.background = list_score[3];


    clearChoice()
    round()

    const text_V_or_L = document.getElementById("VorL"); 

    // text_round.style.color = "white" 
    if (round_text > 10 && goodColor != 4) {
        console.log("perdu")
        text_V_or_L.textContent = "Perdu !"
        end1.style.display = "flex"
        end3.style.display = "flex"
        end2.style.display = "flex"

    }

    if (goodColor == 4) {
        console.log("gagné")
        text_V_or_L.textContent = "Bravo !"
        end1.style.display = "flex"
        end3.style.display = "flex"
        end2.style.display = "flex"

    }
}








const end1 = document.getElementById("endPopupGame")
const end2 = document.getElementById("endPopupChoice")
const end3 = document.getElementById("endPopupSelection")

function restartGame(){
    end1.style.display = "none";
    end3.style.display = "none"
    end2.style.display = "none"
    sequenceOrdinateur = construireSequenceOrdinateur();
    console.log("Nouvelle partie, nouvelle séquence Ordi : " + sequenceOrdinateur);
    round_text = 1
}


















let lightModeGood = "#333333" ;
let darkModeGood = "#fff" ;

// function lightModeScore(){
//     if (goodColor == 1) {
//         if ( answer_1.style.background  = darkModeGood )
//         answer_1.style.background = lightModeGood }
// }
