<div class="block block-<?=$row * 3 + $column?>">  
  <div class="row">
    <? echo $this->renderPartial('//shared/cell', array('x' => $column * 3, 'y' => $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 1 + $column * 3, 'y' => $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 2 + $column * 3, 'y' => $row * 3)); ?>
  </div>
  <div class="row">
    <? echo $this->renderPartial('//shared/cell', array('x' => $column * 3, 'y' => 1 + $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 1 + $column * 3, 'y' => 1 + $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 2 + $column * 3, 'y' => 1 + $row * 3)); ?>
  </div>
  <div class="row">
    <? echo $this->renderPartial('//shared/cell', array('x' => $column * 3, 'y' => 2 + $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 1 + $column * 3, 'y' => 2 + $row * 3)); ?>
    <? echo $this->renderPartial('//shared/cell', array('x' => 2 + $column * 3, 'y' => 2 + $row * 3)); ?>
  </div>
</div>