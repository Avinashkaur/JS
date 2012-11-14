function initial() {
  var addButton = document.getElementById('add');
  var remButton = document.getElementById('remove');
  var fListbox = document.getElementById('select1');
  var sListbox = document.getElementById('select2');
  var newOption,newOptionText,item;
  addButton.onclick = function () {
    for (var i=0; i < fListbox.options.length; i++) {
      item = fListbox.options[i];
      if(item.selected) {
        newOption = document.createElement('option');
        newOptionText = document.createTextNode(item.value);
        newOption.setAttribute("value", item.value);
        newOption.appendChild(newOptionText);
        sListbox.appendChild(newOption);
        //console.log(fListbox.selectedIndex);
        fListbox.remove(fListbox.selectedIndex);
      }
    }
  }

  remButton.onclick = function () {
    for (var i=0; i < sListbox.options.length; i++) {
      item = sListbox.options[i];
      if (item.selected) {
        newOption = document.createElement('option');
        newOptionText = document.createTextNode(item.value);
        newOption.setAttribute("value", item.value);
        newOption.appendChild(newOptionText);
        fListbox.appendChild(newOption);
        sListbox.remove(sListbox.selectedIndex);
      }
    }
  }
}
