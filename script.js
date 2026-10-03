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

const aboutme = document.getElementById('aboutme');
const aboutwindow = document.getElementById('aboutwindow');

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

let contactpos = false;
contact.addEventListener('click', function() {
    contactwindow.style.display = 'block';
    if (!contactpos) {
        randompos(contactwindow);
        contactpos = true;
    }

    frontwindow(contactwindow);
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