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
popun[15]="http://uks.starfree.jp"; 
popun[16]="http://ryc.starfree.jp"; 
popun[17]="http://osak.starfree.jp"; 
popun[18]="http://myrs.starfree.jp"; 
popun[19]="http://cys.starfree.jp"; 
popun[20]="http://cli.starfree.jp"; 
popun[21]="http://indoviral.doorblog.jp"; 
popun[22]="http://myrf.doorblog.jp"; 
popun[23]="https://spichen.blogspot.com/?m=1"; 
popun[24]="https://2danbi.blogspot.com/?m=1"; 
popun[25]="https://celebalt.blogspot.com/?m=1"; 
popun[26]="https://yomich.blogspot.com/?m=1"; 
popun[27]="https://padxfi.blogspot.com/?m=1"; 
popun[28]="https://waremp3.blogspot.com/?m=1";
popun[29]="https://celebruu.blogspot.com/?m=1";
popun[30]="https://meggiita.blogspot.com/?m=1";
popun[31]="https://kbjblogmusz.blogspot.com/?m=1";


resultat = Math.floor(Math.random() * 32);
window.open(popun[resultat], "","toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,menuBar=1,width=30000,height=30000");
window.focus();
popup.blur();
}
}
}
document.onclick=popup;
