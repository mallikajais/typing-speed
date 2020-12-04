const starttime=1;
let time=starttime*60;
const inputtext=document.getElementById("inputtext");
var inter;
var str1="";
var c=0; var min;var sec;
var str2=document.getElementById("giventext").innerHTML;


function timer(){
	
    min =Math.floor(time/60);
     sec =time%60;
    document.getElementById("timer").innerHTML=`${min}:${sec}`;
    if(time==0){
    	clearInterval(inter);
    	var val=confirm("Oops Time UP...!!");
      if(val==true){
        location.reload();
        
      }
      else{
        location.reload();
        
      }
    }
    time--;
    
}
function interval(){
  if(c==0){
 inter= setInterval(timer,1000);
}
  
}
function check(){
  
  str1=document.getElementById("inputtext").value;
    var n = str1.localeCompare(str2);
  if(n==0)
  {
    console.log(n);
    inputtext.style.borderColor="green";

    clearInterval(inter);
    var m=`${min}`;
    var se=`${sec}`;
    var s=str1.split(" ").length;
    var sep=(s/(m*60+se));
    var wpm=parseInt((str1.length/sep));
    document.getElementById('wpm').innerHTML=wpm;
  }
  else{
    inputtext.style.borderColor=" red";
  }

}
function reset(){
  window.open("index.html");
}




