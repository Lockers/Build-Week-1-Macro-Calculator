
// const results = document.querySelector('.result')
// function displayResults() {
//     results.style.display = 'flex'
// }
// const result = document.querySelector('.macroCalc')
// result.addEventListener('mouseover', displayResults())

function myFunction() {
    var x = document.getElementById("macroResults");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}