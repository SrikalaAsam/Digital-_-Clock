const clockEl = document.getElementById("clocks");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getClocks();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    

    if(h > 12) {
        h = h - 12;
        ampm = "PM" : "AM";
        //ampm = (h >= 12) ? "PM" : "AM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    clockEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
      updateclock();
    }, 1000);
}
updateclock();
