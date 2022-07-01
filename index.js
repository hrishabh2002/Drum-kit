
var num=document.querySelectorAll(".drum").length;//gives length of the array given by queryselectorall which have class named drum
// console.log(num);
for(var i=0;i<num;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHtml=this.innerHTML;
  addAnimations(buttonInnerHtml);
  sound(buttonInnerHtml);
 });
 
}

document.addEventListener("keypress",function(event){
  var key=event.key;
  addAnimations(key);
  sound(key);
})

function sound(buttonInnerHtml){
    
    switch(buttonInnerHtml){
        case "w":
          var tom1=new Audio('./sounds/tom-1.mp3');
          tom1.play();
          break;

        case 'a':
          var tom2=new Audio('./sounds/tom-2.mp3');
          tom2.play();
          break;

        case 's':
          var tom3=new Audio('./sounds/tom-3.mp3');
          tom3.play();
          break;

        case 'd':
          var tom4=new Audio('./sounds/tom-4.mp3');
          tom4.play();
          break;

        case 'j':
          var snare=new Audio('./sounds/snare.mp3');
          snare.play();
          break;

        case 'k':
          var crash=new Audio('./sounds/crash.mp3');
          crash.play();
          break;

        case 'l':
          var bass=new Audio('./sounds/kick-bass.mp3');
          bass.play();
          break;

    }
}

function addAnimations(keys){
  var active=document.querySelector("."+keys);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100)
}


