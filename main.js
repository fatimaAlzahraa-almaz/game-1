 let ch=document.getElementById('ch');
let Block=document.getElementById('block');
let dog=document.getElementById('dog');
let box1=document.getElementById('box1');
let h1=document.getElementById('score');
let blockimg=document.getElementById('blockimg');
let click=new Audio('jump.mp3');
let lose=new Audio('gameover.mp3');
let loser=0;
var a=0 ; let stopincrease;
function increase()
{
a++;
h1.innerHTML='score :'+a;

}
 
stopincrease=setInterval( increase,100);
 
 function hundleclick(){
  if(!loser){
  click.play()
  if(ch.classList!='animate')
  ch.classList.add('animate');
  setTimeout(function(){
    ch.classList.remove('animate')
  },1000)
}
}
function isDead()
{
  let chtop=parseInt(window.getComputedStyle(ch).getPropertyValue('top'));
  let leftb=parseInt(window.getComputedStyle(Block).getPropertyValue('left'));
  if(chtop>180 && leftb>0 && leftb<=175)
  {   lose.play();
    alert('Game Over XD !!');
    Block.style.animation='none';
    dog.style.animation='none';
    box1.style.animation='none';
    blockimg.style.animation='none';
    clearInterval(stopincrease);
    h1.innerHTML='score :'+a ;
    a=0;
    
     
loser=1;
  }
   
   
}
setInterval(isDead,100);
 
 
 

function tryagain()
{ loser=0;
  Block.style.animation='none';
    dog.style.animation='none';
    box1.style.animation='none';
    blockimg.style.animation='none';
    setTimeout(()=>{
       Block.style.animation='';
    dog.style.animation='';
    box1.style.animation='';
    blockimg.style.animation='';
    a=0;
      h1.innerHTML='score :'+a ;
stopincrease=setInterval( increase,100);
    },10)
 
}
