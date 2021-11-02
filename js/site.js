// Get Input Value
function getValues() {
    
    // Grab Input Values
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    // Change Strings into Integer Values
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Make sure numbers passed in are integers 
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Generate Numbers
        let numbers = generateNumbers(startValue, endValue);
        // Display Results
        displayNumbers(numbers);
    } else {
        alert("Please put in Integer values only....");
    }

}

// Generate Numbers
function generateNumbers(sValue, eValue) {
    
    // Array Variable to Pass Numbers Into
    let numbers = [];

    // Create Range of Numbers
    for (let index = sValue; index <= eValue; index++) {
        // Push the values into array
        numbers.push(index);
    }

    return numbers;
}

// Display Numbers
function displayNumbers(numbers) {
    // Display numbers to screen
    let templateRow = "";

    // Loop through array of numbers for display
    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";

        let number = numbers[index];
        
        // Decide which numbers to Bold
        if(number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRow += `<tr><td class="${className}">${number}</td></tr>`;

    }
    
    document.getElementById("results").innerHTML = templateRow;

    
}













































