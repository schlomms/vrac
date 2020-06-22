<?php

namespace App;

class DevTools
{
    public function prettyVarDump($element){
        highlight_string("<?php\n\$data = \n" .var_export($element, true));
    }

    public function showArrayFirstElement($array){
        $this->prettyVarDump($array[1]);
    }
}
