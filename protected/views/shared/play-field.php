<div id="play-field">
  <div class="row">
    <? echo $this->renderPartial('//shared/block', array('row' => 0, 'column' => 0)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 0, 'column' => 1)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 0, 'column' => 2)); ?>
  </div>
  <div class="row">
    <? echo $this->renderPartial('//shared/block', array('row' => 1, 'column' => 0)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 1, 'column' => 1)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 1, 'column' => 2)); ?>
  </div>
  <div class="row">
    <? echo $this->renderPartial('//shared/block', array('row' => 2, 'column' => 0)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 2, 'column' => 1)); ?>
    <? echo $this->renderPartial('//shared/block', array('row' => 2, 'column' => 2)); ?>
  </div>
</div>