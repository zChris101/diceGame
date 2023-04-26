var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function makeasound(key){
    switch (key) {
        case 'w':
            var tom = new Audio("sounds/tom-1.mp3")
            tom.play();
        break;

        case 'a':
            var tom = new Audio("sounds/tom-2.mp3")
            tom.play();
        break;

        case 's':
            var tom = new Audio("sounds/tom-3.mp3")
            tom.play();
        break;

        case 'd':
            var tom= new Audio("sounds/tom-4.mp3")
            tom.play();
        break;

        case 'j':
            var tom= new Audio("sounds/snare.mp3")
            tom.play();
        break;

        case 'k':
            var tom= new Audio("sounds/crash.mp3")
            tom.play();
        break;

        case 'l':
            var tom= new Audio("sounds/kick-bass.mp3")
            tom.play();
        break;

        default: console.log(buttonInnerHtml);


            break;
    }
}

//it only add event listener on all buttons so each click will notify when its clicked 
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        makeasound(buttonInnerHtml);
        pressedAnimation(buttonInnerHtml);

    })

   
}
// no need to assign event listeners because the whole document are put in eventlistener
document.addEventListener("keydown", function(e) {

    makeasound(e.key);
    pressedAnimation(e.key);
    console.log(e);
})


function pressedAnimation(temp){
    var buttonStat = document.querySelector("."+temp);
    buttonStat.classList.add("pressed");
    
    setTimeout(function(){
        buttonStat.classList.remove("pressed");
    },100)
}