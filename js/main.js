'use strict';
$(function() {

  $('#js-matrix-check').on('click', function(){
    $('.js-result').empty();

    var M = [];
    var MDiag = [];
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
            matrixArr[y][x] = new MathLib.Complex(matrixArr[y][x], -1);
          }
        }
      }

      M[id] = new MathLib.Matrix(matrixArr);
      MDiag[id] = M[id].rref();

      $('.js-result').append($('<pre>', {
        text: MDiag[id].toString()
      }));
    });

    $('.js-result').append($('<h4>', {
      text: MDiag[0].trace() == MDiag[1].trace() ? 'Матрицы подобны' : 'Матрицы не подобны'
    }));

  });

});