function match_sub() {
    var url_pattern = /^(https?:\/\/)?((([A-z0-9]+)\.)*)([A-z0-9]+\.[A-z]{2,4})$/;
    var url = document.getElementById("url1").value;
    if (url.trim() == "") {
        alert("empty url");
      return false;
    } else {
        url.match(url_pattern);
        var sub = RegExp.$2;
        var subdomain = sub.substr(0, sub.length-1);
        //alert(subdomain);
        if (subdomain == "") {
            alert("Domain: " + RegExp.$5);
        } else {
            alert("Domain: " + RegExp.$5 + ", Subdomain: " + subdomain);
        }
    }
}