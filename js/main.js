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
        }
      }

      M[id] = $M(matrixArr);
      MDiag[id] = M[id].toRightTriangular().transpose().toRightTriangular().transpose();

      $('.js-result').append($('<pre>', {
        text: MDiag[id].inspect()
      }));
    });

    $('.js-result').append($('<h4>', {
      text: MDiag[0].eql(MDiag[1]) ? 'Матрицы подобны' : 'Матрицы не подобны'
    }));

  });

});