let ra = document.getElementById("word");
let cg = document.getElementById("category");
let lng = document.getElementById("lang");

let h1 = document.getElementById("hint1");
let h2 = document.getElementById("hint2");
let h3 = document.getElementById("hint3");
let h4 = document.getElementById("hint4");
let h5 = document.getElementById("hint5");

let p1 = document.getElementById("pwhint1");
let p2 = document.getElementById("pwhint2");
let p3 = document.getElementById("pwhint3");
let p4 = document.getElementById("pwhint4");
let p5 = document.getElementById("pwhint5");

let guess = document.getElementById("txtAns");
// ai 
let ai = document.getElementById("aiRespondent");
let rightAns = document.getElementById("rightAnswer");

//misc
const click = new Audio();
click.src = "/click.mp3";

const win = new Audio();
win.src = "/win.mp3";

const x = new Audio();
x.src = "/wronk.mp3";

const o = new Audio();
o.src = "/korik.mp3";

const p = new Audio();
p.src = "/maybe.mp3";


function clickAud(){
    click.play();
}



//for audit trails & display blocks
document.getElementById("btnNext2vo").onclick = function () {
    click.play();
    console.log("Word to guess: ",ra.value);
    console.log("Category: ", cg.value);
    console.log("Language: ", lng.value);

    //hide
    document.getElementById("homeFView").style.display = "none";
    //show
    document.getElementById("hintViewOo").style.display = "block";
}

document.getElementById("btnNext2vp").onclick = function () {
    click.play();
    console.log("OO Values:");
    console.log(h1.value);
    console.log(h2.value);
    console.log(h3.value);
    console.log(h4.value);
    console.log(h5.value);

    //hide
    document.getElementById("hintViewOo").style.display = "none";
    //show
    document.getElementById("hintViewPwd").style.display = "block";
}

document.getElementById("btnStart").onclick = function () {
    click.play();
    console.log("PWEDE Values:");
    console.log(p1.value);
    console.log(p2.value);
    console.log(p3.value);
    console.log(p4.value);
    console.log(p5.value);

    //hide
    document.getElementById("hintViewPwd").style.display = "none";
    //show
    document.getElementById("RemUI").style.display = "block";
}

document.getElementById("btnBack").onclick = function () {
    click.play();
    //hide
    document.getElementById("hintViewOo").style.display = "none";
    document.getElementById("hintViewPwd").style.display = "none";
    document.getElementById("RemUI").style.display = "none";
    //show
    document.getElementById("homeFView").style.display = "block";
}


//Program Logic trail
function playAud(){
    click.play();
}


document.getElementById("btnCheck").onclick = function () {

    if(guess.value == ra.value){
        console.log("user won!");
        //media utils
        win.play();
        //out
        ai.innerHTML = "That's it!";
        rightAns.innerHTML = ra.value;
        document.body.className = "green";
    }
    else if(guess.value == h1.value ||
            guess.value == h2.value ||
            guess.value == h3.value ||
            guess.value == h4.value ||
            guess.value == h5.value ||
            guess.value == cg.value ||
            guess.value == lng.value
        ){
            console.log("Oo");
            ai.innerHTML = "OO!";
            guess.value = "";
            document.body.className = "green";
            o.play();
    }
    else if(guess.value == p1.value ||
            guess.value == p2.value ||
            guess.value == p3.value ||
            guess.value == p4.value ||
            guess.value == p5.value
        ){
            console.log("Pwede");
            ai.innerHTML = "Pweeedeee....";
            guess.value = "";
            document.body.className = "yellow";
            p.play();
    }
    else {
        console.log("Hindi");
        ai.innerHTML = "Nah... Hindi!";
        guess.value = "";
        document.body.className = "red";
        x.play();
    }
}