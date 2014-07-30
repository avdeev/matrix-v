$(function() {

  $('#js-matrix-check').on('click', function(){
    $('.js-result').empty();

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

      // ищеи максимум и минимум
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

      _.each(matrixArr, function(arr, i) {
        _.each(arr, function(entry, j) {
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
      });

      // ставим минимальный элемент в 1,1
      if (min.i > 0) {
        var swap = matrixArr[0];
        matrixArr[0] = matrixArr[min.i];
        matrixArr[min.i] = swap;
      }

      if (min.j > 0) {
        _.each(matrixArr, function(arr, i) {
          var swap = matrixArr[i][0];
          matrixArr[i][0] = matrixArr[i][min.j];
          matrixArr[i][min.j] = swap;
        });
      }

      _.each(matrixArr, function(arr, i) {
        _.each(arr, function(entry, j) {
          console.log(syntheticDivision(entry.slice().reverse(), -matrixArr[0][0].slice(0)[0]));
        });
      });

      $('.js-result').append($('<pre>', {
        text: new MathLib.Matrix(matrixArr).toString()
      }));

      return false;

    });

  });

});