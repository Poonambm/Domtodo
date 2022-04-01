window.onload = function () {
    var button = document.getElementById("AddButton");
    button.onclick = addItem;
}

function addItem() {
    var textInput = document.getElementById("input");
    var text = textInput.value;
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.innerHTML = text;
    li.onclick = function () { this.parentNode.removeChild(this); }
    ul.appendChild(li);
    document.getElementById("input").value = "";
}

