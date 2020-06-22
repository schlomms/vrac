<?php

use App\ClassTest;
use App\LibsLoader;
use App\DevTools;
use App\Models\Voiture;
use App\Models\Garage;
use App\Models\Section;
use App\Models\Eleve;

$loader = require '../vendor/autoload.php';

$array1 = ['hadrein', 'Noemie', 'bernard'];
$voitures = [
    [
        'mark' => 'Peugeolt',
        'model' => '208',
        'price' => 10000,
        'VAT' => 20
    ],
    [
        'mark' => 'Dacia',
        'model' => 'Duster',
        'price' => 15000,
        'VAT' => 20
    ]
];

$libsLoader = new LibsLoader();
$libsLoader->loadLibrairies();

$classHadrien = new ClassTest('hadrien', 31);
$classNoemie = new ClassTest('noemie', 22);

echo ($classHadrien->name);
echo ($classNoemie->name);

$tools = new DevTools();
$tools->prettyVarDump($array1);
$tools->showArrayFirstElement($array1);

$carsObj = [];

foreach($voitures as $voiture) {
    $carObj = new Voiture($voiture['mark'], $voiture['model'], $voiture['price'], $voiture['VAT']);
    array_push($carsObj, $carObj);
}

$tools->prettyVarDump($carsObj);

foreach ($carsObj as $voiture) {
    echo ($voiture->fullPrice) ; echo  ' ';
}

$garage = new Garage();
$garage->name = 'Garage Michel';
$garage->cars = $carsObj;

$tools->prettyVarDump($garage);

$students = [
    [
        "name" => "Hadrien",
        "age" => 31,
        "section" => "CE1"
    ],
    [
        "name" => "Julien",
        "age" => 33,
        "section" => "CE1"
    ],
    [
        "name" => "Theo",
        "age" => 20,
        "section" => "CP"
    ],
    [
        "name" => "Samantha",
        "age" => 30,
        "section" => "CE2"
    ],
    [
        "name" => "Emilie",
        "age" => 24,
        "section" => "CE2"
    ],
    [
        "name" => "Vladimir",
        "age" => 64,
        "section" => "CM2"
    ],
    [
        "name" => "Phillipe",
        "age" => 47,
        "section" => "CM2"
    ]

];

/*
 * Faire un algo qui va créer un école en fonction des élèves du tableau : Si un élève est dans une section et que cette section n'existe pas encore, la créer,
 * sinon ajouter cet élève a la section
 * chaque élève doit êre un objet
 * chaque section est un objet qui contient un tabeau d'objets élèves
 */



 $studentsObject = [];

 foreach($students as $student) {
     $studentObj = new Eleve($student['name'], $student['age'], $student['section']);
     array_push($studentsObject, $studentObj);
 }

 $allSections = [];

 foreach($studentsObject as $studentObject) {
     if (!in_array($studentObject->section, $allSections)) {
        array_push($allSections, $studentObject->section);
     }  
 }

 $tools->prettyVarDump($allSections);

$sectionsObj = [];

 foreach($allSections as $section) {
     $sectionObj = new Section($section);
     array_push($sectionsObj, $sectionObj);
 }

 foreach($sectionsObj as $section) {
     foreach($studentsObject as $student) {
         if($student->section === $section->name) {
             array_push($section->eleves, $student);
         }
     }
 }

echo '<h1>ECOLE ELEMENTAIRE DE ST GERMAIN</h1>';
$tools->prettyVarDump($sectionsObj);