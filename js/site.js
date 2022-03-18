// Retrieve user input
// Controller function
function getString() {

    document.getElementById("alert").classList.add("invisible");

    let userInput = document.getElementById("userString").value;

    let reversedString = reverseString(userInput);

    displayString(reversedString);

}

// Reverse the string
// Logic function
function reverseString(userInput) {

    let characters = [];

    // Reverse the string using a for loop

    for (let i = userInput.length - 1; i >=0; i--)
    {
        characters += userInput[i];
    }

    return characters;

}

// Display the result
// View function
function displayString(reversedString) {

    // Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`;

    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}