angular.module('starter.services', [])

.factory('Dogs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dogs = [{
    id: 0,
    name: 'Jack',
    lastText: 'Jack Russell Terrier',
    face: 'img/jack.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return dogs;
    },
    remove: function(dog) {
      dogs.splice(dogs.indexOf(dog), 1);
    },
    get: function(dogId) {
      for (var i = 0; i < dogs.length; i++) {
        if (dogs[i].id === parseInt(dogId)) {
          return dogs[i];
        }
      }
      return null;
    }
  };
});
