<div class="row-fluid">
  <div class="span8" style="text-align:center;">
      <label for="js-matrix-count">Количество матриц: <input type="text" id="js-matrix-count" value="10" maxlength="6" name="matrixSize" style="width: 40px; display: inline;"></label>
      <label for="js-matrix-dim">Размерность матриц: <input type="text" id="js-matrix-dim" value="3" maxlength="6" name="matrixSize" style="width: 40px; display: inline;"></label>
      <label for="js-matrix-low">Нижняя граница чисел: <input type="text" id="js-matrix-low" value="1" maxlength="6" name="matrixSize" style="width: 40px; display: inline;"></label>
      <label for="js-matrix-high">Верхняя граница чисел: <input type="text" id="js-matrix-high" value="9" maxlength="6" name="matrixSize" style="width: 40px; display: inline;"></label>
      <label for="js-test-empty-count">Процент пустых клеток: <input type="text" id="js-test-empty-count" value="0" maxlength="6" name="matrixSize" style="width: 20px; display: inline;">%</label>
      <input class="btn btn-primary" id="js-test-start" value="Запустить тесты" type="submit">
  </div>
  <div class="span4 well" style="text-align:center;" id="js-tests-time"></div>
</div>
<div class="row-fluid">
  <div class="span12" style="text-align:center;">
    <h3>Результат</h3>
    <div class="js-result"></div>
  </div>
</div>