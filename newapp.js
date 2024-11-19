let date=document.getElementById("date");

let day=document.getElementById("day");
let 
month=document.getElementById("month");
let year=document.getElementById("year");


let today=new Date();
let weekdays=["sunday","monday","TUESDAY","wednesday","Thursday","friday","saturday"];
let months=["jan","feb","march","april","may","june","july","aug","sep","oct","NOV",'dec'];


date.innerHTML=today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=months[today.getMonth()];
year.innerHTML=today.getFullYear();