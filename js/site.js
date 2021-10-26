// Grab HTML Values

function getValues() {

    // HTML Input ID's
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Change Values From String to Int

    startValue.parseInt(startValue);
    endValue.parseInt(endValue);

    // Validate Ints are True Numbers

    if (Numbers.isInterger(startValue) && Numbers.isInterger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("Please Enter a Number from 0 to 100");
    }
}

// Generate Numbers from startValue to endValue
function generateNumbers(sValue, eValue) {
    // Declare Array To Pass Numbers Into
    let numbers = [];

    // Range of Numbers
    for (let index = sValue; index <= eValue; index++) {
    // Push Range of Numbers into the Array
        numbers.push(index);
    }

    return numbers;
}


function displayNumbers(numbers){
    // Display Numbers to Screen
    
    let templateRows = "";

   
    // Loop Through Range of Numbers for Display
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";

        let number = numbers[index];

    // Decide Which Even Numbers to Bold
    if (number % 2 == 0) {
          className = "even";
    
        } else {
         
        className = "odd";
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;
}   





















































function getValues () {
// Get Values from Page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

// Convert String Values into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


// Validate Integers    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers =  generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("Enter Valid Integer from 0 to 100.");
    }
}


// function generateNumbers(sValue, eValue) {
//     let numbers = [];

//     for (let index = sValue; index <= eValue; index++) {
//         numbers.push(index);
//     }

//     return numbers;
// }


// function displayNumbers(numbers) {

//     let templateRows = "";

//     for (let index = 0; index < numbers.length; index++) {

//         let className = "even";

//         let number = numbers[index];

//         if (number % 2 == 0) {
//             className = "even";
//         }
//         else {
//             className = "odd";
//         }


//         templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
//     }

//     document.getElementById("results").innerHTML = templateRows;

// }

