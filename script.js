var character = document.getElementById ("character");
var block = document.getElementById ("block");

//mouse function
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
}
    setTimeout (function(){
        character.classList.remove("animate");
    },500);
}

//keyboarrd function
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
            setTimeout (function(){
                character.classList.remove("animate");
            },500);
    }
}

//lose function
var checkDead = setInterval(function(){
    var characterTop =parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    var blockLeft =parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation  =  "none";
        block.style.display = "restart";
        alert("Sorry mate ! YOU LOOSE :(");
    }
},10);