var JSONObjectArray = [ { "imageurl" : "1.jpg" , 
                     "Caption" : "Apple MacBook Pro MA464LL/A 15.4 Notebook PC" ,
                     "category" : "Category: Computers" ,
                     "quantity" : "1" ,
                     "Description" : "The Intel Core Duo powering MacBook Pro is actually two processors built into a single chip." ,
                     "price" : "2299.99" ,
                     "subtotal" : "",
                     "state" : false
                    } , 
                    { "imageurl" : "2.jpg" ,
                      "Caption" : "Sony VAIO 11.1" , 
                      "category" : "Category: Computers" ,
                      "quantity" : "1" ,
                      "Description" : "Weighing in at just an amazing 2.84 pounds and offering a sleek, durable carbon-fibre case in charcoal black. And with 4 to 10 hours of standard battery life, it has the stamina to power you through your most demanding applications" , 
                      "price" : "2699.99",
                      "subtotal" : "" ,
                      "state" : false
                    } ,
                    { "imageurl" : "3.jpg" , 
                      "Caption" : "Canon Digital Rebel XT 8MP Digital SLR Camera" ,
                      "category" : "Category: Cameras" , 
                      "quantity" : "1" ,
                      "Description" : "Canon EOS Digital Rebel XT SLR adds resolution, speed, extra creative control, and enhanced comfort in the hand to one of the smallest and lightest digital cameras in its class" , 
                      "price" : "550.00",
                      "subtotal" : "",
                      "state" : false
                    }
                 ];
var total_items = document.getElementById('numberofitems');
var JSONCartArray = [], count = 0, sum = 0, selected_items = 0;
var sum_total = document.getElementById('totalprice');
var product_list = document.getElementById('itemslist');
var shopping_cart_list = document.getElementById('cart');
var content_page = document.getElementsByClassName('content_page');
sum_total.disabled = true;
var cart_subtotal = document.createElement('label');
function loadCategories() {
  content_page[1].style.display = 'none';
  content_page[0].style.display = 'block';
  product_list.innerHTML = "";
  for ( i = 0; i < JSONObjectArray.length; i++) {
    var new_item_row = insert_item('li' , 'listitem' , product_list);
    var cell1 = insert_item('div' , "imagecell" , new_item_row);
    var cell2 = insert_item('div' , "infocell" , new_item_row);
    var cell3 = insert_item('div' , "quantitycell" , new_item_row);
    var cell4 = insert_item('div' , "addToCartCell" , new_item_row);

    var new_image = insert_item('img', 'prod_image', cell1);
    new_image.setAttribute('src', JSONObjectArray[i].imageurl);

    var new_caption = insert_item('label', 'caption_label', cell2);
    new_caption.innerHTML = JSONObjectArray[i].Caption;
    var category_label = insert_item('label', 'categorylabel', cell2);
    category_label.innerHTML = JSONObjectArray[i].category;
    var description = insert_item('p', 'describe', cell2);
    description.innerHTML = JSONObjectArray[i].Description;
    var price_label = insert_item('label', 'pricelabel', cell2);
    var price_name = document.createTextNode('Price: ');
    price_label.appendChild(price_name);
    var item_price = insert_item('label', 'itemprice', cell2);
    item_price.innerHTML = JSONObjectArray[i].price;

    var quantity_label = insert_item('label', '',cell3);
    var quantity_text = document.createTextNode('Quantity');
    quantity_label.appendChild(quantity_text);
    var quantity_box = insert_item('input' , 'quantitybox', cell3);
    quantity_box.setAttribute('type' , 'text');
    quantity_box.setAttribute('onchange' , 'changenumber(this)');
    quantity_box.setAttribute('name' , i);
    quantity_box.value = JSONObjectArray[i].quantity;

    var addtocart_button = insert_item('input', 'addToCartButton', cell4);
    addtocart_button.setAttribute('type' , 'button');
    addtocart_button.setAttribute('value' , 'Add To Cart');
    addtocart_button.setAttribute('id' , i);
    addtocart_button.setAttribute('onclick' , 'addtocart(this)');
  }
}
function insert_item(elementType , classname, parentItem) {
  var new_item = document.createElement(elementType);
  new_item.setAttribute("class" , classname);
  parentItem.appendChild(new_item);
  return new_item;
}
function changenumber(number) {
  JSONObjectArray[number.name].quantity = number.value;
}
function addtocart(addButton) {
  var counter = addButton.id;
   
  if(!(JSONObjectArray[counter].state)) {
    JSONCartArray[count] = {"imageurl" : JSONObjectArray[counter].imageurl,
                            "Caption" : JSONObjectArray[counter].Caption,
                            "category" : JSONObjectArray[counter].category,
                            "price" : JSONObjectArray[counter].price,
                            "productno" : counter,
                            "quantity" : JSONObjectArray[counter].quantity,
                            "subtotal" : (JSONObjectArray[counter].quantity * JSONObjectArray[counter].price).toFixed(2)
                          };
    JSONObjectArray[counter].state = true;
    selected_items = JSONCartArray.length;
    total_items.innerHTML = selected_items;
    count++;
  }
  else {
    for(var i = 0; i < JSONCartArray.length; i++) {
      if(JSONCartArray[i].productno == counter) {
        JSONCartArray[i].quantity = JSONObjectArray[counter].quantity;
        JSONCartArray[i].subtotal = (JSONObjectArray[counter].quantity * JSONObjectArray[counter].price).toFixed(2);
      }
    }
  }
  displayTotal();
}
function updateCart(new_number) {
  var new_number_value = new_number.value;
  JSONCartArray[new_number.id].quantity = new_number_value;
  JSONCartArray[new_number.id].subtotal = (JSONCartArray[new_number.id].quantity * JSONCartArray[new_number.id].price).toFixed(2);
  displayCart();
  displayTotal();
}
function displayCart() {
  content_page[0].style.display = 'none';
  content_page[1].style.display = 'block';
  shopping_cart_list.innerHTML = "";
  for (var i = 0; i < JSONCartArray.length; i++ ) {
    var shopped_item = insert_item('li', 'showListItem', shopping_cart_list);

    var cell1 = insert_item('div', 'showProductCell', shopped_item);
    var cell2 = insert_item('div', 'showPriceCell', shopped_item);
    var cell3 = insert_item('div', 'showQuantityCell', shopped_item);
    var cell4 = insert_item('div', 'showSubtotalCell', shopped_item);
    var cell5 = insert_item('div', 'removeButtonCell', shopped_item);
    
    var smallimg = insert_item('img', 'showImage', cell1);
    smallimg.setAttribute('src' , JSONCartArray[i].imageurl);
    var smallcaption = insert_item('label', 'showCaption', cell1);
    smallcaption.innerHTML = JSONCartArray[i].Caption;

    var cart_price = insert_item('label', '', cell2);
    cart_price.innerHTML = JSONCartArray[i].price;
    var cart_quantity = insert_item('input', 'showQuantity', cell3);
    cart_quantity.setAttribute('type','text');
    cart_quantity.setAttribute('id' , i);
    cart_quantity.setAttribute('value',JSONCartArray[i].quantity);
    cart_quantity.setAttribute('onchange' , 'updateCart(this)');

    var cart_subtotal = insert_item('label', '', cell4);
    cart_subtotal.innerHTML = JSONCartArray[i].subtotal;

    var remove_button = insert_item('input', '', cell5);
    remove_button.setAttribute('type','button');
    remove_button.setAttribute('value','Remove');
    remove_button.setAttribute('row' , i);
    remove_button.setAttribute('onclick' , 'remove_item(this)');
  }
}
function remove_item(remove_row) {
  var selected_row = remove_row.parentNode.parentNode;
  selected_row.parentNode.removeChild(selected_row);
  var updatedState;
  var selected_attribute = remove_row.parentNode.parentNode.childNodes[0].childNodes[0].getAttribute("src");
  for (var i = 0; i < JSONCartArray.length; i++) {
    if(JSONCartArray[i].imageurl.match(selected_attribute)) {
      updatedState = JSONCartArray[i].productno;
      JSONCartArray.splice(i , 1);
    }
  }
  JSONObjectArray[updatedState].state = false;
  total_items.innerHTML = JSONCartArray.length;
  displayTotal();
  count--;
}
function displayTotal() {
  sum = 0;
  for (var i = 0; i < JSONCartArray.length; i++) {
    sum = (parseFloat(sum,10) + parseFloat(JSONCartArray[i].subtotal,10)).toFixed(2);
  }
  sum_total.value = sum;
}
loadCategories();
displayTotal();