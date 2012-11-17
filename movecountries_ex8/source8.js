function alter(listbox1,listbox2) {
  while (listbox1.selectedIndex) {
    var newoption = listbox1.options[listbox1.selectedIndex];
    listbox2.options.add(newoption);
  }
}

  
 
