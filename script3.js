var today = new Date();
var date = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();
document.getElementById("date").innerHTML = date;
var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
document.getElementById("time").innerHTML = time;