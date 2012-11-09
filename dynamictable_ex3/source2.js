  function insert_row() {
    var dTable = document.getElementById("dataGrid");
   // dTable.tBodies[0].appendChild(document.createElement('tr'));
    var dLength = dTable.rows.length;
    var dRow = dTable.insertRow(dLength);
    var dCell0 = dRow.insertCell(0);
    var dCell1 = dRow.insertCell(1);
    var dCell2 = dRow.insertCell(2);
    var box = document.createElement('input');
    var box1 = document.createElement('input');

    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('type','button');
    buttonnode.setAttribute('name','Save');
    buttonnode.setAttribute('value','Save');

    dCell0.appendChild(box);
    dCell1.appendChild(box1);
    dCell2.appendChild(buttonnode);

    buttonnode.onclick = function () {
      var dText1 = document.createTextNode(box.value);
      var dText2 = document.createTextNode(box1.value);

      var ebutton = document.createElement('input');
      ebutton.setAttribute('type','button');
      ebutton.setAttribute('name','Edit');
      ebutton.setAttribute('value','Edit');

      var dbutton = document.createElement('input');
      dbutton.type = 'button';
      dbutton.name = 'Delete';
      dbutton.value = 'Delete';

      // dbutton.setAttribute('type','button');
      // dbutton.setAttribute('name','Delete');
      // dbutton.setAttribute('value','Delete');

      dCell0.replaceChild(dText1,box);
      dCell1.replaceChild(dText2,box1);
      dCell2.replaceChild(ebutton,buttonnode);
      dCell2.appendChild(dbutton);


  
      dbutton.onclick = function delete_row() {

        var del_row = this.parentNode.parentNode;
        del_row.parentNode.removeChild(del_row);
        // dCell0.removeChild(dText1);
        // dCell1.removeChild(dText2);
        // dCell2.removeChild(dbutton);
        // dCell2.removeChild(ebutton);

        // dRow.removeChild(dCell0);
        // dRow.removeChild(dCell1);
        // dRow.removeChild(dCell2);
        //dTable.removeChild(dRow);

      }

      ebutton.onclick = function edit_row() {
        
        dCell0.replaceChild(box,dText1);
        dCell1.replaceChild(box1,dText2);
        dCell2.replaceChild(buttonnode,ebutton);
        dCell2.removeChild(dbutton);
      }
    }
  }


  




  

