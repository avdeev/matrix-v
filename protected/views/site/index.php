<div class="row-fluid">
  <div class="span12 well" style="text-align:center;">
    <label for="js-matrix-dim">Размерность матриц: <input type="text" id="js-matrix-dim" value="3" maxlength="2" style="width: 20px; display: inline;"></label>
    <button class="btn btn-primary" id="js-matrix-gen">Генерировать</button>
  </div>
</div>
<div class="row-fluid">
  <div class="span6 well" style="text-align:center;">
    <? echo $this->renderPartial('//shared/cell', array('x' => 1, 'y' => 1)); ?>
  </div>
  <div class="span6 well" style="text-align:center;">
    <? echo $this->renderPartial('//shared/cell', array('x' => 1, 'y' => 1)); ?>
  </div>
</div>
<div class="row-fluid">
  <div class="span12" style="text-align:center;">
    <button class="btn btn-primary" id="js-matrix-check">Сравнить</button>
  </div>
</div>
<div class="row-fluid">
  <div class="span12" style="text-align:center;">
    <h3>Результат</h3>
  </div>
</div>