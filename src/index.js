var app=document.getElementById('app'); 
app.innerHTML="hi";
var messages=require('./messages');
app.innerHTML='<p>'+messages.hi+','+messages.event+'</p>';
if(module.hot){//启用热重载 
	module.hot.accept();
}