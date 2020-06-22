<?php

namespace App\Models;

class Personnage
{
    protected $life = 100;
    public $attack = 20;
    protected $name;

    public function getName() {
        return $this->name;
    }

    public function setname($newName) {
        return $this->name = $newName;
    }

    public function __construct($name) {
        $this->name = $name;
    }

    public function regenerer($points = null) {
        if(is_null($points)){
            $this->life = 100;
        } else {
            $this->life += $points;
        }
    }

    public function ded() {
        return $this->life <= 0; 
    }

    public function attack($cible) {
         $cible->life -= $this->attack;
         $this->empecherNegatif();
    }

    protected function empecherNegatif(){
        if($this->vie < 0) {
            $this->vie = 0;
        }
    }
}
