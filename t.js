var cookieinfo;
function CookieExist(CookieName) { cookieinfo = document.cookie; if (cookieinfo.indexOf(CookieName) == -1) { return false; } else { return true; } }
function SetCookie(CookieName,CookieArgs,CookieExpire) { document.cookie = CookieName + "" + CookieArgs + ";" + "max-age=60" + CookieExpire; }
function GetCookie(CookieName) { if ( CookieExist(CookieName) ){ d = cookieinfo.indexOf(CookieName) + CookieName.length + 1; f = cookieinfo.indexOf(";",d); if ( f == -1) { f = cookieinfo.length; } return (cookieinfo.substring(d,f)); } else { return ("0"); } } 

var pup=0;
function popup ()
{
if(pup===0)
{
pup=1;
if(GetCookie("dj")==1)
{
return;
}
else
{
SetCookie("dj",1,"");
var popun=String
popun[0]="http://it.ivyrc.com";   
popun[1]="http://ce.ivyrc.com";
popun[2]="http://fappening.ivyrc.com/";
popun[3]="http://br.ivyrc.com"; 
popun[4]="http://celebfq.blogspot.com/?m=1"; 
popun[5]="https://dlmusz.blogspot.com/?m=1"; 
popun[6]="https://tntita.blogspot.com/?m=1"; 
popun[7]="https://sdfsefds.blogspot.com/?m=1"; 
popun[8]="https://hihantwe.blogspot.com/?m=1"; 
popun[9]="https://yaswpra.blogspot.com/?m=1"; 
popun[10]="https://cealr.blogspot.com/?m=1"; 
popun[11]="https://sowildpthi.blogspot.com/?m=1"; 
popun[12]="https://wissindo.blogspot.com/?m=1"; 
popun[13]="https://nycmetropolitan.blogspot.com/?m=1"; 
popun[14]="https://tnayrc.blogspot.com/?m=1"; 
popun[15]="http://indoviral.doorblog.jp"; 
popun[16]="http://myrf.doorblog.jp"; 
popun[17]="https://spichen.blogspot.com/?m=1"; 
popun[18]="https://treatjayworkman.com/fi5y0dk1i?key=830c8860463fbd9cb5e3fb1d3db6f450"; 
popun[19]="https://celebalt.blogspot.com/?m=1"; 
popun[20]="https://yomich.blogspot.com/?m=1"; 
popun[21]="https://padxfi.blogspot.com/?m=1"; 
popun[22]="https://waremp3.blogspot.com/?m=1";
popun[23]="https://celebruu.blogspot.com/?m=1";
popun[24]="https://meggiita.blogspot.com/?m=1";
popun[25]="https://kbjblogmusz.blogspot.com/?m=1";
popun[26]="https://sw.ycyva.com";
popun[27]="https://ob.ycyva.com";
popun[28]="https://ys.ycyva.com";
popun[29]="https://ny.ycyva.com";
popun[30]="https://jc.ycyva.com";
popun[31]="https://qr.ivyrc.com";
popun[32]="https://eb.ayrce.com";
popun[33]="https://es.ayrce.com";
popun[34]="https://sx.ivyrc.com";
popun[35]="https://sg.ivyrc.com";
popun[36]="https://treatjayworkman.com/azv6thdcy?key=ac69989277ddbb59deee85a5d19ca6c9";
popun[37]="https://treatjayworkman.com/cd4nm9df?key=79e17d49c524dcf3dcc3ded87245a2a8";

resultat = Math.floor(Math.random() * 38);
window.open(popun[resultat], "","toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,menuBar=1,width=30000,height=30000");
window.focus();
popup.blur();
}
}
}
document.onclick=popup;
