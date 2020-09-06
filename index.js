
const bpm = document.getElementById('bpm');
bpm.addEventListener('change', (e) => {
    setBpm(bpm.value);
});

bpm.addEventListener('focus', (e) => {
    e.stopPropagation();
})

let running = false;
const content = document.getElementById('content');
content.addEventListener('click', (e) => {
    e.stopPropagation();
    if (running) {
        running = false;
        stopMetro();
        return;
    }
    running = true;
    startMetro();
})

const orb = document.getElementById('orb');


let currentBpm = 120;

function setBpm(value) {
    currentBpm = value;
    startMetro();
}

let interval;
function startMetro() {
    clearInterval(interval);
    const beat = Math.floor((60000 / currentBpm) / 2);
    console.log(beat);
    interval = setInterval(() => {
        if (orb.style.visibility ==='visible') {
            orb.style.visibility = 'hidden';
            return;
        }
        orb.style.visibility = 'visible';
    }, beat)
}

function stopMetro() {
    clearInterval(interval);
    orb.style.visibility = 'visible';
}