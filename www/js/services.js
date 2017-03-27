angular.module('starter.services', [])

  .factory('Dogs', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var dogs = [{
      id: 0,
      name: 'Jack',
      lastText: 'Jack Russell Terrier',
      bio: 'Jack is a stunning little man! He has all the typical quirky JRT traits that all JRT fans love. He really looks forward to his daily walks and is obsessive with his toys & balls. He can literally play fetch all day! If you are not able to play then he is fine to romp around and play all by himself.',
      face: 'img/jack.jpg'
    }, {
      id: 1,
      name: 'Sport',
      lastText: 'Shepard Mix',
      bio: 'Sport is loyal, independent, courageous and highly intelligent. He is an energetic, hardy outdoor type of boy that has a sense of humour. An active physical day and quiet night would be best for Sport. No kids or other animals and a fenced backyard is a must. If you are looking for a partner in life Sport is the guy for you.',
      face: 'img/sport.jpg'
    }, {
      id: 2,
      name: 'Snowball',
      lastText: 'Terrier Mix',
      bio: 'Snowball is a fun and affectionate little gal, she is young and has plenty to learn so a patient, experienced owner is best. Snowball needs some work walking on leash but does really well with her easy walker harness. ',
      face: 'img/snowball.jpg'
    }, {
      id: 3,
      name: 'Oliver',
      lastText: 'Basset Hound',
      bio: 'Oliver is house trained and very obedient. His loyalty and eagerness to please make him ideal for training. He is a well behaved boy but can pull on leash. Regular walks will help with this and he may also enjoy off-leash romps in secure dog parks. Oliver has not currently been tested with cats but he does very well with others dogs.',
      face: 'img/oliver.jpg'
    }, {
      id: 4,
      name: 'Bella',
      lastText: 'Golden Retriever',
      bio: 'Meet Bella, she is a ball of energy and loads of fun! She will give you kisses and nibble your ear all day if you let her. She is your typical puppy, in love with the world right now. She still needs work on house training but is making great progress daily. We are looking for a home with kids over 10, cats, dogs a fenced in backyard and will not be left alone for long periods of time.',
      face: 'img/bella.jpg'
    }];

    return {
      all: function () {
        return dogs;
      },
      remove: function (dog) {
        dogs.splice(dogs.indexOf(dog), 1);
      },
      get: function (dogId) {
        for (var i = 0; i < dogs.length; i++) {
          if (dogs[i].id === parseInt(dogId)) {
            return dogs[i];
          }
        }
        return null;
      }
    };
  })


  //fake data set of Cats
  .factory('Cats', function () {
    var cats = [{
      id: 0,
      name: 'Jack and Jill',
      lastText: 'Bonded Pair Cats',
      bio: 'This brother and sister pair need to go to a home together, preferably without other cats.',
      face: 'img/jacknjill.jpg'
  }, {
      id: 1,
      name: 'Cheezie',
      lastText: 'Orange Tabby',
      bio: 'Cheezie is spunky and fun. He loves cat toys and ear scratches.',
      face: 'img/Cheezie.jpg'
   }, {
      id: 2,
      name: 'Hazel',
      lastText: 'Mixed Breed',
      bio: 'Hazel loves lounging in the sunlight. She is very independent and gets along well with other cats and some dogs.',
      face: 'img/hazel.jpg'
  },];

return {
  all: function () {
    return cats;
  },
  remove: function (cat) {
    cats.splice(cats.indexOf(cat), 1);
  },
  get: function (catId) {
    for (var i = 0; i <= cats.length; i++) {
      if (cats[i].id === parseInt(catId)) {
        return cats[i];
      }
    }
    return null;
  }
};
})

//fake data set of small animals
.factory('SmallAnimals', function () {
  var smallAnimals = [{
    id: 0,
    name: 'Peter',
    lastText: 'Rabbit',
    bio: 'Peter is curious, young rabbit. He has a tendency to nibble on everything so he would do well in a house without young children.',
    face: 'img/peter.jpg'
  },{
    id: 1,
    name: 'Polly',
    lastText: 'Parrot',
    bio: 'True to her name, Polly has a favourite snack: crackers. She is fun-loving, and interested in everything going on around her. She will make an excellent addition to any family.',
    face: 'img/polly.jpg'
  }];

  return {
    all: function () {
      return smallAnimals;
    },
    remove: function (smallAnimal) {
      smallAnimals.splice(smallAnimals.indexOf(smallAnimal), 1);
    },
    get: function (smallAnimalId) {
      for (var i = 0; i <= smallAnimals.length; i++) {
        if (smallAnimals[i].id === parseInt(smallAnimalId)) {
          return smallAnimals[i];
        }
      }
      return null;
    }
  };
})

  ;
