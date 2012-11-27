var JSONObjectArray = [ { "imageurl" : "1.jpg" , 
                     "Caption" : "Apple MacBook Pro MA464LL/A 15.4 Notebook PC" ,
                     "category" : "Category: Computers" ,
                     "quantity" : "1" ,
                     "Description" : "The Intel Core Duo powering MacBook Pro is actually two processors built into a single chip." ,
                     "price" : "2299.99" ,
                     "subtotal" : ""
                    } , 
                    { "imageurl" : "2.jpg" ,
                      "Caption" : "Sony VAIO 11.1" , 
                      "category" : "Category: Computers" ,
                      "quantity" : "1" ,
                      "Description" : "Weighing in at just an amazing 2.84 pounds and offering a sleek, durable carbon-fibre case in charcoal black. And with 4 to 10 hours of standard battery life, it has the stamina to power you through your most demanding applications" , 
                      "price" : "2699.99",
                      "subtotal" : ""
                    } ,
                    { "imageurl" : "3.jpg" , 
                      "Caption" : "Canon Digital Rebel XT 8MP Digital SLR Camera" ,
                      "category" : "Category: Cameras" , 
                      "quantity" : "1" ,
                      "Description" : "Canon EOS Digital Rebel XT SLR adds resolution, speed, extra creative control, and enhanced comfort in the hand to one of the smallest and lightest digital cameras in its class" , 
                      "price" : "550.00",
                      "subtotal" : ""
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
    var cell1 = document.createElement('div');
    cell1.setAttribute('class' , 'imagecell');
    var new_image = document.createElement('img');
    new_image.setAttribute('src', JSONObjectArray[i].imageurl);
    new_image.setAttribute('class' , 'prod_image')
    cell1.appendChild(new_image);

    var cell2 = document.createElement('div');
    cell2.setAttribute('class' , 'infocell');
    var new_caption = document.createElement('label');
    new_caption.setAttribute('class' , 'caption_label')
    new_caption.innerHTML = JSONObjectArray[i].Caption;
    var category_label = document.createElement('label');
    category_label.setAttribute('class' , 'categorylabel');
    category_label.innerHTML = JSONObjectArray[i].category;
    var description = document.createElement('p');
    description.setAttribute('class' , 'describe');
    description.innerHTML = JSONObjectArray[i].Description;
    var item_price = document.createElement('label');
    var price_label = document.createElement('label');
    price_label.setAttribute('class' , 'pricelabel');
    item_price.setAttribute('class' , 'itemprice');
    var price_name = document.createTextNode('Price: ');
    price_label.appendChild(price_name);
    item_price.innerHTML = JSONObjectArray[i].price;
    cell2.appendChild(new_caption);
    cell2.appendChild(category_label);
    cell2.appendChild(description);
    cell2.appendChild(price_label);
    cell2.appendChild(item_price);

    var cell3 = document.createElement('div');
    cell3.setAttribute('class' , 'quantitycell');
    var quantity_label = document.createElement('label');
    var quantity_text = document.createTextNode('Quantity');
    quantity_label.appendChild(quantity_text);
    var quantity_box = document.createElement('input');
    quantity_box.setAttribute('type' , 'text');
    quantity_box.setAttribute('onchange' , 'changenumber(this)');
    quantity_box.setAttribute('name' , i);
    quantity_box.setAttribute('class' , 'quantitybox');
    quantity_box.value = JSONObjectArray[i].quantity;
    cell3.appendChild(quantity_label);
    cell3.appendChild(quantity_box);

    var cell4 = document.createElement('div');
    cell4.setAttribute('class' , 'addToCartCell')
    var addtocart_button = document.createElement('input');
    addtocart_button.setAttribute('type' , 'button');
    addtocart_button.setAttribute('value' , 'Add To Cart');
    addtocart_button.setAttribute('id' , i);
    addtocart_button.setAttribute('onclick' , 'addtocart(this)');
    addtocart_button.setAttribute('class' , 'addToCartButton');
    cell4.appendChild(addtocart_button);

    var new_item = document.createElement('li');
    new_item.setAttribute('class' , 'listitem');
    new_item.appendChild(cell1);
    new_item.appendChild(cell2); 
    new_item.appendChild(cell3);
    new_item.appendChild(cell4);
    product_list.appendChild(new_item);
  }
}
function changenumber(number) {
  JSONObjectArray[number.name].quantity = number.value;
}
function addtocart(addButton) {
  var counter = addButton.id;
  JSONCartArray[count] = { "imageurl" : JSONObjectArray[counter].imageurl,
                           "Caption" : JSONObjectArray[counter].Caption,
                           "category" : JSONObjectArray[counter].category,
                           "quantity" : JSONObjectArray[counter].quantity,
                           "price" : JSONObjectArray[counter].price,
                           "subtotal" : (JSONObjectArray[counter].quantity * JSONObjectArray[counter].price).toFixed(2)
                         };
  selected_items = JSONCartArray.length;
  total_items.innerHTML = selected_items;
  count++;
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
    var cell1 = document.createElement('div');
    cell1.setAttribute('class' , 'showProductCell');
    var smallimg = document.createElement('img');
    smallimg.setAttribute('class' , 'showImage');
    smallimg.setAttribute('src' , JSONCartArray[i].imageurl);
    var smallcaption = document.createElement('label');
    smallcaption.setAttribute('class' , 'showCaption');
    smallcaption.innerHTML = JSONCartArray[i].Caption;
    cell1.appendChild(smallimg);
    cell1.appendChild(smallcaption);

    var cell2 = document.createElement('div');
    cell2.setAttribute('class' , 'showPriceCell')
    var cart_price = document.createElement('label');
    cart_price.innerHTML = JSONCartArray[i].price;
    cell2.appendChild(cart_price);

    var cell3 = document.createElement('div');
    cell3.setAttribute('class' , 'showQuantityCell');
    var cart_quantity = document.createElement('input');
    cart_quantity.setAttribute('type','text');
    cart_quantity.setAttribute('id' , i);
    cart_quantity.setAttribute('value',JSONCartArray[i].quantity);
    cart_quantity.setAttribute('onchange' , 'updateCart(this)');
    cart_quantity.setAttribute('class' , 'showQuantity');
    cell3.appendChild(cart_quantity);

    var cell4 = document.createElement('div');
    cell4.setAttribute('class' , 'showSubtotalCell');
    var cart_subtotal = document.createElement('label');
    cart_subtotal.innerHTML = JSONCartArray[i].subtotal;
    cell4.appendChild(cart_subtotal);

    var cell5 = document.createElement('div');
    cell5.setAttribute('class' , 'removeButtonCell')
    var remove_button = document.createElement('input');
    remove_button.setAttribute('type','button');
    remove_button.setAttribute('value','Remove');
    remove_button.setAttribute('name' , i);
    remove_button.setAttribute('onclick' , 'remove_item(this)');
    cell5.appendChild(remove_button);

    var shopped_item = document.createElement('li');
    shopped_item.setAttribute('class' , 'showListItem');
    shopped_item.appendChild(cell1);
    shopped_item.appendChild(cell2);
    shopped_item.appendChild(cell3);
    shopped_item.appendChild(cell4);
    shopped_item.appendChild(cell5);
    shopping_cart_list.appendChild(shopped_item);
  }
}
function remove_item(remove_row) {
    JSONCartArray.splice(remove_row.name , 1);
    count--;
    displayCart();
    total_items.innerHTML = JSONCartArray.length;
    displayTotal();
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