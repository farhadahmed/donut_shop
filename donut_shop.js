(function() {
  window.stores = [];
  stores = window.stores;
  //DonutShop constructor
  //Number of hours open each day should be on the object
  var DonutShop = function(locationName, minHourlyCustomers, maxHourlyCustomers, avgDonutsPerCustomer, hoursOpen) {
    this.locationName = locationName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgDonutsPerCustomer = avgDonutsPerCustomer;
    this.opens = opens || 700;  //setting to military time simplifies setting this.hoursOpen
    this.closes = closes || 1800;
    this.hoursOpen = (this.closes - this.opens)/100;
    this.donutPerHour = [];
  };

  //Randomly generate number of customers per hour
  DonutShop.prototype.generateRandomHourlyCustomers = function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;
  };

  DonutShop.prototype.donutsNeededPerHour = function() {
    return Math.floor(this.generateRandomHourlyCustomers() * this.avgDonutsPerCustomer);
  };

  DonutShop.prototype.donutsPerDay = function() {
    var total = 0;
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourly = this.donutsNeededPerHour();
      this.donutPerHour.push(hourly);
      total += this.donutsNeededPerHour();
    };
    return total;
  };

  DonutShop.prototype.render = function() {
    var dailyTotal = this.donutsPerDay();
    var elTr = document.createElement('tr');
    var elTh = document.createElement('th');
    var elDailyDonuts = document.createElement('td');
    elTh.target.value = this.storeName;
    elTr.appendChild(elTh);
    for (i = 0; i < this.donutPerHour.length; i++) {
      var elHourly = document.createElement('td');
      elHourly.target.value = this.donutPerHour[i];
      elTr.appendChild(elHourly);
    };
    elDailyDonuts.target.value = dailyTotal;
    elTr.appendChild(elDailyDonuts);
    return elTr;
  };

  window.renderStoreData = function() {
    var elTable = document.getElementById('donut-stores');
    stores.forEach(function(store) {
      elTable.appendChild(store.render());
    })
  };
  stores.push(new DonutShop('Downtown', 8, 4, 5));
  window.renderStoreData();

  window.DonutShop = DonutShop;

})();
