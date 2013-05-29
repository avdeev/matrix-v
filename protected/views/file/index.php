<div class="row-fluid">
  <div class="span12 well" style="text-align:center;">
    <form action="/file" method="post">
      <label for="js-matrix-file">Содержимое файла:</label>
      <textarea name="matrixFile" id="js-matrix-file" style="width: 100%; height: 200px"></textarea><br>
      <input class="btn btn-primary" id="js-matrix-gen" value="Создать матрицу" type="submit">
    </form>
  </div>
</div>
<div class="row-fluid">
  <div class="span6 well">
    <? // echo $this->renderPartial('//shared/matrix', array('matrixSize' => $matrixSize)); ?>
  </div>
  <div class="span6 well">
    <? // echo $this->renderPartial('//shared/matrix', array('matrixSize' => $matrixSize)); ?>
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