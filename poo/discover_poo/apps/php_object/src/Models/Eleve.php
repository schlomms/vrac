<?php

namespace App\Models;

class Eleve 
{
    public $name;
    public $age;
    public $section;

    public function __construct($name, $age, $section) {
        $this->name = $name;
        $this->age = $age;
        $this->section = $section;
    }
}