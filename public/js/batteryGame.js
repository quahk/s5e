(function() {

let chargedPercentage = 0;
let startTimeStamp;
let endTimeStamp;
let endedGame = false;
let batteryFill = document.getElementById('battery-fill');
let battery = document.getElementById('battery');

document.getElementById('charge-button').addEventListener('click', () => {
    increaseChargePercentage();
    render();
    calculateTime();
    endGameIfCharged();
});

document.getElementById('reset-button').addEventListener('click', () => {
    resetBomb();
})

function increaseChargePercentage() {
    chargedPercentage += 2;
    if (chargedPercentage >= 100) {
        chargedPercentage = 100;
    }
}

function calculateTime() {
    if (startTimeStamp == undefined) {
        startTimeStamp = Date.now();
    };

    if (chargedPercentage >= 100) {
        endTimeStamp = Date.now();
    }
}

function render() {
    batteryFill.textContent = chargedPercentage + '%';
    batteryFill.style.width = chargedPercentage + '%';
    if (chargedPercentage > 20 && chargedPercentage <= 80) {
        battery.classList.replace('alert', 'middle');
    }
    if (chargedPercentage > 80) {
        battery.classList.remove('middle');
    }
}

function endGameIfCharged() {
    if (!endedGame && chargedPercentage >= 100) {
        endedGame = true;
        setTimeout(() => {
            alert('You used: ' + ((endTimeStamp - startTimeStamp)/1000) + 's');
            document.getElementById('reset-button').style.display = 'inline';
        }, 300);
    }
}

function resetBomb() {
    chargedPercentage = 0;
    endedGame = false;
    startTimeStamp = undefined;
    endTimeStamp = 0;
    document.getElementById('reset-button').style.display = 'none';
    battery.classList.add('alert');
    render();
}

$('#toggle').on('click', () => {
    if (document.getElementById('toggle').checked == true) {
        $('#batteryGame').show();
    } else if (document.getElementById('toggle').checked == false) {
        $('#batteryGame').hide();
    }
})

})();