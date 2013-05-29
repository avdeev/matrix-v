<div class="row-fluid">
  <div class="span12" style="text-align:center;">
    <form action="/" method="get">
      <label for="js-matrix-dim">Размерность матриц: <input type="text" id="js-matrix-dim" value="<?=$matrixSize?>" maxlength="2" name="matrixSize" style="width: 20px; display: inline;"></label>
      <input class="btn btn-primary" id="js-matrix-gen" value="Генерировать" type="submit">
    </form>
  </div>
</div>
<div class="row-fluid">
  <div class="span6 well">
    <? echo $this->renderPartial('//shared/matrix', array('matrixSize' => $matrixSize, 'id' => 0)); ?>
  </div>
  <div class="span6 well">
    <? echo $this->renderPartial('//shared/matrix', array('matrixSize' => $matrixSize, 'id' => 1)); ?>
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
    <div class="js-result"></div>
  </div>
</div>