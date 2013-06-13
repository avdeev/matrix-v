'use strict';
$(function() {

  $('#js-test-start').on('click', function(){
    var timeStart = $.now();
    $('.js-result').empty();

    var matrixCount = $('#js-matrix-count').val();
    var matrixDim = $('#js-matrix-dim').val();
    var matrixLow = $('#js-matrix-low').val();
    var matrixHigh = $('#js-matrix-high').val();
    var testEmptyCount = $('#js-test-empty-count').val();

    window.matrixCompared = 0;

    var matrix, matrixMath, matrixMathDiag;
    for (var i = 0; i < matrixCount; i++) {
      matrix = matrixMath = matrixMathDiag = [];
      for (var j = 0; j < 2; j++) {
        matrix[j] = generateMatrix(matrixDim, matrixLow, matrixHigh, testEmptyCount);
        
        for (var y = 0; y < matrixDim; y++) {
          for (var x = 0; x < matrixDim; x++) {
            if (x == y) {
              matrix[j][y][x] = new MathLib.Complex(matrix[j][y][x], -1);
            }
          }
        }

        matrixMath[j] = new MathLib.Matrix(matrix[j]);
        matrixMathDiag[j] = matrixMath[j].rref();

        // $('.js-result').append($('<pre>', {
        //   text: matrixMathDiag[j].toString()
        // }));
  
      }

      $('.js-result').append($('<h4>', {
        text: matrixMathDiag[0].diag().toString() == matrixMathDiag[1].diag().toString() ? 'Матрицы подобны' : 'Матрицы не подобны'
      }));
  
    }

    $('#js-tests-time').append($('<p>', {
      text: 'Время выполнения тестов: ' + ($.now() - timeStart)
    }));

    $('#js-tests-time').append($('<p>', {
      text: 'Количество операций: ' + matrixCompared
    }));

  });

});

var generateMatrix = function(matrixDim, matrixLow, matrixHigh, testEmptyCount) {

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var matrix = [];
  for (var y = 0; y < matrixDim; y++) {
    matrix[y] = [];
    for (var x = 0; x < matrixDim; x++) {
      matrix[y][x] = parseInt(getRandomInt(matrixLow, matrixHigh));
    }
  }

  if (testEmptyCount) {
    var removeCounter = 0;
    var rndX, rndY;
    while(removeCounter < (matrixDim * matrixDim * testEmptyCount) / 100) {
      rndX = getRandomInt(0, matrixDim - 1);
      rndY = getRandomInt(0, matrixDim - 1);
      if (matrix[rndX][rndY]) {
        matrix[rndX][rndY] = 0;
        removeCounter++;
      }
    }
  }

  return matrix;
}