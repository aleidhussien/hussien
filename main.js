/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var http=require('http');
var info={
    'name':'hussien',
    'age':30
 };
var myhttp=http.createServer(function(request,response){
    response.writeHead(200);
    response.write(JSON.stringify(info));
    response.end();
    
});
myhttp.listen(9292);
console.log('we listen to heroku');