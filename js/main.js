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
            matrixArr[y][x] = new MathLib.Polynomial([matrixArr[y][x], -1]);
          } else if (x != y) {
            matrixArr[y][x] = new MathLib.Polynomial([matrixArr[y][x]]);
          }
        }
      }

      Matrix[id] = new MathLib.Matrix(matrixArr);

      $('.js-result').append($('<pre>', {
        text: Matrix[id].toString()
      }));

      var min, max;
      max = MathLib.Polynomial.zero;
      min = new MathLib.Polynomial(10);
      Matrix[id].forEach(function(entry) {
        if (!entry.isEqual(MathLib.Polynomial.zero)) {
          if (entry.compareAbs(min) < 0) {
            min = entry;
          }
        }

        if (entry.compareAbs(max) > 0) {
          max = entry;
        }
      });

      console.log('min', min.toString());
      console.log('max', max.toString());
    });

  });

});