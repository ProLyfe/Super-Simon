const bleep1 = new Audio();
bleep1.src = "sounds/DO.wav";

const bleep2 = new Audio();
bleep2.src = "sounds/RE.wav";

const bleep3 = new Audio();
bleep3.src = "sounds/MI.wav";

const bleep4 = new Audio();
bleep4.src = "sounds/FA.wav";


  

//Utiliser mathrandom
let bleuJs = document.getElementById("bleu");
let rougeJs = document.getElementById("rouge");
let jauneJs = document.getElementById("jaune");
let vertJs = document.getElementById("vert");



let Jouer = document.getElementById("play");


// function myFunction() {
//     let x = Math.floor(Math.random() * 4) + 1  
//     if(x == 1) {
//         document.getElementById("bleu").style.backgroundColor = '#00a2ff';
        
//     } else if(x == 2) {
//         document.getElementById("rouge").style.backgroundColor = '#fd4e08';
//     }
//     else if(x == 3) {
//         document.getElementById("jaune").style.backgroundColor = '#dcfd6d';
//     } 
//     else if(x == 4){
//         document.getElementById("vert").style.backgroundColor = '#00ff00';
// } 

// }





function myFunction() {
    let x = Math.floor(Math.random() * 4) + 1  
    switch (x){
        case 1:
        document.getElementById("bleu").style.backgroundColor = '#00a2ff';
        break;
        case 2:
        document.getElementById("rouge").style.backgroundColor = '#fd4e08';   
        break;
        case 3:
        document.getElementById("jaune").style.backgroundColor = '#dcfd6d';
        break;
        case 4:
        document.getElementById("vert").style.backgroundColor = '#00ff00';
        break;

    }
    if(bleuJs = x) {
        console.log('On a bon');
    }
    
}


function onClick() { 
    clicks ++; //On incrémente le score au nombre de clic sur les couleurs.
    document.getElementById("clicks").innerHTML = clicks;
    
    };


    document.getElementById("bleu")
    .addEventListener('click', function (event) {
        console.log("ca marche");
    });


// if (document.getElementById('bleu').style.backgroundColor != '#0000ff') {
//     console.log('yeesdnsjdns');
// };






// let randomBleu = bleuJs;
// let randomRouge = rougeJs;
// let randomJaune = jauneJs;
// let randomVert = vertJs;





let playJs = document.getElementById("play");
let nombreClic = 0;

// document.getElementById("bleu")
//         .addEventListener('click', function (event) {
//             console.log("ca marche");
//         });

document.getElementById("play")
        .addEventListener('click', function (event) {
            console.log("ca commence");
        });

// document.getElementById("bleu")
//         .addEventListener('click', function (event) {
//             console.log("ca marche");
//         });






function onClick2() {
    clicks = 0; //On remet le compteur à 0 quand le bouton replay est pressé.
    document.getElementById("clicks").innerHTML = clicks;
    };
