(function() {
  var DonutShop = window.DonutShop;
  var donutStoreList = document.getElementById('donut-stores');
  var storeForm = document.getElementById('new-store-form');
  var storeData = [];

  var handleStoreFormSubmit = function(event) { //prevents page from refreshing after buttonClick
    event.preventDefault();
  };

  storeForm.addEventListener('submit', function() {
    handleStoreFormSubmit();
    stores.push(new DonutShop(event.target.locationName.value, event.target.minHourlyCustomers.value, event.target.maxHourlyCustomers.value, event.target.avgDonutsPerCustomer.value));
    event.target.locationName.value = null;
    event.target.minHourlyCustomers.value = null;
    event.target.maxHourlyCustomers.value = null;
    event.target.avgDonutsPerCustomer.value = null;
    window.renderStoreData();
  });
})();
