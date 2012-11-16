// function initial() {
//   var addButton = document.getElementById('add');
//   var remButton = document.getElementById('remove');
//   var fListbox = document.getElementById('select1');
//   var sListbox = document.getElementById('select2');
//   var newOption,newOptionText,item;
//   addButton.onclick = function () {
//     for (var i=0; i < fListbox.options.length; i++) {
//       item = fListbox.options[i];
//       if(item.selected) {
//         newOption = document.createElement('option');
//         newOptionText = document.createTextNode(item.value);
//         newOption.setAttribute("value", item.value);
//         newOption.appendChild(newOptionText);
//         sListbox.appendChild(newOption);
//         //console.log(fListbox.selectedIndex);
//         fListbox.remove(fListbox.selectedIndex);
//       }
//     }
//   }

//   remButton.onclick = function () {
//     for (var i=0; i < sListbox.options.length; i++) {
//       item = sListbox.options[i];
//       if (item.selected) {
//         newOption = document.createElement('option');
//         newOptionText = document.createTextNode(item.value);
//         newOption.setAttribute("value", item.value);
//         newOption.appendChild(newOptionText);
//         fListbox.appendChild(newOption);
//         sListbox.remove(sListbox.selectedIndex);
//       }
//     }
//   }
// }
function alter(listbox1,listbox2) {
  //console.log(listbox1.id);
  for (var i = 0; i < listbox1.length; i++) {
    item = listbox1.options[i];
    if(item.selected) {
      newOption = document.createElement('option');
      newOptionText = document.createTextNode(item.value);
      newOption.setAttribute("value", item.value);
      newOption.appendChild(newOptionText);
      listbox2.appendChild(newOption);
      listbox1.remove(listbox1.selectedIndex);
    }
  }
}
// function alter(id) {
//  // console.log(id.name);
//   var fListbox = document.getElementById('select1');
//   var sListbox = document.getElementById('select2');
//   var addButton = document.getElementById('add');
//   var newOption,newOptionText,item;
//   //var arr = "";
//   //var newOptions = new Array();
//   for (var i=0; i < id.options.length; i++) {
//     item = id.options[i];
//     if (item.selected) {
//       newOption = document.createElement('option');
//       newOptionText = document.createTextNode(item.value);
//       newOption.setAttribute("value", item.value);
//       newOption.appendChild(newOptionText);
//       //newOptions.push(newOption);
//     }
//   }
  
//   addButton.onclick = function() {
//     // for (var i = 0; i < arr.length; i++) {
//     //   newOption = document.createElement('option');
//     //   newOptionText = document.createTextNode(arr[i].value);
//     //   newOption.setAttribute("value", arr[i].value);
//     //   newOption.appendChild(newOptionText);
//      sListbox.appendChild(newOption);

//     // }
//   }
// }




//       newOption = document.createElement('option');
//       newOptionText = document.createTextNode(item.value);
//       newOption.setAttribute("value", item.value);
//       newOption.appendChild(newOptionText);

//       if(id.name == "list1") {
//         sListbox.appendChild(newOption);
//       }
//       else if (id.name == "list2") {
//         fListbox.appendChild(newOption)
//       }
//       id.remove(id.selectedIndex);
//     }
//   }
// }