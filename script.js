
let userdate = window.prompt("Enter Date (\"oct 16\")");
let user_time = window.prompt("Enter Time (\"12:05:30\")");

let extractedDate = `${userdate}, 2023 ${user_time}`;
document.getElementById("userSet").innerHTML = extractedDate;


var countDownTime = new Date(extractedDate);
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;


}, 1000);