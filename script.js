function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

/* Erase one character */
function erase() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}
