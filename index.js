var starttime=59;
const inputtext=document.getElementById("inputtext");
var inter;
var str1="";
var c=0; 
var str2=document.getElementById("giventext").innerHTML;
var wpm=0;

function timer(){
    document.getElementById("timer").innerHTML=`${starttime}`;
    if(starttime==-1){
    	clearInterval(inter);
    	var val=confirm("Oops Time UP...!!");
      if(val==true){
        location.reload();
      }
      else{
        location.reload();
      }
    }
    --starttime;
}

function interval(){
  if(wpm==0)
  {
    if(c==0){
      inter= setInterval(timer,1000);
    }
  }
}

function check(){
  str1=document.getElementById("inputtext").value;
    var n = str2.substring(0,str1.length);
  if(str1==str2)
  {
    console.log(n);
    inputtext.style.borderColor="green";
    clearInterval(inter);
    var se=`${starttime}`;
    var time=59-se;
    console.log("time="+time);
    var s=str1.split(" ").length;
    console.log("length="+s);
    wpm=parseInt((s/time)*60);
    document.getElementById('wpm').innerHTML=wpm;
  }
  else 
    {if(str1==n){
    inputtext.style.borderColor=" orange";
  }
  else{
    inputtext.style.borderColor=" red";
  }}
}

function reset(){
  location.reload();
}




