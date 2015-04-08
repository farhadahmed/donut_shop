(function() {
  window.stores = [];
  stores = window.stores;
  //DonutShop constructor
  //Number of hours open each day should be on the object
  var DonutShop = function(locationName, minHourlyCustomers, maxHourlyCustomers, avgDonutsPerCustomer) {
    this.locationName = locationName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgDonutsPerCustomer = avgDonutsPerCustomer;
    this.opens = 700;  //setting to military time simplifies setting this.hoursOpen
    this.closes = 1800;
    this.hoursOpen = (this.closes - this.opens)/100;
    this.donutPerHour = [];
  };

  //Randomly generate number of customers per hour
  DonutShop.prototype.generateRandomHourlyCustomers = function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;
  };

  //Generate how many donuts the store needs to bake per hour depending on how many customers are coming in each hour
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
    elTh.innerHTML = this.locationName;
    elTr.appendChild(elTh);
    for (i = 0; i < this.hoursOpen - 1; i++) {
      var elHourly = document.createElement('td');
      elHourly.innerHTML = this.donutPerHour[i];
      elTr.appendChild(elHourly);
    };
    elDailyDonuts.innerHTML = dailyTotal;
    elTr.appendChild(elDailyDonuts);
    return elTr;
  };

  window.renderStoreData = function() {
    var elTable = document.getElementById('donut-stores');
    stores.forEach(function(store) {
      elTable.appendChild(store.render());
    })
  };

  stores.push(new DonutShop('Downtown', 20, 91, 4.5));
  stores.push(new DonutShop('Capitol Hill', 15, 70, 1.5));
  stores.push(new DonutShop('Bellevue', 1, 22, 3));
  stores.push(new DonutShop('Tacoma', 0, 10, 1));
  window.renderStoreData();

  window.DonutShop = DonutShop;

})();
