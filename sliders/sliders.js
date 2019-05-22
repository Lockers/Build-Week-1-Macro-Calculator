// Get value from slider input and store into variable

const getGender = document.getElementById("gender");
const logSex = document.getElementById("sex");

// Update the current slider value (each time you drag the slider handle)
// output if is male or female based on input (1 = male, 2 = female)
getGender.oninput = function () {
    if (this.value === '1')
    {
        logSex.innerHTML = ` I am Male`;
    }
    else
        logSex.innerHTML = `I am Female`;
}

// Get age, and store to variable, display output value from slider input

const getAge = document.getElementById("age");
const logAge = document.getElementById("logAge");

// Update the current slider value (each time you drag the slider handle)
getAge.oninput = function () {
    logAge.innerHTML = `I am ${this.value} years young`;
}

// Get height, and store to variable, display output value from slider input

const getHeight = document.getElementById("height");
const logHeight = document.getElementById("heightHead");

// // Update the current slider value (each time you drag the slider handle)
getHeight.oninput = function () {
    logHeight.innerHTML = `Current Height is ${this.value}cm`;
}

// Get weight, and store to variable, display output value from slider input

const getWeight = document.getElementById("weight");
const logWeight = document.getElementById("weightHead");

// // Update the current slider value (each time you drag the slider handle)
getWeight.oninput = function () {
    logWeight.innerHTML = `Current Weight is ${this.value}lbs`;
}

// Get goal weight, and store to variable, display output value from slider input

const getGoalWeight = document.getElementById("goalWeight");
const logGoalWeight = document.getElementById("GoalWeightHead");

// // Update the current slider value (each time you drag the slider handle)
getGoalWeight.oninput = function () {
    logGoalWeight.innerHTML = `Your goal Weight is ${this.value}lbs`;
}