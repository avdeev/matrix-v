$(function() {

  $('#js-matrix-check').on('click', function(){
    $('.js-result').empty();

    window.M = [];
    window.MDiag = [];
    window.Matrix = [];
    $('.matrix').each(function(){
      var $matrix = $(this);
      var id = parseInt($matrix.data('id'));
      var size = parseInt($matrix.data('size'));
      var matrixArr = [];
      for (var y = 0; y < size; y++) {
        matrixArr[y] = [];
        for (var x = 0; x < size; x++) {
          matrixArr[y][x] = parseFloat($matrix.find('.y-' + y + '.x-' + x + ' input').val());
          if (x == y) {
            matrixArr[y][x] = new Polynomial([matrixArr[y][x], -1]);
          } else if (x != y) {
            matrixArr[y][x] = new Polynomial([matrixArr[y][x]]);
          }
        }
      }

      console.log(matrixArr);
      return;

      $('.js-result').append($('<pre>', {
        text: Matrix[id].toString()
      }));

      var max = {
        value: MathLib.Polynomial.zero,
        i: 0,
        j: 0
      }

      var min = {
        value: new MathLib.Polynomial(10),
        i: 0,
        j: 0
      }

      Matrix[id].forEach(function(entry, i, j) {
        if (!entry.isEqual(MathLib.Polynomial.zero)) {
          if (entry.compareAbs(min.value) < 0) {
            min.value = entry;
            min.i = i;
            min.j = j;
          }
        }

        if (entry.compareAbs(max.value) > 0) {
          max.value = entry;
          max.i = i;
          max.j = j;
        }
      });

      console.log('min', min);
      console.log('max', max);
    });

  });

});