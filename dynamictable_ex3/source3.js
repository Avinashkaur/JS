  var count = 0;
  function insert_row() {
    var data_Table = document.getElementById("dataGrid");
    var data_Row = data_Table.insertRow(-1);
    count++;
    data_Row.setAttribute("id",count);
    // var dLength = dTable.rows.length;
    // var data_Row = dTable.insertRow(dLength);
    var data_cell0 = data_Row.insertCell(0);
    var data_cell1 = data_Row.insertCell(1);
    var data_cell2 = data_Row.insertCell(2);
    var input_box = document.createElement('input');
    var input_box1 = document.createElement('input');

    var save_button = document.createElement('input');
    save_button.setAttribute('type','button');
    save_button.setAttribute('name','Save');
    save_button.setAttribute('value','Save');

    data_cell0.appendChild(input_box);
    data_cell1.appendChild(input_box1);
    data_cell2.appendChild(save_button);

    var delete_button = document.createElement('input');
    var edit_button = document.createElement('input');


    edit_button.setAttribute('type','button');
    edit_button.setAttribute('name','Edit');
    edit_button.setAttribute('value','Edit');

      
    delete_button.type = 'button';
    delete_button.name = count;
    delete_button.value = 'Delete';
  

    save_button.onclick = function () {
      var data_Text1 = document.createTextNode(input_box.value);
      var data_Text2 = document.createTextNode(input_box1.value);


      data_cell0.replaceChild(data_Text1,input_box);
      data_cell1.replaceChild(data_Text2,input_box1);
      data_cell2.replaceChild(delete_button,save_button);
      data_cell2.appendChild(edit_button);

      edit_button.onclick = function() {
        data_cell0.replaceChild(input_box,data_Text1);
        data_cell1.replaceChild(input_box1,data_Text2);
        data_cell2.replaceChild(save_button,edit_button);
        data_cell2.removeChild(delete_button);
      }
    }


      delete_button.onclick = function() {
        var selected_row = document.getElementById(this.name);
        var table_body = data_Table.tBodies[0];
       
        table_body.removeChild(selected_row);
      }
  }
        
        


  




  

