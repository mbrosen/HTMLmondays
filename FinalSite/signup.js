"use strict";


window.addEventListener("load", function() {
  let orderForm = document.forms.orderForm;
  let plan = orderForm.elements.plan;

  plan.focus();

  for (let i = 0; i < orderForm.elements.length; i++) {
    orderForm.elements[i].addEventListener("change", calcOrder);
  }

  calcOrder();

  function calcOrder() {
    let mIndex = plan.selectedIndex;
    let mValue = plan.options[mIndex].value;
  
    let qIndex = orderForm.elements.duration.selectedIndex;
    let quantity = orderForm.elements.duration[qIndex].value;
  
    let modelCost = mValue * quantity;
    orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});


    let subtotal = modelCost ;
    orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});;

    let salesTax = subtotal * 0.05;
    orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});;

    let totalCost = subtotal + salesTax;
    orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});;

    orderForm.elements.modelName.value = plan.options[mIndex].text;
    let selectedPlan = document.querySelector('input[name="plan"]:checked');
    orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
  }
});

