(function() {
  var DonutShop = window.DonutShop;
  var donutStoreList = document.getElementById('donut-stores');
  var storeForm = document.getElementById('new-store-form');
  window.stores = [];  //Need to empty this array again, otherwise it'll push all DonutShop objects from
  //donut_shop.js with each buttonClick

  storeForm.addEventListener('submit', function() {
    event.preventDefault(); //Prevents form from refreshing the page, thereby deleting new pushes after buttonClick

    //Push values within each input textBox
    stores.push(new DonutShop(
      event.target.locationName.value,
      event.target.minHourlyCustomers.value,
      event.target.maxHourlyCustomers.value,
      event.target.avgDonutsPerCustomer.value));

    window.renderStoreData();

    //To empty the input boxes upon buttonClick
    event.target.locationName.value = null;
    event.target.minHourlyCustomers.value = null;
    event.target.maxHourlyCustomers.value = null;
    event.target.avgDonutsPerCustomer.value = null;
    window.stores = [];
  });
})();
