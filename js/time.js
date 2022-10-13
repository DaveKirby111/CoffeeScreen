setInterval(clock, 500);

function clock() {
    const t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}