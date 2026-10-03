// THIS IS MY FIRST TIME USING JAVASCRIPT SO PLEASE BE NICE TO ME I USED TUTORIALS PLEASE

const windowBox = document.getElementById('window');
const titlebar = document.getElementById('titlebar');

let mouseDragging = false;
let posX = 0;
let posY = 0;

titlebar.addEventListener('pointerdown', function(e) {
    if (e.target.closest('.close')) return;
    mouseDragging = true;
    const rect = windowBox.getBoundingClientRect();
    posX = e.clientX - rect.left;
    posY = e.clientY - rect.top;
    titlebar.setPointerCapture(e.pointerId);
});

titlebar.addEventListener('pointermove', function(e) {
    if (!mouseDragging) return;
    const rect = windowBox.getBoundingClientRect();
    let newX = e.clientX - posX;
    let newY = e.clientY - posY;
    newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
    windowBox.style.left = newX + "px";
    windowBox.style.top = newY + "px";
});

function stopDragging() {
    mouseDragging = false;
}

titlebar.addEventListener('pointerup', stopDragging);
titlebar.addEventListener('pointerleave', stopDragging);

function closewindow() {
    windowBox.style.display = 'none';
}