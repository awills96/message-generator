const breads = ["Brioche", "Rye", "French", "Focaccia", "Lettuce Wrap"]
const cheeses = ["American", "Swiss", "Provolone", "Gouda", "Pepper Jack"]
const meats = ["Ham", "Turkey", "Roast Beef", "Salami", "Chicken"]

const chooseRandomListItem = list => {
    return list[(Math.floor(Math.random() * list.length))]
}

const generateRandomSandwich = () => {
    let bread = chooseRandomListItem(breads);
    if (bread !== "Lettuce Wrap") { // Format the output to be grammatically correct for lettuce wrap vs. typical breads
        bread = bread + " bread";
    } else {
        bread = "a " + bread;
    }
    return `You got a sandwich with ${chooseRandomListItem(meats)} and ${chooseRandomListItem(cheeses)} on ${bread}!`
}

console.log(generateRandomSandwich());