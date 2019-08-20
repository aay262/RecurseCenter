function cracklePop() {
    var i;
    var text = "";
    var cracklePopText;
    for (i = 0; i < 101; i++) {
        if (i % 5 === 0 && i % 3 === 0) { 
            cracklePopText = "CracklePop";
            text += cracklePopText + "<br>";
        }
        else if (i % 3 === 0){
            cracklePopText = "Crackle";
            text += cracklePopText + "<br>";
        }
        else if (i % 5 === 0) {
            cracklePopText = "Pop";
            text += cracklePopText + "<br>";
            }
        else {
            text += i + "<br>";
        }
    }
            document.getElementById("cpText").innerHTML = text;
}
