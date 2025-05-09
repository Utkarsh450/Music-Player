let songs = [
  {
    "name": "Jazz Relaxation",
    "artist": "Bensound",
    "imageSrc": "https://imgs.search.brave.com/IW8yQ-NbXxI_83SMo7_SEy9aH4rbQ7Q_MbwyY6SDq-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS82/OTMvS2VzYXJpLUhp/bmRpLTIwMTktMjAy/MDA2MDUwMDExMzMt/NTAweDUwMC5qcGc",
    "audioSrc": "./Ve Maahi Kesari 128 Kbps.mp3"
  },
  {
    "name": "Dreams Come True",
    "artist": "Purple Planet",
    "imageSrc": "https://imgs.search.brave.com/fGYkFkLv6rIgoALH9M7J1n6OJXkhh9BAgZ3Bu2VuZc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLVBPZ1NM/RjZZclByN3pyejUt/RzNJU1pnLXQxMDgw/eDEwODAuanBn",
    "audioSrc": "./floatinggarden.mp3"
  },
  {
    "name": "The Lullaby",
    "artist": "Bensound",
    "imageSrc": "https://imgs.search.brave.com/uy1wK88NMSsEAYD1UVL55HEY5LEEXA6cd6Lif6h8D60/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvYTdMV0J6V3pY/QS9MV0JrVlZBNGJ6/L3NpemVfbV8xNjg2/NzM1MzIyLmpwZw",
    "audioSrc": "./Apna Bana Le Bhediya 128 Kbps.mp3"
  },
  {
    "name": "Happy Ukulele",
    "artist": "Bensound",
    "imageSrc": "https://imgs.search.brave.com/WD2gnaGOziKtJmJiuu8uYbSLxC1fSS7UfYR4YLRtbJ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgwNTY0/NzQuanBn",
    "audioSrc": "./Meri Aashiqui Aashiqui 2 128 Kbps.mp3"
  },
  {
    "name": "Adventures",
    "artist": "Aakash Gandhi",
    "imageSrc": "https://imgs.search.brave.com/PsxIg1Xc-ApdbwmMWAx0OjxzHIbVXhD-hWPPYgeXQXc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YW55LWVhcmx5LXJl/dmlld3Mtb2YtY2hh/YXZhLWhhcy1hbnlv/bmUtc2Vlbi1pdC12/MC1nbGxveHhtanox/amUxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9N2JkYTU5/NTA2MWVjMzhiZjQ1/NmE3ZDg4MDRiMjNk/M2YyMWY4NmQwNA",
    "audioSrc": "./Teri Chaahat Chhaava 128 Kbps.mp3"
  }
]

let image = document.querySelector(".image img")
let audio = document.querySelector(".image audio")
let clutter = ""
let index = 0;
// let prev = document.querySelector("#button1")
// let play = document.querySelector("#button2")
// let goahead = document.querySelector("#button3")
let images = document.querySelector(".images")
let main = document.querySelector(".main")

function show(){
    console.log(index);
  clutter = `  <div class="w-full h-16 p-8 flex justify-between text-zinc-200">
      <h1 class="font-semibold tracking-tight">Arjit Singh</h1>
      <h1 class="font-semibold tracking-tight">Ke Ganne</h1>
    </div>
    <div class="images flex flex-col gap-2 items-center justify-center relative top-[6rem]">
      <div class="image w-80 h-80 rounded rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" src="${songs[index].imageSrc}" alt="">
      </div>
    </div>
    <div class="bottm mt-[16.4rem] w-full px-10 h-24 bg-black flex gap-[25rem]">
      <div class="flex gap-6 p-2">
        <div class="w-16 h-16 rounded">

          <img class="w-full h-full object-cover" src="${songs[index].imageSrc}" alt="">
          <audio src="${songs[index].audioSrc}"></audio>
        </div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-zinc-200">${songs[index].name}</h1>
          <h1 class="font-medium text-zinc-400 text-sm">Arjit Singh, Shreya Ghosal</h1>
        </div>
      </div>
     
      <!-- Controls -->
      <div class="flex flex-col gap-6">
        <input class="seekbar" type="range" value="0"> 
             <div class="flex items-center ml-10 gap-6 text-white text-xl">
        <button id="button1" title="Previous"><i class="fas fa-backward"></i></button>
        <button id="button2" title="Play" class="text-3xl"><i class="fas fa-play-circle"></i></button>
        <button id="button3" title="Next"><i class="fas fa-forward"></i></button>
      </div>
      </div>
      <div></div>
    </div>`
    main.innerHTML = clutter;
    let prev = document.querySelector("#button1");
  let play = document.querySelector("#button2");
  let goahead = document.querySelector("#button3");
 let audio = document.querySelector("audio");
let progressBar = document.querySelector(".seekbar");
if(index == songs.length-1)
  index = -1;

audio.addEventListener("loadedmetadata", function () {
  progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", function () {
  progressBar.value = Math.floor(audio.currentTime);
});

progressBar.addEventListener("input", function () {
  audio.currentTime = progressBar.value;
});


    prev.addEventListener("click", function(){
      if(index>0)
  index = index - 1;
  console.log(index);
  
  show();
})

goahead.addEventListener("click", function(){
  if(index < songs.length-1)
  index = index + 1
    console.log(index);
  show();
})

play.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

}
show();