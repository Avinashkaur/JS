var JSONobject = [
  { "imageurl" : "1.jpg" , 
    "Caption" : "Apple MacBook Pro MA464LL/A 15.4 Notebook PC" ,
    "category" : "Category: Computers" , 
    "quantity" : "1" ,
    "Description" : "The Intel Core Duo powering MacBook Pro is actually two processors built into a single chip." ,
    "price" : "2299.99"
  } , 
  { "imageurl" : "2.jpg" , 
    "Caption" : "Sony VAIO 11.1" , 
    "category" : "Category: Computers" ,
    "quantity" : "1" ,
    "Description" : "Weighing in at just an amazing 2.84 pounds and offering a sleek, durable carbon-fibre case in charcoal black. And with 4 to 10 hours of standard battery life, it has the stamina to power you through your most demanding applications" , 
    "price" : "2699.99"
  } ,
  { "imageurl" : "3.jpg" , 
    "Caption" : "Canon Digital Rebel XT 8MP Digital SLR Camera" ,
    "category" : "Category: Cameras" , 
    "quantity" : "1" ,
    "Description" : "Canon EOS Digital Rebel XT SLR adds resolution, speed, extra creative control, and enhanced comfort in the hand to one of the smallest and lightest digital cameras in its class" , 
    "price" : "550.00" 
  }
  ];
var total_items = document.getElementById('numberofitems');
var JSONcartarray = [];
var count = 0, sum = 0;
var sum_total = document.getElementById('totalprice');
var product_list = document.getElementById('itemslist');
var shopping_cart = document.getElementById('cart');
var contentpage = document.getElementsByClassName('content_page');
sum_total.disabled = true;
function product_function() {
  contentpage[1].style.display = 'none';
  contentpage[0].style.display = 'block';
  categories();
  total_items.innerHTML = JSONcartarray.length;
}
function cart_function() {
  contentpage[0].style.display = 'none';
  contentpage[1].style.display = 'block';
  displaycart();
  total_items.innerHTML = JSONcartarray.length;
}
function categories() {
  
  product_list.innerHTML = "";
  for ( i = 0; i < JSONobject.length; i++) {
    var cell1 = document.createElement('div');
    cell1.style.display = 'table-cell';
    cell1.style.width = '100px';
    var new_image = document.createElement('img');
    new_image.setAttribute('src', JSONobject[i].imageurl);
    new_image.style.height = '100px';
    new_image.style.display = 'inline';
    new_image.style.margin = '2px';
    new_image.style.paddingTop = '10px';
    new_image.style.paddingLeft = '10px';

    cell1.appendChild(new_image);

    var cell2 = document.createElement('div');
    cell2.style.display = 'table-cell';
    cell2.style.width = '400px';
    cell2.style.verticalAlign = 'top';
    cell2.style.paddingTop = '10px';

    var new_caption = document.createElement('label');
    new_caption.style.fontFamily = 'Tahoma';
    new_caption.style.fontSize = '15px';
    new_caption.style.fontWeight = 'bold';
    new_caption.style.paddingTop = '2px';
    new_caption.style.paddingBottom = '2px';
    new_caption.style.marginLeft = '2px';
    new_caption.style.width = '300px';
    new_caption.innerHTML = JSONobject[i].Caption;

    var category_label = document.createElement('label');
    category_label.innerHTML = JSONobject[i].category;
    category_label.style.font = '15px Tahoma';
    category_label.style.color = '#747462';
    category_label.style.marginLeft = '5px';
    category_label.style.display = 'block';
    category_label.style.paddingBottom = '2px';
    category_label.style.paddingTop = '2px';
    
    var description = document.createElement('p');
    description.innerHTML = JSONobject[i].Description;
    description.style.paddingTop = '2px';
    description.style.paddingBottom = '2px';
    description.style.paddingLeft = '2px';
    description.style.paddingRight = '2px';
    description.style.fontFamily = 'Tahoma';
    description.style.fontSize = '12px';
    description.style.textAlign = 'justify';
    description.style.color = '#747462';
    description.style.display = 'block';
    description.style.marginLeft = '5px';

    var item_price = document.createElement('label');
    var price_label = document.createElement('label');
    var pricename = document.createTextNode('Price: ');
    price_label.style.fontFamily = 'Tahoma';
    price_label.style.fontWeight = 'bold';
    price_label.style.fontSize = '15px';
    price_label.style.display = 'inline';
    price_label.style.marginLeft = '5px';
    price_label.style.paddingTop = '2px';
    price_label.appendChild(pricename);

    item_price.innerHTML = JSONobject[i].price;
    item_price.style.fontFamily = 'Tahoma';
    item_price.style.fontWeight = 'bold';
    item_price.style.fontSize = '15px';
    item_price.style.paddingTop = '2px;'
    item_price.style.display = 'inline';
    
    cell2.appendChild(new_caption);
    cell2.appendChild(category_label);
    cell2.appendChild(description);
    cell2.appendChild(price_label);
    cell2.appendChild(item_price);

    var cell3 = document.createElement('div');
    cell3.style.display = 'table-cell';
    cell3.style.width = '100px';
    cell3.style.verticalAlign = 'top';
    cell3.style.paddingTop = '10px';
    cell3.style.paddingLeft = '20px';

    var quantity_label = document.createElement('label');
    var quan_text = document.createTextNode('Quantity');
    quantity_label.appendChild(quan_text);

    var quantity_box = document.createElement('input');
    quantity_box.setAttribute('type' , 'text');
    quantity_box.setAttribute('onchange' , 'changenumber(this)');
    quantity_box.setAttribute('name' , i);
    quantity_box.style.borderStyle = 'solid';
    quantity_box.style.borderWidth = '1px';
    quantity_box.style.borderColor = '#747462';
    quantity_box.style.width = '30px';
    quantity_box.value = JSONobject[i].quantity;

    cell3.appendChild(quantity_label);
    cell3.appendChild(quantity_box);

    var cell4 = document.createElement('div');
    cell4.style.display = 'table-cell';
    cell4.style.verticalAlign = 'top';
    cell4.style.paddingTop = '10px';
    cell4.style.paddingLeft = '10px';
    cell4.style.width = '105px';
    
    var addtocart_button = document.createElement('input');
    addtocart_button.setAttribute('type' , 'button');
    addtocart_button.setAttribute('value' , 'Add To Cart');
    addtocart_button.setAttribute('id' , i);
    addtocart_button.setAttribute('onclick' , 'addtocart(this)');
    addtocart_button.style.backgroundColor = 'white';
    addtocart_button.style.fontFamily = 'Tahoma';
    addtocart_button.style.fontSize = '15px';
    addtocart_button.style.color = '#747462';
    addtocart_button.style.borderStyle = 'solid';
    addtocart_button.style.borderWidth = '1px'
    addtocart_button.style.borderColor = '#747462';
    addtocart_button.style.paddingTop = '2px';
    addtocart_button.style.paddingBottom = '2px';
    addtocart_button.style.width = '100px';

    cell4.appendChild(addtocart_button);

    var new_item = document.createElement('li');
    new_item.style.paddingTop = '5px';
    new_item.style.paddingBottom = '10px';
    new_item.style.paddingRight = '5px';
    new_item.style.paddingLeft = '5px';
    new_item.style.margin = '2px';
    new_item.style.backgroundColor = '#e5e5e3';
    new_item.style.height = '115px';
    new_item.style.width = '1010px';
    new_item.style.display = "table";
    new_item.appendChild(cell1);
    new_item.appendChild(cell2);
    new_item.appendChild(cell3);
    new_item.appendChild(cell4);
    
    product_list.appendChild(new_item);
  }
}
function changenumber(number) {
    JSONobject[number.name].quantity = number.value;
}
function addtocart(idname) {
   var counter = idname.id;
   JSONcartarray[count] = JSONobject[counter];
   total_items.innerHTML = JSONcartarray.length;
   count++;
   total_sum();
}
function changecartitemnumber(newnumber) {
    newnumber.value = newnumber.value;
    JSONcartarray[newnumber.id].quantity = newnumber.value;
    displaycart();
    total_sum();
}
function displaycart() {
  shopping_cart.innerHTML = "";
  for (var i = 0; i < JSONcartarray.length; i++ ) {
    var cell1 = document.createElement('div');
    cell1.style.width = '450px';
    cell1.style.display = 'table-cell';
    cell1.style.marginRight = '1px';
    cell1.style.verticalAlign = 'top';

    var smallimg = document.createElement('img');
    smallimg.style.width = '50px';
    smallimg.style.height = '40px';
    smallimg.style.border = 'solid 1px #747462';
    smallimg.style.margin = '2px';
    smallimg.setAttribute('src' , JSONcartarray[i].imageurl);

    var smallcaption = document.createElement('label');
    smallcaption.style.width = '200px';
    smallcaption.style.fontSize = '12px';
    smallcaption.style.fontWeight = 'bold';
    smallcaption.innerHTML = JSONcartarray[i].Caption;

    cell1.appendChild(smallimg);
    cell1.appendChild(smallcaption);

    var cell2 = document.createElement('div');
    cell2.style.width = '150px';
    cell2.style.display = 'table-cell';
    var cart_price = document.createElement('label');
    cart_price.innerHTML = JSONcartarray[i].price;

    cell2.appendChild(cart_price);

    var cell3 = document.createElement('div');
    cell3.style.display = 'table-cell';
    cell3.style.marginLeft = '1px';
    cell3.style.width = '100px';
    var cart_quantity = document.createElement('input');
    cart_quantity.setAttribute('type','text');
    cart_quantity.setAttribute('id' , i);
    cart_quantity.setAttribute('value', JSONcartarray[i].quantity);
    cart_quantity.setAttribute('onchange' , 'changecartitemnumber(this)');
    cart_quantity.style.width = '50px';
    cell3.appendChild(cart_quantity);

    var cell4 = document.createElement('div');
    cell4.style.display = 'table-cell';
    cell4.style.marginLeft = '1px';
    cell4.style.width = '150px';
    var cart_subtotal = document.createElement('label');
    var num = cart_quantity.getAttribute('value');
    cart_subtotal.innerHTML = (parseFloat(JSONcartarray[i].quantity) * parseFloat(JSONcartarray[i].price)).toFixed(2);
    cell4.appendChild(cart_subtotal);

    var cell5 = document.createElement('div');
    cell5.style.display = 'table-cell';
    cell5.style.marginLeft = '1px';
    var remove_button = document.createElement('input');
    remove_button.setAttribute('type','button');
    remove_button.setAttribute('value','Remove');
    remove_button.setAttribute('name' , i);
    remove_button.setAttribute('onclick' , 'remove_item(this)');
    cell5.appendChild(remove_button);

   var shopped_item = document.createElement('li');
   shopped_item.style.width = '1010px';
   shopped_item.style.backgroundColor = '#e5e5e3';
   shopped_item.style.marginTop = '2px';
   shopped_item.style.display = 'table';

   shopped_item.appendChild(cell1);
   shopped_item.appendChild(cell2);
   shopped_item.appendChild(cell3);
   shopped_item.appendChild(cell4);
   shopped_item.appendChild(cell5);

   shopping_cart.appendChild(shopped_item);
  }
}
function remove_item(remove_row) {
    JSONcartarray.splice(remove_row.name , 1);
    console.log(JSONcartarray);
    displaycart();
    total_items.innerHTML = JSONcartarray.length;
    total_sum();
}
function total_sum() {
  // try {
    sum = 0;
    console.log("hi", JSONcartarray.length);
    console.log(JSONcartarray);
    for (var i = 0; i < JSONcartarray.length; i++) {
      sum = parseFloat(sum) + (parseFloat(JSONcartarray[i].price) * parseFloat(JSONcartarray[i].quantity));
    // }
    sum_total.value = sum.toFixed(2);
  // }
  // catch(exception) {
  //   sum_total.value = '0';
  // }
 }   
}
//total_sum();