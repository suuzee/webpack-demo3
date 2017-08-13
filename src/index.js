var app=document.getElementById('app'); 
// app.innerHTML="hi";
var messages=require('./messages'); 
app.innerHTML='<p>'+messages.hi+','+messages.event+"</p>";