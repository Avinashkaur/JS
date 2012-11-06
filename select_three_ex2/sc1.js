var days = document.getElementsByClassName("day"), i, count = 0, txt = "";

function select_checkbox() {
    document.getElementById("uncheck").checked = false;
	if (this.checked == true) {
	    count = count + 1;
	}
	else if (this.checked == false) {
	    count = count - 1;
	}
    
    if (count > 3) {
        this.checked = false;
        count--;
		for (i = 0; i < days.length; i++) {
	        if (days[i].checked) {
			    txt = txt + " " + days[i].value;	
		    }
        
        }
		alert("you can select only 3 values.You have already selected:" + txt);
		txt = "";
        	
	}
	
}

function select_none() {
    for (i = 0; i < days.length; i++) {
        days[i].checked = false;
    }
    
    count = 0;
    txt = "";
}

for (i = 0; i < days.length; i++) {
    days[i].onclick = select_checkbox;
}