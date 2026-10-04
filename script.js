// THIS IS MY FIRST TIME USING JAVASCRIPT SO PLEASE BE NICE TO ME I USED TUTORIALS PLEASE

// windows functionality yahoo
let highestZ = 1;

function frontwindow(desktopwindow) {
    highestZ++;
    desktopwindow.style.zIndex = highestZ
}

function randompos(desktopwindow) {
    const margin = 30;
    const rect = desktopwindow.getBoundingClientRect();
    
    const maxX = window.innerWidth - rect.width - margin * 2;
    const maxY = window.innerHeight - rect.height - margin * 2;

    const randomX = maxX > 0
    ? margin + Math.random() * maxX : margin;
    const randomY = maxY > 0
    ? margin + Math.random() * maxY : margin;

    desktopwindow.style.left = randomX + "px";
    desktopwindow.style.top = randomY + "px";
}

const Windows = document.querySelectorAll('.window');

window.addEventListener('load', function() {
    centerwindow(document.getElementById('startwindow'));
});

Windows.forEach(function(desktopwindow) {

desktopwindow.addEventListener('pointerdown', function() {
    highestZ++;
    desktopwindow.style.zIndex = highestZ;
});

const titlebar = desktopwindow.querySelector('.titlebar');

let mousedragging = false;
let posX = 0;
let posY = 0;

titlebar.addEventListener('pointerdown', function(e) {
    if (e.target.closest('.close')) return;
    mousedragging = true;
    const rect = desktopwindow.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    titlebar.setPointerCapture(e.pointerId);
});

titlebar.addEventListener('pointermove', function(e) {
    if (!mousedragging) return;
    const rect = desktopwindow.getBoundingClientRect();
    let newX = e.clientX - posX;
    let newY = e.clientY - posY;
    newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
    desktopwindow.style.left = newX + "px";
    desktopwindow.style.top = newY + "px";
});

function stopdragging() {
    mousedragging = false;
}

titlebar.addEventListener('pointerup', stopdragging);
titlebar.addEventListener('pointercancel', stopdragging);
titlebar.addEventListener('lostpointercapture', stopdragging);

const closeButton = desktopwindow.querySelector('.close');
closeButton.addEventListener('click', function() {
    desktopwindow.style.display = 'none';
});
});

// windows

function centerwindow(desktopwindow) {
    const x = (window.innerWidth - desktopwindow.offsetWidth) / 2;
    const y = (window.innerHeight - desktopwindow.offsetHeight) / 2;

    desktopwindow.style.left = x + "px";
    desktopwindow.style.top = y + "px";
}

start.addEventListener('click', function() {
    startwindow.style.display = 'block';
    centerwindow(startwindow);

    frontwindow(startwindow);
});

let aboutpos = false;
aboutme.addEventListener('click', function() {
    aboutwindow.style.display = 'block';
    if (!aboutpos) {
        randompos(aboutwindow);
        aboutpos = true;
    }

    frontwindow(aboutwindow);
});

let favspos = false;
favorites.addEventListener('click', function() {
    favoriteswindow.style.display = 'block';
    if (!favspos) {
        randompos(favoriteswindow);
        favspos = true;
    }

    frontwindow(favoriteswindow);
});

let interestspos = false;
interests.addEventListener('click', function() {
    interestswindow.style.display = 'block';
    if (!interestspos) {
        randompos(interestswindow);
        interestspos = true;
    }

    frontwindow(interestswindow);
});

let skillspos = false;
skills.addEventListener('click', function() {
    skillswindow.style.display = 'block';
    if (!skillspos) {
        randompos(skillswindow);
        skillspos = true;
    }

    frontwindow(skillswindow);
});

let clubspos = false;
clubs.addEventListener('click', function() {
    clubswindow.style.display = 'block';
    if (!clubspos) {
        randompos(clubswindow);
        clubspos = true;
    }

    frontwindow(clubswindow);
});

let contactpos = false;
contact.addEventListener('click', function() {
    contactwindow.style.display = 'block';
    if (!contactpos) {
        randompos(contactwindow);
        contactpos = true;
    }

    frontwindow(contactwindow);
});

let settingspos = false;
settings.addEventListener('click', function() {
    settingswindow.style.display = 'block';
    if (!settingspos) {
        randompos(settingswindow);
        settingspos = true;
    }

    frontwindow(settingswindow);
});

let widgetspos = false;
widgets.addEventListener('click', function() {
    widgetswindow.style.display = 'block';
    if (!widgetspos) {
        randompos(widgetswindow);
        widgetspos = true;
    }

    frontwindow(settingswindow);
});

let attributionspos = false;
attributions.addEventListener('click', function() {
    attributionswindow.style.display = 'block';
    if (!attributionspos) {
        randompos(attributionswindow);
        attributionspos = true;
    }

    frontwindow(attributionswindow);
});

// systemtray

function clock() {
    const now = new Date();

    document.getElementById("clock").textContent =
    now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

clock();
setInterval(clock, 1000);

let today = new Date();

let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
};

document.getElementById("date").textContent =
today.toLocaleDateString("en-US", options);

// wallpaper

const wallpapers = {
    wallpaper1: "images/wallpapers/wallpaper1.jpg",
    wallpaper2: "images/wallpapers/wallpaper2.jpg",
    wallpaper3: "images/wallpapers/wallpaper3.jpg",
    wallpaper4: "images/wallpapers/wallpaper4.jpg",
    wallpaper5: "images/wallpapers/wallpaper5.jpg",
    wallpaper6: "images/wallpapers/wallpaper6.jpg"
};

const textcolors = {
    wallpaper1: "#1860a8",
    wallpaper2: "#000",
    wallpaper3: "#1860a8",
    wallpaper4: "#000",
    wallpaper5: "#000",
    wallpaper6: "#1860a8"
};

function updatetextcolors(color) {
    const shortcuts = document.querySelectorAll(".desktopshortcuts p");
    shortcuts.forEach(function(shortcut){
        shortcut.style.setProperty("color", color, "important");
    });
}

Object.keys(wallpapers).forEach(id => {
    document.getElementById(id).addEventListener("click", function(){
        document.body.style.backgroundImage= `url("${wallpapers[id]}")`;
        updatetextcolors(textcolors[id]);
    });
});

// shortcuts woah except i copied and pasted the code from the start nav but shhhh

aboutshortcut.addEventListener('click', function() {
    aboutwindow.style.display = 'block';
    if (!aboutpos) {
        randompos(aboutwindow);
        aboutpos = true;
    }

    frontwindow(aboutwindow);
});

favoritesshortcut.addEventListener('click', function() {
    favoriteswindow.style.display = 'block';
    if (!favspos) {
        randompos(favoriteswindow);
        favspos = true;
    }

    frontwindow(favoriteswindow);
});

interestsshortcut.addEventListener('click', function() {
    interestswindow.style.display = 'block';
    if (!interestspos) {
        randompos(interestswindow);
        interestspos = true;
    }

    frontwindow(interestswindow);
});

skillsshortcut.addEventListener('click', function() {
    skillswindow.style.display = 'block';
    if (!skillspos) {
        randompos(skillswindow);
        skillspos = true;
    }

    frontwindow(skillswindow);
});

clubsshortcut.addEventListener('click', function() {
    clubswindow.style.display = 'block';
    if (!clubspos) {
        randompos(clubswindow);
        clubspos = true;
    }

    frontwindow(clubswindow);
});

contactshortcut.addEventListener('click', function() {
    contactwindow.style.display = 'block';
    if (!contactpos) {
        randompos(contactwindow);
        contactpos = true;
    }

    frontwindow(contactwindow);
});

// music player yayay

const playlist = [
    {
        title: "Mii Maker",
        artist: "Wii U",
        src: "audio/song1.mp3",
        cover: "images/albums/album1.png"
    },
    {
        title: "LEASE",
        artist: "Takeshi Abo",
        src: "audio/song2.mp3",
        cover: "images/albums/album3.png"
    },
    {
        title: "Aquatic Ambience",
        artist: "Schizzie",
        src: "audio/song3.mp3",
        cover: "images/albums/album2.png"
    }
];

let songplaying = 0;

function loadsong(index) {
    const song = playlist[index];
    audio.src = song.src;

    document.getElementById("songtitle").textContent = song.title;
    document.getElementById("songartist").textContent = song.artist;
    document.getElementById("albumart").src = song.cover;
}

function playsong(){
    audio.play();
    playpause.querySelector("img").src = "images/musicplayer/pause.svg";
}

function pausesong(){
    audio.pause();
    playpause.querySelector("img").src = "images/musicplayer/play.svg"
}

playpause.addEventListener("click", function() {
    if (audio.paused) {
        playsong();
    } else {
        pausesong();
    }
});

next.addEventListener("click", function() {
    songplaying = (songplaying + 1) % playlist.length;

    loadsong(songplaying);
    playsong();
});

previous.addEventListener("click", function(){
    songplaying = (songplaying - 1 + playlist.length) % playlist.length;

    loadsong(songplaying);
    playsong();
});

audio.addEventListener("timeupdate", function() {
    const current = timeformat(audio.currentTime);
    const duration = timeformat(audio.duration);

    document.getElementById("timestamp").textContent =
        current + " / " + duration;
});

function timeformat(seconds){
    if (isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remaining = Math.floor(seconds % 60);

    return minutes + ":" + String(remaining).padStart(2, "0");
}

loadsong(songplaying);

const musicplayer = document.querySelector('.musicplayer');

musicplayer.style.left = (window.innerWidth - musicplayer.offsetWidth - 20) + 'px';
musicplayer.style.top = '20px';

let musicdragging = false;
let musicposX = 0;
let musicposY = 0;

musicplayer.addEventListener('pointerdown', function(e){
    if(e.target.closest('button')){
        return;
    }
    musicdragging = true;
    const rect = musicplayer.getBoundingClientRect();
    musicposX = e.clientX - rect.left;
    musicposY = e.clientY - rect.top;
    musicplayer.setPointerCapture(e.pointerId);
});

musicplayer.addEventListener('pointermove', function(e){
    if (!musicdragging) return;
    const rect = musicplayer.getBoundingClientRect();
    let newX = e.clientX - musicposX;
    let newY = e.clientY - musicposY;
    newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
    musicplayer.style.left = newX + "px";
    musicplayer.style.top = newY + "px";
});

function stopmusicdragging(){
    musicdragging = false;
};

musicplayer.addEventListener('pointerup', stopmusicdragging);
musicplayer.addEventListener('pointercancel', stopmusicdragging);
musicplayer.addEventListener('lostpointercapture', stopmusicdragging);

// weather

const weather = document.querySelector('.weather');

weather.style.left = (window.innerWidth - weather.offsetWidth - 20) + 'px';
weather.style.top = (musicplayer.offsetTop + musicplayer.offsetHeight + 20) + 'px';

let weatherdragging = false;
let weatherposX = 0;
let weatherposY = 0;

weather.addEventListener('pointerdown', function(e) {
    weatherdragging = true;
    const rect = weather.getBoundingClientRect();
    weatherposX = e.clientX - rect.left;
    weatherposY = e.clientY - rect.top;
    weather.setPointerCapture(e.pointerId);
});

weather.addEventListener('pointermove', function(e) {
    if (!weatherdragging) return;
    const rect = weather.getBoundingClientRect();
    let newX = e.clientX - weatherposX;
    let newY = e.clientY - weatherposY;
    newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
    weather.style.left = newX + "px";
    weather.style.top = newY + "px";
});

function stopweatherdragging() {
    weatherdragging = false;
};

weather.addEventListener('pointerup', stopweatherdragging);
weather.addEventListener('pointercancel', stopweatherdragging);
weather.addEventListener('lostpointercapture', stopweatherdragging);

function weatherinfo(code) {
    if (code === 0) return { text: "sunny", icon: "☀️" };
    if (code === 1) return { text: "mostly sunny", icon: "🌤️" };
    if (code === 2) return { text: "partly cloudy", icon: "⛅" };
    if (code === 3) return { text: "cloudy", icon: "☁️" };
    if (code === 45 || code === 48) {return { text: "foggy", icon: "🌫️" };}
    if ([51, 53, 55, 56, 57].includes(code)) {return { text: "drizzling", icon: "🌦️" };}
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {return { text: "rainy", icon: "🌧️" };}
    if ([71, 73, 75, 77, 85, 86].includes(code)) {return { text: "snowy", icon: "❄️" };}
    if ([95, 96, 99].includes(code)) {return { text: "thunderstorm", icon: "⛈️" };}
    return { text: "unknown", icon: "🌡️" };
}

async function getweather() {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=47.6588&longitude=-117.4260&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles";
        const response = await fetch(url);
        const data = await response.json();
        const currentTemp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;
        const weather = weatherinfo(code);

        temperature.textContent = `${currentTemp}°F`;
        weathericon.textContent = weather.icon;
}

getweather();
setInterval(getweather, 15 * 60 * 1000);

// widget hider (why would you ever hide them!!)

const toggleweather = document.getElementById("toggleweather");
const togglemusic = document.getElementById("togglemusic");

const mobile = window.matchMedia("(max-width: 600px)").matches;

if (mobile) { toggleweather.checked = false; togglemusic.checked = false; }

toggleweather.addEventListener("change", function() {
    weather.classList.toggle("widget-hidden", !toggleweather.checked);
});

togglemusic.addEventListener("change", function() {
    musicplayer.classList.toggle("widget-hidden", !togglemusic.checked);

    if (!togglemusic.checked) {
    audio.pause();
    }
});

weather.classList.toggle("widget-hidden", !toggleweather.checked); 
musicplayer.classList.toggle("widget-hidden", !togglemusic.checked);