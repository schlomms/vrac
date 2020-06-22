<?php

namespace App\Models;

class Section 
{
    public $name;
    public $eleves = [];

    public function __construct($name) {
        $this->name = $name;
    }
}