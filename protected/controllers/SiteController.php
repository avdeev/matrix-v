<?php
class SiteController extends Controller
{
	public $layout = '//layouts/column2';

	public function actionIndex()
	{
		$this->render('index');
	}

	public function actionError()
	{
		$this->layout = 'column1';
		if($error=Yii::app()->errorHandler->error)
		{
			if(Yii::app()->request->isAjaxRequest)
				echo $error['message'];
			else
				$this->render('error', $error);
		}
	}
}