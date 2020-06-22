<?php

namespace App;

class ClassTest
{
    public $name;
    public $age;

    public function __construct($choosenName, $choosenAge) {
        $this->name = $choosenName;
        $this->age = $choosenAge;
    }
}
