var cookieinfo;
function CookieExist(CookieName) { cookieinfo = document.cookie; if (cookieinfo.indexOf(CookieName) == -1) { return false; } else { return true; } }
function SetCookie(CookieName,CookieArgs,CookieExpire) { document.cookie = CookieName + "=" + CookieArgs + ";" + "max-age=180" + CookieExpire; }
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
popun[0]="http://hs.ivyrc.com/";
popun[1]="http://mp.musz.info/";
popun[2]="http://bl.ivyrc.com/";
popun[3]="http://gfivyrc.s602.xrea.com/";
popun[4]="http://redp.s1009.xrea.com/";
popun[5]="http://vo.musz.info/";
popun[6]="http://ve.ayrce.com";
popun[7]="http://tv.ayrce.com";
popun[8]="http://it.alrau.com";
popun[9]="http://ga.lynsr.info";
popun[10]="http://de.lynsr.info";
popun[11]="http://it.ivyrc.com";    
popun[12]="http://se.ivyrc.com";     
popun[13]="http://ce.ivyrc.com";
popun[14]="http://tnayr.s1007.xrea.com/";
popun[15]="http://lrmusz.s1007.xrea.com/";
popun[16]="http://ml.ivyrc.com/";
popun[17]="http://pb.ivyrc.com";
popun[18]="http://fappening.ivyrc.com/";
popun[19]="http://pb.musz.info/";
popun[20]="http://a1.lynsr.info";
popun[21]="http://a2.lynsr.info";
popun[22]="http://a3.lynsr.info"; 
popun[23]="http://b1.lynsr.info";
popun[24]="http://b2.lynsr.info";
popun[25]="http://b3.lynsr.info";
popun[26]="http://cv.musz.info";
popun[27]="http://b4.lynsr.info";
popun[28]="http://a4.lynsr.info"; 
popun[29]="http://zx.musz.info";
popun[30]="http://zd.musz.info";
popun[31]="http://yr.musz.info";
popun[32]="http://yq.musz.info";
popun[33]="http://yk.musz.info";
popun[34]="http://xt.musz.info"; 
popun[35]="http://xd.musz.info";
popun[36]="http://wz.musz.info";
popun[37]="http://wo.musz.info";
popun[38]="http://vz.musz.info";
popun[39]="http://vy.musz.info";
popun[40]="http://xy.musz.info"; 
popun[41]="http://br.ivyrc.com"; 

resultat = Math.floor(Math.random() * 42);
window.open(popun[resultat], "","toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,menuBar=1,width=30000,height=30000");
window.focus();
popup.blur();
}
}
}
document.onclick=popup;
