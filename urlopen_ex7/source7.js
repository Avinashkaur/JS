function prompt_url() {
  var url = " ";


  do {
    url = prompt ("Enter the url" , " ");

    if ( (url != null) && (url = url.trim()).length != 0) {
      window.open (url , "_blank", "width = 400 height = 450 resizable = no scrollable = no status = no toolbar = no ") ;
    }
    else {
      alert ("You cannot leave the URL blank");
    }
  }while ( (url == null) || ((url = url.trim()).length == 0));

}