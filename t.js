function popup(event) {
    const isNewPage = sessionStorage.getItem("dj_new_page");
    const lastPopupTime = sessionStorage.getItem("dj_popup_time");
    const currentTime = Date.now();
    const cooldown = 20 * 1000; 

    if (isNewPage === "1" || !lastPopupTime || (currentTime - parseInt(lastPopupTime) >= cooldown)) {
        if (isNewPage === "1") {
            sessionStorage.setItem("dj_new_page", "0");
        }
        sessionStorage.setItem("dj_popup_time", currentTime);

        var popun = [
           "http://it.ivyrc.com",   
"http://ce.ivyrc.com",
"http://fappening.ivyrc.com/",
"http://br.ivyrc.com", 
"https://dlmusz.blogspot.com/?m=1", 
"https://tntita.blogspot.com/?m=1", 
"https://sdfsefds.blogspot.com/?m=1", 
"https://hihantwe.blogspot.com/?m=1", 
"https://yaswpra.blogspot.com/?m=1", 
"https://cealr.blogspot.com/?m=1", 
"https://sowildpthi.blogspot.com/?m=1", 
"https://wissindo.blogspot.com/?m=1", 
"https://nycmetropolitan.blogspot.com/?m=1", 
"https://tnayrc.blogspot.com/?m=1", 
"https://myrf.doorblog.jp",
"https://indoviral.doorblog.jp",
"https://treatjayworkman.com/teu8buq89?key=0acc444b1acc11d1802dc4d267126db3",
"https://treatjayworkman.com/iu621n1s?key=9775eb36f28ff22c9ec5accd9bb32af5",
"https://treatjayworkman.com/iucas28k?key=27dae133e561a67065ac5dba8fa9aa46",
"https://spichen.blogspot.com/?m=1", 
"https://treatjayworkman.com/fi5y0dk1i?key=830c8860463fbd9cb5e3fb1d3db6f450", 
"https://celebalt.blogspot.com/?m=1", 
"https://yomich.blogspot.com/?m=1", 
"https://padxfi.blogspot.com/?m=1", 
"https://waremp3.blogspot.com/?m=1",
"https://celebruu.blogspot.com/?m=1",
"https://meggiita.blogspot.com/?m=1",
"https://kbjblogmusz.blogspot.com/?m=1",
"https://sw.ycyva.com",
"https://ob.ycyva.com",
"https://ys.ycyva.com",
"https://ny.ycyva.com",
"https://jc.ycyva.com",
"https://qr.ivyrc.com",
"https://eb.ayrce.com",
"https://es.ayrce.com",
"https://sx.ivyrc.com",
"https://sg.ivyrc.com",
"https://treatjayworkman.com/azv6thdcy?key=ac69989277ddbb59deee85a5d19ca6c9",
"https://treatjayworkman.com/cd4nm9df?key=79e17d49c524dcf3dcc3ded87245a2a8"
        ];
        var resultat = Math.floor(Math.random() * popun.length);
        var newWindow = window.open(popun[resultat], "", "scrollbars=1,resizable=1");
        if (newWindow) {
            newWindow.blur();
            window.focus();
        }
    }
}

sessionStorage.setItem("dj_new_page", "1");

document.onclick = popup;
