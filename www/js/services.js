angular.module('starter.services', [])

.factory('yearMonth', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var data = [
    {year: 2016, month: 7, expense: 1200000},
    {year: 2016, month: 6, expense: 1250000},
    {year: 2016, month: 5, expense: 1300000},
  ];

  return {
    query: function() {
      return data;
    }
  };
})

.factory('expenses', function () {
  var data = [
    {id: 1, date: Date.now(), text: '화장품', amount: 35000},
    {id: 2, date: Date.now(), text: '부식', amount: 5000},
    {id: 3, date: Date.now(), text: '커피', amount: 3500},
    {id: 4, date: Date.now(), text: '수박', amount: 15000},
    {id: 5, date: Date.now(), text: '택시', amount: 25000},
    {id: 6, date: Date.now(), text: '용돈', amount: 100000},
  ];

  return {
    query: function () {
      return data;
    },

    remove: function (id) {
      var idx = data.findIndex(function (d) {
        return d.id === id;
      });

      angular.copy(data, data.splice(idx, 1));
    }
  }
});
