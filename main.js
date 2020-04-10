function difference() {
    var a = document.getElementById("alter1").value;
    var b = document.getElementById("alter2").value;
    var c = a - b;
    document.getElementById("ergebnis").innerText = "Der Unterschied beträgt " + c + " Jahre";
}