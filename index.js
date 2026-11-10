const hourE1= document.getElementById("hours");
const minuteE1= document.getElementById("minutes");
const secondE1= document.getElementById("seconds");
const clock = document.querySelector(".clock");
const ampmE1= document.getElementById("ampm");
const dateE1 = document.getElementById("date");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();        
    let s = new Date().getSeconds();
   h = h.toString().padStart(2, "0");
   m = m.toString().padStart(2, "0");
   s = s.toString().padStart(2, "0");
}
function updateDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Format day and month to always have two digits
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

 }
    h = h < 10 ?"0" + h : h;
    m = m < 10 ?"0" + m : m;  
    s = s < 10 ?"0" + s : s;
 

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(updateClock, 1000);
    // setTimeout is used to update the clock every second

}
updateClock()
updateDate();
// This function is called to update the date on the clock
