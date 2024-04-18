"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Miles Rosenstadt
   Date:   4/15/2024 
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0; 
var cartHTML = "<table><tr><th>Item</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for (var i = 0; i < item.length; i++) {
   cartHTML+= ""
}
// Loop through each item in the order
for (var i = 0; i < item.length; i++) {
    // Add order properties to the cart
    cartHTML += "<tr><td><img src='images/tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>" +
        "<td>$" + itemPrice[i] + "</td>" +
        "<td>" + itemQty[i] + "</td>";

   // Calculate item cost
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>"; 

    // Add item cost to order total
    orderTotal += itemCost;
}

// Add order total to end of cart
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"

// Write the cart to the element with the id "cart"
document.getElementById("cart").innerHTML = cartHTML;