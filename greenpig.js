// GitHub repo naming

var colorArray = ["aliceBlue", "antiqueWhite", "aqua", "aquamarine", "azure", "beige",
"bisque", "black", "blanchedAlmond", "blue", "blueViolet", "brown",
"burlyWood", "cadetBlue", "chartreuse", "chocolate", "coral", "cornflowerBlue",
"cornsilk", "crimson", "cyan", "darkBlue", "darkCyan", "darkGoldenRod",
"red", "orange", "yellow", "green", "purple"
];

var animalArray = ["crake","buffalo", "eagle", "lion", "lynx", "porcupine", "hedgehog", "snake",
"lizard", "turtle", "rabbit", "hare", "mouse", "rat", "squirrel", "cat", "pig", "monkey", "dog",
"horse", "rhino", "elephant", "cow", "whale", "dolphin", "wallaby", "kangaroo", "fox", "tern", "lemming",
"zebra", "gecko", "mongoose", "deer", "penguin", "barracuda"
];

var outputDiv = document.querySelectorAll(".output")[0];

function getRandomElement(choiceArray) {
    randomElement = Math.floor(Math.random() * (choiceArray.length - 1));
    return choiceArray[randomElement];
}

var namesText = "";
for(var i = 0; i < 10; i++) {
    namesText += getRandomElement(colorArray) + "-" getRandomElement(animalArray) + "<br/>";
}
outputDiv.innerHTML = namesText;

