var colorArray = ["aliceBlue", "antiqueWhite", "aqua", "aquamarine", "azure", "beige",
"bisque", "black", "blanchedAlmond", "blue", "blueViolet", "brown",
"burlyWood", "cadetBlue", "chartreuse", "chocolate", "coral", "cornflowerBlue",
"cornsilk", "crimson", "cyan", "darkBlue", "darkCyan", "darkGoldenRod",
"red", "orange", "yellow", "green", "purple"];
var animalArray = ["cat", "pig", "monkey", "dog","horse", "rhino", "elephant", "cow", "whale", "dolphin"];
var outputDiv = document.querySelectorAll(".output")[0];

function getRandomElement(choiceArray) {
    randomElement = Math.floor(Math.random() * (choiceArray.length - 1));
    return choiceArray[randomElement];
}

outputDiv.innerHTML = `${getRandomElement(colorArray)}-${getRandomElement(animalArray)}`;
