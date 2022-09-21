class Joke {
  constructor(name, answer) {
    this.name = name;
    this.answer = answer;
  }
}

let joke1 = new Joke(
  "Seb",
  "Seb pas l'homme qui prend la mer, c'est la mer qui prend l'homme… tatatin !"
);
let joke2 = new Joke("Yves", "Yves'nait d'avoir dix-huit ans…");
let joke3 = new Joke(
  "Ella",
  "Ella les yeux révolver, elle a le regard qui tue…"
);
let joke4 = new Joke(
  "Omar",
  "Omar'ie si tu savais, tout le mal que l'on me fait…"
);
let joke5 = new Joke(
  "Mike",
  "Mike Umba ! Macumba ! Elle danse tous les soirs !"
);
let joke6 = new Joke("Jean", "Jean tend le loup le renard et la belette…");
let joke7 = new Joke(
  "Axel",
  "Axel sont jolies les filles de mon pays, laï, laï, laï, laï, laï…"
);
let joke8 = new Joke(
  "Jésus",
  "Jésus venu te dire que je m’en vais, et tes larmes ne pourront rien y changer."
);
let joke9 = new Joke("Yuri", "Yuri voulu être une artiiiiiiiiiiste !");

let jokesArray = [
  joke1,
  joke2,
  joke3,
  joke4,
  joke5,
  joke6,
  joke7,
  joke8,
  joke9,
];

// Récupération des infos
let getName1 = document.querySelector(".name1");
let getName2 = document.querySelector(".name2");
let jokeAnswer = document.querySelector("#joke");
let generateButton = document.querySelector("#generatorBtn");

// Choix d'une blague et d'un nom au hasard
let randomChoice = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

// Fonction générer une blague
const generateJoke = () => {
  getName1.textContent = jokesArray[randomChoice(jokesArray.length)].name;
  getName2.textContent = getName1.textContent;

  switch (getName1.textContent) {
    case joke1.name:
      jokeAnswer.textContent = joke1.answer;
      break;
    case joke2.name:
      jokeAnswer.textContent = joke2.answer;
      break;
    case joke3.name:
      jokeAnswer.textContent = joke3.answer;
      break;
    case joke4.name:
      jokeAnswer.textContent = joke4.answer;
      break;
    case joke5.name:
      jokeAnswer.textContent = joke5.answer;
      break;
    case joke6.name:
      jokeAnswer.textContent = joke6.answer;
      break;
    case joke7.name:
      jokeAnswer.textContent = joke7.answer;
      break;
    case joke8.name:
      jokeAnswer.textContent = joke8.answer;
      break;
    case joke9.name:
      jokeAnswer.textContent = joke9.answer;
      break;
  }
};

// Ajout de l'event sur le bouton
generateButton.addEventListener("click", generateJoke);
