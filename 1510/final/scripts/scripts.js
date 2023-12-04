/*
 * Name: Davin Asiala
 * Filename: scripts.js
 * Date: 12/3/2023
*/

//Global variables
var answers = document.querySelector("#answers p");
var heading = document.querySelector("#answers h2");

//Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#a9d3b0";
    }
    else {
        navlinks.style.display = "block";
        menuicon.style.color = "#01240e"
    }
}

//Function to diplay the first answer
function ans1() {
    heading.style.display = "block";
    answers.textContent = "The bare minimum turntable I would recommend is the Audio Technica AT-LP60X.  The needle won't ruin your records and the built in phono pre-amp makes hooking up to a sound system or powered speakers a breeze.  To get started any pair of powered bookshelf speakers will work or if you already have a receiver amp hooked up to speakers you can use that, too!";
}

function ans2() {
    heading.style.display = "block";
    answers.textContent = "Keep them in their sleeves away from moisture and heat.  There are a variety of cleaning kits out there to keep your records dust free, but the minimum I would recommend is at least an anti-static brush.";
}

function ans3() {
    heading.style.display = "block";
    answers.textContent = "Yes!  In fact, it's become a popular physical media format.  They even sell new records at big box stores like Wal-Mart and Target.  Some of them are even exclusive to that store (Taylor Swifts re-releases on colored vinyl are a Target exclusive for example)";
}

function ans4() {
    heading.style.display = "block";
    answers.textContent = "Head over to our sign up page and fill out the form today!";
}