function match_sub() {
    var url_pattern = /^(https?:\/\/)?((([A-z0-9]+)\.)*)([A-z0-9]+\.[A-z]{2,4})$/;
    var url = document.getElementById("url1").value;
    if (url.trim() == "") {
        alert("empty url");
      return false;
    } else {
        url.match(url_pattern);
        var sub_domain = RegExp.$2;
        console.log(RegExp.$2);
        if (sub_domain == "") {
            alert("Domain: " + RegExp.$5);
        } else {
            alert("Domain: " + RegExp.$5 + ", Subdomain: " + RegExp.$4);
        }
    }
}