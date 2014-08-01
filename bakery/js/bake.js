var bakery = {
  supplies: {
    flour: 30,
    almond_flour: 12,
    eggs: 18,
    egg_whites: 9,
    sugar: 17,
    spice: 5
  },
  goodRequirements: {
    cupcake: {
      flour: 2,
      almond_flour: 0,
      eggs: 1,
      egg_whites: 0,
      sugar: 1,
      spice: 0 // Manually inserted to allow ease of comparison in Make function
    },
    // TODO: Create required ingredients for cookie
    cookie: {
      flour: 2,
      amond_flour: 0,
      eggs: 2,
      egg_whites: 0,
      sugar: 2,
      spice: 1
    },
    macaron: {
      flour: 0,
      almond_flour: 2,
      eggs: 0,
      egg_whites: 3,
      sugar: 4,
      spice: 0,
    }
  },
  make: function (goodType) {
    console.log('Attempting to make a:', goodType);
    var req = this.goodRequirements[goodType];

    // TODO: Only make if we have enough ingredients
    if (req['flour'] <= this.supplies['flour'] && req.almond_flour <= this.supplies.almond_flour
      && req['eggs'] <= this.supplies['eggs'] && req.egg_whites <= this.supplies.egg_whites
      && req['sugar'] <= this.supplies['sugar'] 
      && req['spice'] <= this.supplies['spice'] 
      ) {
      // TODO: Reduce the bakery's supplies by the required amount
      this.supplies['flour'] -= req['flour'];
      this.supplies['almond_flour'] -= req['almond_flour'];
      this.supplies['eggs']   -= req['eggs'];
      this.supplies['egg_whites'] -= req['egg_whites'];
      this.supplies['sugar'] -= req['sugar'];
      this.supplies['spice'] -= req['spice'];

      this.updateIngredientsList();
      console.log('The bakery made a ' + goodType + '!');

      // TODO: Add class goodType class to div
      var goodDiv = $('<div>').addClass(goodType);
      $('#bakery .display').append(goodDiv);
    } else {
      console.log("We don't have enough ingredients for making that!");
    }
  },
  updateIngredientsList: function () {
    $('.ingredients .flour span').text(this.supplies.flour);
    // TODO: Update rest of ingredients
    $('.ingredients .almondf span').text(this.supplies.almond_flour);
    $('.ingredients .eggs span').text(this.supplies.eggs);
    $('.ingredients .eggwhite span').text(this.supplies.egg_whites);
    $('.ingredients .sugar span').text(this.supplies.sugar);
    $('.ingredients .spice span').text(this.supplies.spice);
  },
};

var accounting = {
  money: 
}

$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
  // TODO: Make the good
  bakery.make(goodType);
});

bakery.updateIngredientsList();
