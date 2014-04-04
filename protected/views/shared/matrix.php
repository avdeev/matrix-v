<div class="matrix" data-id="<?=$id?>" style="width: <?=$matrixSize * 52?>px;" data-size="<?=$matrixSize?>">
  <?
  for ($y = 0; $y < $matrixSize; $y++) {
    for ($x = 0; $x < $matrixSize; $x++) {
      echo $this->renderPartial('//shared/cell', array('x' => $x, 'y' => $y));
    }
  ?>
  <div class='clearfix'></div>
  <? } ?>
</div>