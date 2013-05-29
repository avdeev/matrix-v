<?php
class SiteController extends Controller
{
	public $layout = '//layouts/column1';

	public function actionIndex()
	{
		$matrixSize = isset($_GET['matrixSize']) ? intval($_GET['matrixSize']) : 3;
		$this->render('index', array('matrixSize' => $matrixSize));
	}

	public function actionError()
	{
		if($error=Yii::app()->errorHandler->error)
		{
			if(Yii::app()->request->isAjaxRequest)
				echo $error['message'];
			else
				$this->render('error', $error);
		}
	}
}