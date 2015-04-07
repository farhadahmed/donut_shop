(function() {

  //DonutShop constructor
  //Number of hours open each day should be on the object
  var DonutShop = function(locationName, options) {
    this.locationName = locationName;
    this.minHourlyCustomers = options.minHourlyCustomers;
    this.maxHourlyCustomers = options.maxHourlyCustomers;
    this.avgDonutsPerCustomer = options.avgDonutsPerCustomer;
    this.opens = options.opens || 700;
    this.closes = options.closes || 1800;
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

  var downtown = new DonutShop('Downtown', {minHourlyCustomers: 20, maxHourlyCustomers: 90, avgDonutsPerCustomer: 4.5});
  var capitolHill = new DonutShop('Capitol Hill', {minHourlyCustomers: 15, maxHourlyCustomers: 70, avgDonutsPerCustomer: 1.5});
  var bellevue = new DonutShop('Bellevue', {minHourlyCustomers: 2, maxHourlyCustomers: 15, avgDonutsPerCustomer: 6});
  var redmond = new DonutShop('Redmond', {minHourlyCustomers: 1, maxHourlyCustomers: 22, avgDonutsPerCustomer: 3});
  var tacoma = new DonutShop('Tacoma', {minHourlyCustomers: 0, maxHourlyCustomers: 10, avgDonutsPerCustomer: 1});


  var list = document.getElementById('donutList');

  DonutShop.prototype.render = function() {
    var dailyTotal = this.donutsPerDay();
    for (i = 0; i < this.donutPerHour.length; i++) {
      var td = document.createElement('td');
      td.innerHTML = this.donutPerHour[i];
      var location = document.getElementById(this.locationName);
      location.appendChild(td);
    };
    td.innerHTML = dailyTotal;
    location.appendChild(td);
  };

  downtown.render();
  capitolHill.render();
  bellevue.render();
  redmond.render();
  tacoma.render();

})();
