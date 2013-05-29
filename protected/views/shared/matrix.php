<div class="matrix" style="width: <?=$matrixSize * 52?>px;">
  <?
  for ($y = 0; $y < $matrixSize; $y++) {
    for ($x = 0; $x < $matrixSize; $x++) {
      echo $this->renderPartial('//shared/cell', array('x' => $x, 'y' => $y));
    }
    echo "<div class='clearfix'></div>";
  } 
  ?>
</div>