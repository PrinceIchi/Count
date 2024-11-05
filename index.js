let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let countTotal = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = [];
    countStr.push(count);

    let prevEntry = [];
    prevEntry.push(count)

    saveEl.textContent += countStr + ' , ';
    countEl.textContent = 0;
    count = 0;
    
for (let i = 0; i < prevEntry.length; i++) {
    countTotal += prevEntry[i];
    totalEl.textContent = "Total: " + countTotal
}
}

function reset() {
    countTotal = 0
    saveEl.textContent = "Previous Entries: "
    totalEl.textContent = "Total: "
}