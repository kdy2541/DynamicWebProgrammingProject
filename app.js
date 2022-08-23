
//메인화면 사진 돌아가는 부분
const carousel = document.querySelectorAll('.carousel img');

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } else{
        carouselImageIndex++;
    }

    carousel[carouselImageIndex].classList.toggle('active');
}

//반복시간 설정
setInterval(() => {
    changeCarousel();
}, 3000);

//뮤직플레이어 부분
const musicPlayerSection = document.querySelector('.music-player-section');

let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    //더블 클릭 체크
    if(clickCount >= 2){
        musicPlayerSection.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount = 1;
    }, 250);
})

//홈화면 돌아가기

const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

backToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
})

//재생목록 들어가기

const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
})

//재생목록 -> 뮤직플레이어

const backToMusicPlayer = document.querySelector('.playlist .back-btn');

backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
})

let currentMusic = 0;


const music = document.querySelector('#audio-source');//오디오 태

const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');//현재음악 이름
const artistName = document.querySelector('.artist-name');//현재 아티스트
const coverImage = document.querySelector('.cover');//앨범커버 이미지
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const queue = [...document.querySelectorAll('.queue')];

//사용하는 버

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');


const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;
    //각종 요소 설정

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);//음악 최대 시간 설
    currentMusicTime.innerHTML = '00 : 00';
    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}//음악 진행 상황



playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})


// 음악 재생

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})

//일시 정지

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

// 다음 음악

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})

//이전음악

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();
        } else{
            forwardBtn.click();
        }
    }
}, 500)

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

// 음악 부분 재생 옮기기

repeatBtn.addEventListener('click', () => {
    //repeatBtn.classList.toggle('active');
    setMusic(currentMusic);
    music.play();
})

// 다시듣기

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

//볼륨열기

volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
})

//볼륨슬라이더

queue.forEach((item, i) => {
    item.addEventListener('click', () => {
        setMusic(i);
        playBtn.click();
    })
})
//각각의 큐의 아이템에 setmusic 적용

const loginSectionBtn = document.querySelector('.login-section-btn');
const loginSection = document.querySelector('.login-section');

loginSectionBtn.addEventListener('click', () => {
    loginSection.classList.add('active');
})

const loginSectionNavBtn = document.querySelector('.login-section .nav-btn');

loginSectionNavBtn.addEventListener('click', () => {
    loginSection.classList.toggle('active');
})

const loginSmallBtn = document.querySelector('.login-small-btn');

loginSmallBtn.addEventListener('click', () => {
  var IDText = document.getElementById("ID").value;
  document.getElementById('input-div').innerHTML = IDText + "<br>Welcome";
  document.getElementById('input-div').classList.add('active');
  document.getElementById('user-name').innerHTML += "USER : " + IDText;
})
