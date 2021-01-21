let audios =['audio1.mp3','audio2.mp3','audio3.mp3','audio4.mp3','audio5.mp3'];
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let nextSong = document.querySelector("#nextSong");
let prevSong = document.querySelector("#prevSong");
let fillbar =  document.querySelector("#fillbar");
let fillbarWrap =  document.querySelector(".fillbar-wrap");

let audio = new Audio();
let nowSong = 0;

window.onload = playSong;

function playSong(){
audio.src= audios[nowSong];
//audio.play();
}

function playToggle(){
    if(audio.paused){
        audio.play();
         playBtn = document.querySelector(".wrap-play");
        playBtn.innerHTML = "<i class='fas fa-pause'></i>";
    }
    else{
        audio.pause();
        playBtn.innerHTML = "<i class='fas fa-play'></i>"
    }
}

audio.addEventListener("timeupdate", function(){
   
       let position = audio.currentTime / audio.duration;
       fillbar.style.width = position * 100 +"%";
        
       if( fillbar.style.width =="100%"){
      
     audios[nowSong];
      nowSong ++;
     
   
       
    }
      



}
);

  


nextBtn.addEventListener("click", function(){
    audio.currentTime+=5;//khi cái nút next nhỏ click thì thời gian của audio sẽ tăng lên giá trị là 5 

}
);
prevBtn.addEventListener("click", function(){
    audio.currentTime+=-5;//khi cái nút next nhỏ click thì thời gian của audio sẽ giảm xuống  giá trị là -5
}
);
nextSong.addEventListener("click", function(){
 
    audio.src= audios[nowSong];nowSong++
    if(nowSong>= audios.length){
        nowSong = 0 ;
    }
   
    playToggle();
});

prevSong.addEventListener("click", function(){
 
    audio.src= audios[nowSong];nowSong--
    if(nowSong< 0){
        nowSong = audios.length-1 ;
    }
    playToggle()
})
// playBtn.onclick = ()=>{
 
//     audios[i].play();
//     playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  
//   }

   
   
