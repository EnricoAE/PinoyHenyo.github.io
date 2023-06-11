//input assignments
let guess = document.getElementById("txtAns");
let guessM = document.getElementById("txtAnsM");
let guessE = document.getElementById("txtAnsE");
let check = document.getElementById("btnCheck");
let checkM = document.getElementById("btnMCheck");
let checkE = document.getElementById("btnECheck");

//Difficulty setters / buttons
let hard = document.getElementById("btnHard");
let mid = document.getElementById("btnMedium");
let ez = document.getElementById("btnEasy");
let bck = document.getElementById("btnBack");
let bckM = document.getElementById("btnMBack");
let bckE = document.getElementById("btnEBack");
//Block view ids
///let hfv = document.getElementById("homeFView");

//display and ai
let rightAns = document.getElementById("rightAnswer");
let rightAnsM = document.getElementById("rightAnswerM");
let rightAnsE = document.getElementById("rightAnswerE");
let ai = document.getElementById("aiRespondent");
let aiM = document.getElementById("aiRespondentM");
let aiE = document.getElementById("aiRespondentE");

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

//Actual gameplay logic trail
//HHAAAARRRRDDD
hard.onclick = function () {
    click.play();
    //switch block view
        //HIDE
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "none";
        //SHOW
    let hv = document.getElementById("hardView");
    hv.style.display = "block";

    console.log("Hard difficulty set!");
    
        //array list of possible keywords
    const pick = ['pantalon', 'kalyo', 'crocodile', 'magellan\'s cross', 'monggo', 'napkin', 'traffic enforcer', 'fried chicken', 'pandesal', 'computer', 'microphone'];
        //this selects random index in the array list
    const randomPosition = Math.floor(Math.random() * pick.length);
        //this will pick the matching value of the index
    const randomItem = pick[randomPosition];
    console.log('Word to guess: ' + randomItem);


    check.onclick = function () {
        console.log("Checking");
        

        //Correct answer
        if(guess.value == randomItem){
            win.play();
            ai.innerHTML = "That's it!";
            rightAns.innerHTML = randomItem;
            document.body.className = "";
        }
        //pantalon
        else if(randomItem == 'pantalon' && (
            guess.value == 'bagay' || 
            guess.value == 'sinusuot' || 
            guess.value == 'mahaba' || 
            guess.value == 'pang-ibaba' || 
            guess.value == 'tagalog'
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();  
        }
        else if(randomItem == 'pantalon' && (
            guess.value == 'pangbabae' || 
            guess.value == 'panglalaki' || 
            guess.value == 'pang araw-araw' || 
            guess.value == 'ginagamit sa uniform' || 
            guess.value == 'pang porma'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();     
        }

        //kalyo
        else if(randomItem == 'kalyo' && (
            guess.value == 'parte ng katawan' || 
            guess.value == 'sa kamay' || 
            guess.value == 'sa paa' || 
            guess.value == 'nagagamot' || 
            guess.value == 'tagalog'
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();     
        }
        else if(randomItem == 'kalyo' && (
            guess.value == 'parte ng katawan' || 
            guess.value == 'tinatanggal' || 
            guess.value == 'tumutubo' || 
            guess.value == 'magaspang' || 
            guess.value == 'makapal' || 
            guess.value == 'matigas'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //crocodile
        else if(randomItem == 'crocodile' && (
            guess.value == 'hayop' || 
            guess.value == 'nasa wild' || 
            guess.value == 'matapang' || 
            guess.value == 'nakikita sa zoo' || 
            guess.value == 'apat paa' || 
            guess.value == 'english'
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'crocodile' && (
            guess.value == 'sa tubig' || 
            guess.value == 'sa lupa' || 
            guess.value == 'mahaba' || 
            guess.value == 'malaki' || 
            guess.value == 'kinatatakutan' || 
            guess.value == 'kinakain'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }
        
        //magellan\'s cross
        else if(randomItem == 'magellan\'s cross' && (
            guess.value == 'lugar' || 
            guess.value == 'nasa pinas' || 
            guess.value == 'historical place' || 
            guess.value == 'nasa probinsya' || 
            guess.value == 'sa cebu' || 
            guess.value == 'tourist spot' || 
            guess.value == 'english'
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'magellan\'s cross' && (
            guess.value == 'lagi pinupuntahan' || 
            guess.value == 'nakatayo parin ngayon' || 
            guess.value == 'sikat na lugar' || 
            guess.value == 'visayas'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //monggo
        else if(randomItem == 'monggo' && (
            guess.value == 'pagkain' || 
            guess.value == 'gulay' || 
            guess.value == 'rekado' || 
            guess.value == 'maliit' || 
            guess.value == 'tinatanim' || 
            guess.value == 'sinasabawan'
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'monggo' && (
            guess.value == 'lagiing kinakain' || 
            guess.value == 'lutong pinoy' || 
            guess.value == 'nahahanap sa palengke' || 
            guess.value == 'ginagataan' ||
            guess.value == 'english' ||
            guess.value == 'tagalog'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //napkin
        else if(randomItem == 'napkin' && (
            guess.value == 'bagay' || 
            guess.value == 'ginagamit sa katawan' || 
            guess.value == 'sa katawan' || 
            guess.value == 'sinusuot' || 
            guess.value == 'para sa babae' || 
            guess.value == 'sa babae' || 
            guess.value == 'importante sa babae' || 
            guess.value == 'english' || 
            guess.value == 'pads'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'napkin' && (
            guess.value == 'ginagamit araw-araw' || 
            guess.value == 'sa trabaho' || 
            guess.value == 'sa school' || 
            guess.value == 'laging nasa bag' || 
            guess.value == 'ginagamit ng matanda' || 
            guess.value == 'para sa bata'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //traffic enforcer
        else if(randomItem == 'traffic enforcer' && (
            guess.value == 'tao' || 
            guess.value == 'nakikita sa daan' || 
            guess.value == 'lgu' || 
            guess.value == 'nanghuhuli' || 
            guess.value == 'nakamotor' || 
            guess.value == 'nakikita lagi' || 
            guess.value == 'english'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'traffic enforcer' && (
            guess.value == 'naka kotse' || 
            guess.value == 'parte ng pulis'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //fried chicken
        else if(randomItem == 'fried chicken' && (
            guess.value == 'pagkain' || 
            guess.value == 'solid food' || 
            guess.value == 'fried' || 
            guess.value == 'lagin kinakain' || 
            guess.value == 'sa fastfood' || 
            guess.value == 'sa jollibee' || 
            guess.value == 'english' || 
            guess.value == 'masarap'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'fried chicken' && (
            guess.value == 'madaling lutuin' || 
            guess.value == 'pang lunch' || 
            guess.value == 'pang-tanghalian' || 
            guess.value == 'pang-meryenda'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //pandesal
        else if(randomItem == 'pandesal' && (
            guess.value == 'pagkain' || 
            guess.value == 'malambot' || 
            guess.value == 'pastry' || 
            guess.value == 'lagin kinakain' || 
            guess.value == 'pang-umagahan' || 
            guess.value == 'pang-almusal' || 
            guess.value == 'tagalog' || 
            guess.value == 'pinapalamanan' || 
            guess.value == 'sa bakery'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'pandesal' && (
            guess.value == 'sa tindahan' || 
            guess.value == 'sa mall' || 
            guess.value == 'kasama sa kape' || 
            guess.value == 'pang-meryenda' || 
            guess.value == 'kasama sa gatas'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //computer
        else if(randomItem == 'computer' && (
            guess.value == 'bagay' || 
            guess.value == 'malaki' || 
            guess.value == 'binubuo' || 
            guess.value == 'sa office' || 
            guess.value == 'pang-work' || 
            guess.value == 'english'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'computer' && (
            guess.value == 'sa school' || 
            guess.value == 'sa mall' || 
            guess.value == 'sa bahay' || 
            guess.value == 'pang-games'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }

        //microphone
        else if(randomItem == 'microphone' && (
            guess.value == 'bagay' || 
            guess.value == 'mahaba' || 
            guess.value == 'matigas' || 
            guess.value == 'pang-music' || 
            guess.value == 'ginagamit sa karaoke' || 
            guess.value == 'english' || 
            guess.value == 'para sa boses' || 
            guess.value == 'ginagamit sa stage'
            
            )){
                //Alerts and notification area
                ai.innerHTML = "Oo!";
                guess.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play();    
        }
        else if(randomItem == 'microphone' && (
            guess.value == 'hawak ng host' || 
            guess.value == 'pang kanta' || 
            guess.value == 'sa bahay' || 
            guess.value == 'pang-concert'
            )){
                //Alerts and notification area
                ai.innerHTML = "Pwede...";
                guess.value = "";   
                document.body.className = "yellow";
                p.play();          
        }
        
        else{
            ai.innerHTML = "Hindi!";
            guess.value = "";
            document.body.className = "red";
            x.play();
        }


    }
}

//MEEEDDIIIUUUUMMMM
mid.onclick = function () {
    click.play();
    //switch block view
        //HIDE
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "none";
        //SHOW
    let m = document.getElementById("midView");
    m.style.display = "block";

    console.log("Medium difficulty set!");
    
        //array list of possible keywords
    const pick = ['kwek-kwek', 'dingdong dantes', 'susi', 'kambing', 'pinggan', 'sandok', 'baboy', 'tabo', 'bike', 'relo', 'tissue', 'baso', 'upuan'];
        //this selects random index in the array list
    const randomPosition = Math.floor(Math.random() * pick.length);
        //this will pick the matching value of the index
    const randomItem = pick[randomPosition];
    console.log('Word to guess: ' + randomItem);


    checkM.onclick = function () {
        console.log("Checking");
        if(guessM.value == randomItem){
            win.play();
            aiM.innerHTML = "That's it!";
            rightAnsM.innerHTML = randomItem;
        }

        //kwek-kwek
        else if(randomItem == 'kwek-kwek' && (
            guessM.value == 'pagkain' || 
            guessM.value == 'tagalog' || 
            guessM.value == 'laging kinakain' || 
            guessM.value == 'street food' || 
            guessM.value == 'sinasawsaw' || 
            guessM.value == 'sinasawsaw sa suka' || 
            guessM.value == 'may itlog' || 
            guessM.value == 'kulay orange'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'kwek-kwek' && (
            guessM.value == 'nakalagay sa cup' || 
            guessM.value == 'nakatuhog' || 
            guessM.value == 'nasa stick' || 
            guessM.value == 'nakikita kahit saan' || 
            guessM.value == 'nakakain sa bahay' || 
            guessM.value == 'piniprito'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //dingdong dantes
        else if(randomItem == 'dingdong dantes' && (
            guessM.value == 'tao' || 
            guessM.value == 'sikat' || 
            guessM.value == 'nasa gma' || 
            guessM.value == 'lalaki' || 
            guessM.value == 'artista' || 
            guessM.value == 'nakikita sa tv' || 
            guessM.value == 'sa tv'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'dingdong dantes' && (
            guessM.value == 'negosyante' || 
            guessM.value == 'may asawa na' || 
            guessM.value == 'sikat din asawa' || 
            guessM.value == 'host' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //susi
        else if(randomItem == 'susi' && (
            guessM.value == 'bagay' || 
            guessM.value == 'ginagamit ng tao' || 
            guessM.value == 'maliit' || 
            guessM.value == 'lalaki' || 
            guessM.value == 'dala palagi' || 
            guessM.value == 'nasa bag'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'susi' && (
            guessM.value == 'para sa bahay' || 
            guessM.value == 'gamit sa araw-araw' || 
            guessM.value == 'nasa keychain' || 
            guessM.value == 'para sa kotse' || 
            guessM.value == 'para sa cabinet'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //kambing
        else if(randomItem == 'kambing' && (
            guessM.value == 'hayop' || 
            guessM.value == 'pwede alagaan' || 
            guessM.value == 'apat ang paa' || 
            guessM.value == 'may sungay' || 
            guessM.value == 'nakikita sa probinsya' || 
            guessM.value == 'sa probinsya' || 
            guessM.value == 'maliit'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'kambing' && (
            guessM.value == 'sa bahay' || 
            guessM.value == 'nakikita sa bahay' ||
            guessM.value == 'kinakain' || 
            guessM.value == 'mabalahibo' || 
            guessM.value == 'kumakain ng damo' || 
            guessM.value == 'para sa cabinet'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //pinggan
        else if(randomItem == 'pinggan' && (
            guessM.value == 'bagay' || 
            guessM.value == 'sa bahay' || 
            guessM.value == 'lagi ginagamit' || 
            guessM.value == 'sa kusina' || 
            guessM.value == 'sa lamesa' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'pinggan' && (
            guessM.value == 'nilalagyan ng ulam' || 
            guessM.value == 'nababasag' ||
            guessM.value == 'babasagin' || 
            guessM.value == 'hinuhugasan' || 
            guessM.value == 'ayaw ng emo' || 
            guessM.value == 'nakaka-depress daw' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //sandok
        else if(randomItem == 'sandok' && (
            guessM.value == 'bagay' || 
            guessM.value == 'sa bahay' || 
            guessM.value == 'pangluto' || 
            guessM.value == 'ginagamit sa pagluluto' || 
            guessM.value == 'sa kusina' || 
            guessM.value == 'pangkuha ng pagkain'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'sandok' && (
            guessM.value == 'ginagamit sa araw-araw' || 
            guessM.value == 'laging ginagamit' ||
            guessM.value == 'babasagin' || 
            guessM.value == 'bakal' || 
            guessM.value == 'plastic'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //baboy
        else if(randomItem == 'baboy' && (
            guessM.value == 'hayop' || 
            guessM.value == 'sa farm' || 
            guessM.value == 'mataba' || 
            guessM.value == 'inuulam' || 
            guessM.value == 'pang sinigang' || 
            guessM.value == 'tagalog'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'baboy' && (
            guessM.value == 'nakikita sa palengke' || 
            guessM.value == 'sa supermarket' ||
            guessM.value == 'inaalagaan' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //tabo
        else if(randomItem == 'tabo' && (
            guessM.value == 'bagay' || 
            guessM.value == 'sa cr' || 
            guessM.value == 'ginagamit ng tao' || 
            guessM.value == 'pangkuha ng tubig' || 
            guessM.value == 'para sa tubig' || 
            guessM.value == 'tagalog'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'tabo' && (
            guessM.value == 'sa bahay' || 
            guessM.value == 'sa public place' ||
            guessM.value == 'sa mall' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //bike
        else if(randomItem == 'bike' && (
            guessM.value == 'bagay' || 
            guessM.value == 'nasasakyan' || 
            guessM.value == 'dalawa gulong' || 
            guessM.value == 'pang excercise' || 
            guessM.value == 'mabagal' || 
            guessM.value == 'english'  
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'bike' && (
            guessM.value == 'sa labas' || 
            guessM.value == 'pang transpo'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //relo
        else if(randomItem == 'relo' && (
            guessM.value == 'bagay' || 
            guessM.value == 'maliit' || 
            guessM.value == 'lagi ginagamit' || 
            guessM.value == 'tagalog' || 
            guessM.value == 'sinusuot' || 
            guessM.value == 'sinusuot sa kamay' || 
            guessM.value == 'sa kamay' || 
            guessM.value == 'nagsasabi ng oras' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'relo' && (
            guessM.value == 'ginagamit sa labas' || 
            guessM.value == 'ginagamit sa bahay' || 
            guessM.value == 'pang-lalaki' || 
            guessM.value == 'pang-babae' || 
            guessM.value == 'pang-occasion'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //tissue
        else if(randomItem == 'tissue' && (
            guessM.value == 'bagay' || 
            guessM.value == 'maliit' || 
            guessM.value == 'manipis' || 
            guessM.value == 'pamunas' || 
            guessM.value == 'nakarolyo' || 
            guessM.value == 'kulay puti' ||
            guessM.value == 'ginagamit sa cr' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'tissue' && (
            guessM.value == 'ginagamit sa labas' || 
            guessM.value == 'ginagamit sa kusina' || 
            guessM.value == 'nasa restaurant' || 
            guessM.value == 'sa fastfood'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //baso
        else if(randomItem == 'baso' && (
            guessM.value == 'bagay' || 
            guessM.value == 'sa kusina' || 
            guessM.value == 'inumin' || 
            guessM.value == 'pang-inom' || 
            guessM.value == 'para sa tubig' || 
            guessM.value == 'nasa retaurant' ||
            guessM.value == 'nasa fastfood' 
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'baso' && (
            guessM.value == 'bakal' || 
            guessM.value == 'babasagin' || 
            guessM.value == 'plastic' || 
            guessM.value == 'malaki' || 
            guessM.value == 'maliit'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //upuan
        else if(randomItem == 'upuan' && (
            guessM.value == 'bagay' || 
            guessM.value == 'lagi ginagamit' || 
            guessM.value == 'pang-pahinga' || 
            guessM.value == 'ginagamit pag pagod' || 
            guessM.value == 'lagi nakikita' || 
            guessM.value == 'nakikita ngayon'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Oo!";
                guessM.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'upuan' && (
            guessM.value == 'bakal' || 
            guessM.value == 'kahoy' || 
            guessM.value == 'malambot' || 
            guessM.value == 'malaki' || 
            guessM.value == 'maliit' || 
            guessM.value == 'nasa office' || 
            guessM.value == 'nasa school' || 
            guessM.value == 'nasa public places'
            )){
                //Alerts and notification area
                aiM.innerHTML = "Pwede...";
                guessM.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }
        
        else{
            aiM.innerHTML = "Hindi!";
            guessM.value = "";
            document.body.className = "red";
            x.play();
            
        }

        

        
    }
}

//EEEEAASSSSYYYYY
ez.onclick = function () {
    click.play();
    //switch block view
        //HIDE
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "none";
        //SHOW
    let e = document.getElementById("ezView");
    e.style.display = "block";

    console.log("Easy difficulty set!");
    
        //array list of possible keywords
    const pick = ['toothbrush', 'duterte', 'hikaw', 'pusa', 'books', 'apple', 'bag', 'avocado', 'gagamba'];
        //this selects random index in the array list
    const randomPosition = Math.floor(Math.random() * pick.length);
        //this will pick the matching value of the index
    const randomItem = pick[randomPosition];
    console.log('Word to guess: ' + randomItem);


    checkE.onclick = function () { 
        console.log("Checking");
        if(guessE.value == randomItem){
            win.play();
            aiE.innerHTML = "That's it!";
            rightAnsE.innerHTML = randomItem;
        }

        //toothbrush
        else if(randomItem == 'toothbrush' && (
            guessE.value == 'bagay' || 
            guessE.value == 'ginagamit lagi' || 
            guessE.value == 'pang araw-araw' || 
            guessE.value == 'para sa katawan' || 
            guessE.value == 'para sa ngipin' || 
            guessE.value == 'nilalagyan toothpaste' || 
            guessE.value == 'english' 
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'toothbrush' && (
            guessE.value == 'manipis' || 
            guessE.value == 'may battery' || 
            guessE.value == 'nabibili sa tindahan'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //duterte
        else if(randomItem == 'duterte' && (
            guessE.value == 'tao' || 
            guessE.value == 'sikat' || 
            guessE.value == 'naging pangulo' || 
            guessE.value == 'sa gobyerno' || 
            guessE.value == 'matapang' || 
            guessE.value == 'galit sa dilawan' || 
            guessE.value == 'galing davao' || 
            guessE.value == 'taga-davao' || 
            guessE.value == 'nagmumura'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'duterte' && (
            guessE.value == 'kinakatakutan ng tao' || 
            guessE.value == 'takot mga addict' || 
            guessE.value == 'madalas nagmumura'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //hikaw
        else if(randomItem == 'hikaw' && (
            guessE.value == 'bagay' || 
            guessE.value == 'maliit' || 
            guessE.value == 'sinusuot' || 
            guessE.value == 'sa tenga' || 
            guessE.value == 'sinusuot sa tenga' || 
            guessE.value == 'bakal' || 
            guessE.value == 'tagalog'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'hikaw' && (
            guessE.value == 'mahal' || 
            guessE.value == 'mamahalin' || 
            guessE.value == 'bakal' || 
            guessE.value == 'plastic' || 
            guessE.value == 'mumurahin'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //pusa
        else if(randomItem == 'pusa' && (
            guessE.value == 'hayop' || 
            guessE.value == 'maliit' || 
            guessE.value == 'cute' || 
            guessE.value == 'matapang' || 
            guessE.value == 'nakikita sa daan' || 
            guessE.value == 'nangangalmot' || 
            guessE.value == 'tagalog' || 
            guessE.value == 'apat paa' || 
            guessE.value == 'alagang bahay' || 
            guessE.value == 'may siyam na buhay'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'pusa' && (
            guessE.value == 'nasa kalye' || 
            guessE.value == 'nakakatalon ng mataas' || 
            guessE.value == 'kaaway ng aso' || 
            guessE.value == 'walang pake sa mundo'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //book
        else if(randomItem == 'book' && (
            guessE.value == 'bagay' || 
            guessE.value == 'sa library' || 
            guessE.value == 'ginagamit lagi' || 
            guessE.value == 'nasusulatan' || 
            guessE.value == 'may nakasulat' || 
            guessE.value == 'makapal' || 
            guessE.value == 'binabasa' || 
            guessE.value == 'maraming pages' || 
            guessE.value == 'english'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'books' && (
            guessE.value == 'nasa bahay' || 
            guessE.value == 'nasa office' || 
            guessE.value == 'nahihiram' 
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //apple
        else if(randomItem == 'apple' && (
            guessE.value == 'pagkain' || 
            guessE.value == 'prutas' || 
            guessE.value == 'pula' || 
            guessE.value == 'english'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'apple' && (
            guessE.value == 'nakikita sa palengke' || 
            guessE.value == 'matamis' || 
            guessE.value == 'minsan green' 
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //bag
        else if(randomItem == 'bag' && (
            guessE.value == 'bagay' || 
            guessE.value == 'ginagamit lagi' || 
            guessE.value == 'ginagamit ng tao' || 
            guessE.value == 'english' || 
            guessE.value == 'lalagyan ng gamit' || 
            guessE.value == 'lalagyan' || 
            guessE.value == 'sinusuot sa likod' 
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'bag' && (
            guessE.value == 'ginagamit ng studyante' || 
            guessE.value == 'ginagamit sa trabaho' || 
            guessE.value == 'dala lagi' || 
            guessE.value == 'pang gala'  
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //avocado
        else if(randomItem == 'avocado' && (
            guessE.value == 'pagkain' || 
            guessE.value == 'malambot' || 
            guessE.value == 'prutas' || 
            guessE.value == 'partner ng gatas' || 
            guessE.value == 'hinog kinakain'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'avocado' && (
            guessE.value == 'nakikita sa handaan' || 
            guessE.value == 'sikat' || 
            guessE.value == 'kinakain lagi' || 
            guessE.value == 'may buto sa loob' || 
            guessE.value == 'kulay green'   
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        //gagamba
        else if(randomItem == 'gagamba' && (
            guessE.value == 'hayop' || 
            guessE.value == 'tagalog' || 
            guessE.value == 'nakikita sa bahay' || 
            guessE.value == 'kinakatakutan' || 
            guessE.value == 'pinapalo ng tsinelas' || 
            guessE.value == 'insect' || 
            guessE.value == '8 paa' || 
            guessE.value == 'walo paa'
            )){
                //Alerts and notification area
                aiE.innerHTML = "Oo!";
                guessE.value = ""; //clears the input value 
                document.body.className = "green"; 
                o.play(); 
                
        }

        else if(randomItem == 'gagamba' && (
            guessE.value == 'maliit' || 
            guessE.value == 'malaki' || 
            guessE.value == 'mabuhok' || 
            guessE.value == 'gumagapang' || 
            guessE.value == 'mabilis kumilos'   
            )){
                //Alerts and notification area
                aiE.innerHTML = "Pwede...";
                guessE.value = "";   
                document.body.className = "yellow";
                p.play();   
                
        }

        else{
            aiE.innerHTML = "Hindi!";
            guess.value = "";
            document.body.className = "red";
            x.play();
                
        }

        
    }
}

//Navigation and button manipulations
bck.onclick = function () {
    click.play();
    //HIDE
    let hv = document.getElementById("hardView");
    hv.style.display = "none";
    //SHOW
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "block";


    console.log("user backed out");
}

bckM.onclick = function () {
    click.play();
    //HIDE
    let m = document.getElementById("midView");
    m.style.display = "none";
    //SHOW
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "block";


    console.log("user backed out");
}

bckE.onclick = function () {
    click.play();
    //HIDE
    let ez = document.getElementById("ezView");
    ez.style.display = "none";
    //SHOW
    let hfv = document.getElementById("homeFView");
    hfv.style.display = "block";


    console.log("user backed out");
}
