let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];
let btn1 = document.getElementById('btn1');


// ****EventListener for btn 1******

btn1.addEventListener('click', function (e) {
    e.preventDefault();
    let value = "S";
    function output() {
        if (cpu === "S" && value) {
            return "Nobody wins";
        }
        else if (cpu === "W" && value) {
            return "You win.";
        }
        else if (cpu === "G" && value) {
            return "Computer wins.";
        } 
    }
    // ****Displaying the result******
    let result = document.getElementById('result').innerHTML += output();
})

// ****EventListener for btn 2******

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function (e) {
    e.preventDefault();
    let value = "W";
    function output() {
        if (cpu === "W" && value) {
            return "Nobody wins";
        }
        else if (cpu === "S" && value) {
            return "Computer wins.";
        }
        else if (cpu === "G" && value) {
            return "You win.";
        } 
    }
    // ****Displaying the result******
    let result = document.getElementById('result').innerHTML= output();
})

// ****EventListener for btn 3******

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function (e) {
    e.preventDefault();
    let value = "G";
    function output() {
        if (cpu === "G" && value) {
            return "Nobody wins";
        }
        else if (cpu === "S" && value) {
            return "You win.";
        }
        else if (cpu === "W" && value) {
            return "Computer wins.";
        } 
    }
    // ****Displaying the result******
    let result = document.getElementById('result').innerHTML= output();
})
