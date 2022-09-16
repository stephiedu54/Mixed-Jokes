// Création du contenu
let jokeContent = {
  names: [
    "Seb",
    "Yves",
    "Ella",
    "Omar",
    "Mike",
    "Jean",
    "Axel",
    "Jesus",
    "Yuri",
  ],
  answers: [
    "Seb pas l'homme qui prend la mer, c'est la mer qui prend l'homme… tatatin !",
    "Yves'nait d'avoir dix-huit ans…",
    "Ella les yeux révolver, elle a le regard qui tue…",
    "Omar'ie si tu savais, tout le mal que l'on me fait…",
    "Mike Umba ! Macumba ! Elle danse tous les soirs !",
    "Jean tend le loup le renard et la belette…",
    "Axel sont jolies les filles de mon pays, laï, laï, laï, laï, laï…",
    "Jésus venu te dire que je m’en vais, et tes larmes ne pourront rien y changer.",
    "Yuri voulu être une artiiiiiiiiiiste !",
  ],
};

// Récupération des infos
let getName1 = document.querySelector(".name1");
let getName2 = document.querySelector(".name2");
let jokeAnswer = document.querySelector("#joke");
let generateButton = document.querySelector("#generatorBtn");

let namesLength = jokeContent.names.length;
let answersLength = jokeContent.answers.length;

// Choix d'une blague et d'un nom au hasard
let randomChoice = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

// Fonction générer une blague
const generateJoke = () => {
  getName1.textContent = jokeContent.names[randomChoice(namesLength)];
  getName2.textContent = jokeContent.names[randomChoice(namesLength)];
  jokeAnswer.textContent = jokeContent.answers[randomChoice(answersLength)];
};

// Ajout de l'event sur le bouton
generateButton.addEventListener("click", generateJoke);
