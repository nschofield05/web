var isAdmin = false;

var root = document.querySelector(':root');
var dropdown = document.getElementById("paletteDropdown");
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];

window.onload = loadPrefs;

function setAccent(color){
    root.style.setProperty('--accentcolor', color);
    savePrefs();
    dropdown.style.display = "none";
}

function togglePalettes(){
    if (dropdown.style.display !== "block"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none";
    }
}

function toggleNav(){
    if (nav.style.left !== "0px"){
        nav.style.left = "0px";
    }
    else{
        nav.style.left = "calc(0px - 13%)";
    }
}

function savePrefs(){
    localStorage.setItem('accentColor', root.style.getPropertyValue('--accentcolor'));
}

function loadPrefs(){
    var ac = localStorage.getItem('accentColor');
    var ia = localStorage.getItem('isAdmin');
    setAccent(ac);
    if (ia == 'true'){
        setAdmin();
    }
}

function toggleLogIn(){
    var logIn = document.getElementById("log-in");

    if (logIn.style.display !== "block"){
        logIn.style.display = "block";
        logIn.style.pointerEvents = "all"
        header.style.pointerEvents = "none"
    }
    else{
        logIn.style.display = "none";
        logIn.style.pointerEvents = "none"
        header.style.pointerEvents = "all"
    }

}

function attemptLogIn(){
    var uname = document.getElementById('uname').value;
    var pswrd = document.getElementById('pswrd').value;

    if (uname === "nthndv" && pswrd === "Variable1234"){
        setAdmin();
    }
}

function setAdmin(){
    var writeButton = document.getElementsByClassName("write-button")[0];

    isAdmin = true;
    localStorage.setItem('isAdmin', isAdmin);

    writeButton.style.display = "block";

}