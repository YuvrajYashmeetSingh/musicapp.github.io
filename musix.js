
var d=document.getElementById("play");
var po=false;
var audio=document.getElementById("aud");
var img=document.querySelector("img");
 img.classList.remove("image");
var songname=document.getElementById("name");
var ar=document.getElementById("art");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var i=0;

var songs =[
    {
      name:"Burberry"  ,
      artist:"Sidhu Mosawalla",
    }, {
        name:"Brown Munde"  ,
        artist:"AP Dhillon",
      }
];aud.play();
load(songs[0]);

d.addEventListener('click',()=>{    if(po==false)
{
    d.innerText="| |";
    img.classList.add("image");
    aud.play();
    po=true;
}else{
    d.innerText="\u25B6"
    img.classList.remove("image");
    audio.pause();
    po=false; 
}

});

function load(songs)
{
songname.textContent=songs.name;
ar.textContent=songs.artist;
// aud.src=songs.name+".mp3";
// img.src=songs.name+".png";
aud.src=`${songs.name}.mp3`;
img.src=`${songs.name}.png`;
}
next.addEventListener("click",king);
function king()
{
    pos=0;
    i++;
    if(i>=songs.length)
    {
        i=0;
    } 
    load(songs[i]);audio.play();    d.innerText="| |"; img.classList.add("image");
    
}
prev.addEventListener("click",()=>{
pos=0;
    i--;
    if(i<0)
    {
        i=songs.length-1;
    }
    load(songs[i]);audio.play();    d.innerText="| |"; img.classList.add("image");

     
});

var mus=document.getElementById("progressbar");
var pro=document.getElementById("progress");
var sec,min,sec1,min1,mindur,secdur,min2,sec2;
audio.ontimeupdate=function(e){
   mus.style.width=Math.ceil((aud.currentTime/aud.duration)*260)+'px';
   sec=Math.ceil(audio.currentTime);
   min=Math.floor(sec/60);
    sec=sec%60;
    if(sec<10)
    {
    sec1="0"+sec.toString();
    }
    else{
        sec1=sec;
    }
    if(min<10)
    {
    min1="0"+min.toString();
    }
    else{
        min1=min;
    }
    secdur=Math.ceil(audio.duration);
   mindur=Math.floor(secdur/60);
   
    secdur=secdur%60;
    if(secdur<10)
    {
    sec2="0"+secdur.toString();
    }
    else{
        sec2=secdur;
    }
    if(mindur<10)
    {
    min2="0"+mindur.toString();
    }
    else{
        min2=mindur;
    }
   document.getElementById("current").innerHTML=min1+":"+sec1;
   document.getElementById("last").innerText=min2+":"+sec2;
   if(audio.duration==audio.currentTime)
   {
       king();
   }

}

progress.onclick=function(e)
{
  aud.currentTime= Math.ceil((e.offsetX/260)*aud.duration);
   
}

function hide(event)
{
var hi,seca,mina,seca1,k,df,mina1,m;
k=260/aud.duration;
hi=(event.offsetX)/(aud.duration*k)*100;
m=Math.ceil(hi*aud.duration/100);
mina=Math.floor(m/60);
   seca=m%60;
 if(seca<10)
 {
 seca1="0"+seca.toString();
 }
 else{
     seca1=seca;
 }
 if(mina<10)
 {
 mina1="0"+mina.toString();
 }
 else{
     mina1=mina;
 }
 df=document.getElementById("hide");
 df.innerHTML=mina1+":"+seca1;
 df.style.marginLeft= Math.ceil(event.offsetX)+"px";
 df.style.visibility="visible";
 pro.addEventListener("mouseout",()=>
 {
df.style.visibility="hidden";
 });
}
