let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let countTotal = 0

function add() {
    count += 1
    countEl.textContent = count
}

function subtract() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = [];
    countStr.push(count);

    for (let i = 0; i < countStr.length; i++) {
        countTotal += countStr[i];
        totalEl.textContent = "Total: " + countTotal
    }
    
    saveEl.textContent += countStr + ' , ';
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    countTotal = 0
    saveEl.textContent = "Previous Entries: "
    totalEl.textContent = "Total: "
}