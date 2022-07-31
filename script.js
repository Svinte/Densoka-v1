const body = document.body;
const style = document.createElement("link");
style.href="/style.css";
style.rel="stylesheet";
style.type="text/css";
document.head.appendChild(style);
const selection = document.createElement("div");
selection.id="§";
selection.style.height = window.innerHeight+"px";
body.appendChild(selection);
const opse = document.createElement("button");
opse.id = "open";
opse.innerHTML="&#9776;";
body.appendChild(opse);
const exit = document.createElement("h1");
exit.id="exit";
exit.innerText="X";
const b1 = document.createElement("h1");
b1.innerText="Koti";
b1.className="sb";
const b2 = document.createElement("h1");
b2.innerText="Tietoa pelistä";
b2.className="sb";
const b3 = document.createElement("h1");
b3.innerText="Tietoa kirjasta";
b3.className="sb";
const b4 = document.createElement("h1");
b4.innerText="Minecraft server";
b4.className="sb";
const b5 = document.createElement("h1");
b5.innerText="Youtube kanava";
b5.className="sb";
const b6 = document.createElement("h1");
b6.innerText="Discord server";
b6.className="sb";
const b7 = document.createElement("h1");
b7.innerText="Clan liittyminen";
b7.className="sb";
const b8 = document.createElement("h1");
b8.innerText="muuta densokasta";
b8.className="sb";
selection.appendChild(exit);
selection.appendChild(b1);
b1.style.marginTop="17vh";
selection.appendChild(b2);
selection.appendChild(b3);
selection.appendChild(b4);
selection.appendChild(b5);
selection.appendChild(b6);
selection.appendChild(b7);
selection.appendChild(b8);
document.getElementById("exit").onclick = close;
document.getElementById("open").onclick = open;
document.onkeyup = function (p) {
if (p.keyCode == 32 || p.keyCode == 13 || p.keyCode == 27 || p.keyCode == 17) {
        if (document.getElementById("open").style.display == "none") {
            close();
        }   else open();
    }
}
function close() {
    selection.style.display="none";
    opse.style.display="block";
}
function open() {
    selection.style.display="block";
    opse.style.display="none";
}