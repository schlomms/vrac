<?php
$loader = require '../vendor/autoload.php';

use App\LibsLoader;
use App\Madate;
use App\DevTools;
use App\Models\Personnage;
use App\Models\Form;
use App\Text;
use App\Models\Archer;


$libsLoader = new LibsLoader();
$libsLoader->loadLibrairies();
$tools = new DevTools();

//date 
$date = new MaDate("2020-04-01");

$date->addDays(3);
$date->addMonths(3);

$tools->prettyVarDump($date->date);

//personnage

$merlin = new Personnage('Merlin');
$harry = new Personnage('Harry');
$legolas = new Archer('legolas');

/* $merlin->life = 20; */
$tools->prettyVarDump($merlin);
$merlin->regenerer(20);
$merlin->regenerer();
$tools->prettyVarDump($merlin);
$tools->prettyVarDump($harry);
$tools->prettyVarDump($legolas);
$tools->prettyVarDump($harry->ded());

$merlin->attack($harry);
$tools->prettyVarDump($harry);
if ($harry->ded()) {
    echo 'Harry est mort :(';
}


//form
?>

<form action="#" mehtod="post">
    <?php
    $form1 = new Form(array('username' => 'roger'));

    echo $form1->input('username');
    echo $form1->input('password');
    echo $form1->button();
    ?>
</form>