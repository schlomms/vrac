<?php

namespace App;

class Madate 
{
    public $date;

    public function __construct($date) {
        $this->date = $date;
    }

    public function addDays($days){
        $this->date = date('Y-m-d', strtotime($this->date . "" . $days ."day"));
        
    }

    public function addMonths($months){
        $this->date = date('Y-m-d', strtotime($this->date . "" . $months ."months"));
    }
}