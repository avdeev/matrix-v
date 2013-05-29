'use strict';
$(function() {

  $('#js-matrix-check').on('click', function(){
    $('.js-result').append($('<p>', {
      text: 'Матрицы не подобны'
    }))
  });

});