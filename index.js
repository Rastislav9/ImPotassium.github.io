let answer;

do{
    answer = window.prompt("Did you give her a drink or snacks?");
}while(answer !== "Yes" && answer !== "yes")


window.alert("Submit - Kindness");

const input = document.getElementById("myInput");
const button = document.getElementById("myButton");
const send = document.getElementById("mySend");
const deliver = document.getElementById("myDeliver");
const button1 = document.getElementById("my5");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

button.onclick = function(){
    if(input.value === "Kindness" || input.value === "kindness"){
    p1.textContent = "I really appreciate that you are so kind. You make things for people, give them away, you always text us when we are bored and I don't even know how to thank you for that...";
    window.alert("Send - Respectfulness");
    document.getElementById("myImg").style.display = "block";
    } 
    else{
        window.alert("Incorrect word, try remembering the code");
    }
}
send.onclick = function(){
    if(input.value === "Respectfulness" || input.value === "respectfulness"){
    p2.textContent = "Even though you often say you're a hater, I've never seen one in you during all these years. You do comment and that's completely fine, because your comments are always helpful and they always brighten someone's day.";
    window.alert("Deliver - Beauty");
    document.getElementById("myImg1").style.display = "block";
    }
    else{
        window.alert("Incorrect word, try remembering the code");
    }
}
deliver.onclick = function(){
    if(input.value === "Beauty" || input.value === "beauty"){
    p3.textContent = "In my opinion, the looks never matter, but you, you have them settled. I don't wanna be cheesy or something, but I do hope you realize that you are perfect, from almost every aspect. Your eyes, your hair, your behaviour, your skin, everything...";
    window.alert("5 - 17");
    document.getElementById("myImg2").style.display = "block";
    }
    else{
        window.alert("Incorrect word, try remembering the code");
    }
}
button1.onclick = function(){
    if(input.value === "17"){
    p4.textContent = "I mentioned only the things I like the MOST but there are many, many more beautiful things about you. You should never give up on anything and especially not on your dreams. Chase them and when you finally catch them, don't let go. Thank you for being in my life♡";
    document.getElementById("myImg3").style.display = "block";
    }
    else{
        window.alert("Incorrect word, try remembering the code");
    }
}

const addButton = document.getElementById("addButton");
const wordElement = document.getElementById("word");

let word = "l";

addButton.addEventListener("click", function(){
    word += "o";
    wordElement.textContent = word + "ng";
});

const image = document.getElementById("myImage");

image.onclick = function(){
    window.alert("Tell that you didn't mention kpop because the entire website is about it");
}

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const magic = document.getElementById("myMagic");

magic.onclick = function(){
    if(radio1.checked){
    window.alert("SAME THAT'S ALSO MY FAV");
    }else if(radio2.checked){
    window.alert("YOU ATE THIS ONE UPPP");
    }else if(radio3.checked){
    window.alert("THIS ONE IS SO PRETTYY IT'S SO DETAILED LIKE WOWWW");
    }else if(radio4.checked){
    window.alert("YOU KNEW WHAT YOU WERE DOING WHEN YOU TOOK THAT PENCIL");
    }else{
        window.alert("You need to mark your favorite");
    }
}

const Spiderman = document.getElementById("mySpiderman");
const Busan = document.getElementById("myBusan");
const spiderman = document.getElementById("mySpiderman2");
const scream = document.getElementById("myScream");

Spiderman.onclick = function(){
    window.alert("I actually never watched this movie fully...");
}
Busan.onclick = function(){
    window.alert("Is it worth the watchingg??");
}
spiderman.onclick = function(){
    window.alert("This one too, I only started watching it and never actually finished");
}
scream.onclick = function(){
    window.alert("You mentioned a watching marathonn?? Still up for it?");
}

const showButton = document.getElementById("showListButton");
const list = document.getElementById("myList");

showButton.onclick = function(){
    if (list.style.display === "none"){
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

/*function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 340);
*/