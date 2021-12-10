let upper = document.getElementById("upper-case");

upper.addEventListener('click', function (){
    let words = document.querySelector('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');
});

let lower = document.getElementById("lower-case");

lower.addEventListener('click', function() {
    let words = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = words.join(' ');
});

let proper = document.getElementById("proper-case");

proper.addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    document.querySelector("textarea").value = words.join(" ");
});

let sentence = document.getElementById("sentence-case");

sentence.addEventListener("click", function () {
    let splitString = document.querySelector("textarea").value.toLowerCase().split(". ");
    let x = [];

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].charAt(0) !== " ") {
            x[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        } else if (splitString[i].charAt(0) === " ") {
            x[i] = splitString[i].charAt(1).toUpperCase() + splitString[i].slice(2);
        }
    }
    document.querySelector("textarea").value = x.join(". ");
});

let saveFile = document.getElementById("save-text-file");
let content = document.querySelector("textarea").value;
saveFile.addEventListener("click", function() {
    download("text.txt", document.querySelector("textarea").value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}








