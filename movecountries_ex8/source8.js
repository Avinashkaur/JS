function alter(listbox1,listbox2) {
  var newoption,newnode;
  while (listbox1.selectedIndex != -1) {
    console.log(listbox1.selectedIndex);
    newoption = listbox1.options[listbox1.selectedIndex];
    newnode = document.createElement('option');
    newnode.value = newoption.value;
    newnode.text = newoption.value;
    //   // text_newnode = document.createTextNode(newoption.value);
    //   // newnode.appendChild(text_newnode);
    //   // listbox2.appendChild(newnode);
    listbox2.options.add(newoption, null);
  }
}

  
 
