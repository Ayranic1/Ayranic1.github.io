//funciones para las cartas de la galeria de diseño
//Diseño 1
document.getElementById("img-carta1").addEventListener("click", displayinfo1);
let flag1 = true;
function displayinfo1 () {

    if (flag1==true) {
        document.getElementById("info-design1").style.display="Block";
        flag1=false;
    }else{
        document.getElementById("info-design1").style.display="none";
        flag1 = true
    }
}

//Diseño 2
document.getElementById("img-carta2").addEventListener("click", displayinfo2);
let flag2 = true;
function displayinfo2 () {

    if (flag2==true) {
        document.getElementById("info-design2").style.display="Block";
        flag2=false;
    }else{
        document.getElementById("info-design2").style.display="none";
        flag2 = true
    }
}

//Diseño 3
document.getElementById("img-carta3").addEventListener("click", displayinfo3);
let flag3 = true;
function displayinfo3 () {

    if (flag3==true) {
        document.getElementById("info-design3").style.display="Block";
        flag3=false;
    }else{
        document.getElementById("info-design3").style.display="none";
        flag3 = true
    }
}

//Diseño 4
document.getElementById("img-carta4").addEventListener("click", displayinfo4);
let flag4 = true;
function displayinfo4 () {
    if (flag4==true) {
        document.getElementById("info-design4").style.display="Block";
        flag4=false;
    }else{
        document.getElementById("info-design4").style.display="none";
        flag4 = true
    }
}

//Diseño 5
document.getElementById("img-carta5").addEventListener("click", displayinfo5);
let flag5 = true;
function displayinfo5 () {
    if (flag5==true) {
        document.getElementById("info-design5").style.display="Block";
        flag5=false;
    }else{
        document.getElementById("info-design5").style.display="none";
        flag5 = true
    }
}

//Diseño 6
document.getElementById("img-carta6").addEventListener("click", displayinfo6);
let flag6 = true;
function displayinfo6 () {
    if (flag6==true) {
        document.getElementById("info-design6").style.display="Block";
        flag6=false;
    }else{
        document.getElementById("info-design6").style.display="none";
        flag6 = true
    }
}


//funcion mail de Clientes


//Cliente 1
document.getElementById("btn-cl1").addEventListener('click', funemail1);
let band1 = true;
function funemail1() {
    if (band1==true) {
        document.getElementById("btn-cl1").style.border="transparent";
        document.getElementById('email1').style.display="block";
        document.getElementById("contmail1").style.border="2px solid #f1f1f1"
        band1=false;
    }else{
        document.getElementById('email1').style.display="none";
        document.getElementById("btn-cl1").style.border="2px solid #f1f1f1";
        document.getElementById("contmail1").style.border="transparent"
        band1=true;
    }
}
//Cliente 2
document.getElementById("btn-cl2").addEventListener('click', funemail2);
let band2 = true;
function funemail2() {
    if (band2==true) {
        document.getElementById("btn-cl2").style.border="transparent";
        document.getElementById('email2').style.display="block";
        document.getElementById("contmail2").style.border="2px solid #f1f1f1"
        band2=false;
    }else{
        document.getElementById('email2').style.display="none";
        document.getElementById("btn-cl2").style.border="2px solid #f1f1f1";
        document.getElementById("contmail2").style.border="transparent"
        band2=true;
    }
}
//Cliente 3
document.getElementById("btn-cl3").addEventListener('click', funemail3);
let band3 = true;
function funemail3() {
    if (band3==true) {
        document.getElementById("btn-cl3").style.border="transparent";
        document.getElementById('email3').style.display="block";
        document.getElementById("contmail3").style.border="2px solid #f1f1f1"
        band3=false;
    }else{
        document.getElementById('email3').style.display="none";
        document.getElementById("btn-cl3").style.border="2px solid #f1f1f1";
        document.getElementById("contmail3").style.border="transparent"
        band3=true;
    }
}