var bakery = {
  supplies: {
    flour: 4,
    eggs: 12,
    sugar: 17,
    spice: 5
  },
  goodRequirements: {
    cupcake: {
      flour: 2,
      eggs: 1,
      sugar: 1
    }
    // TODO: Create required ingredients for cookie
  },
  make: function (goodType) {
    console.log('Attempting to make a:', goodType);
    var req = this.goodRequirements[goodType];

    // TODO: Only make if we have enough ingredients
    if (true) {
      // TODO: Reduce the bakery's supplies by the required amount
      this.updateIngredientsList();
      console.log('The bakery made a ' + goodType + '!');

      // TODO: Add class goodType class to div
      var goodDiv = $('<div>');
      $('#bakery .display').append(goodDiv);
    }
  },
  updateIngredientsList: function () {
    $('.ingredients .flour span').text(this.supplies.flour);
    // TODO: Update rest of ingredients
    $('.ingredients .eggs span').text(this.supplies.eggs);
    $('.ingredients .sugar span').text(this.supplies.sugar);
    $('.ingredients .spice span').text(this.supplies.spice);
  }
};

$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
  // TODO: Make the good
  bakery.make(goodType);
});

bakery.updateIngredientsList();
