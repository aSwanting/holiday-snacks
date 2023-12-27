<?php
//////////////////////////////////// Pig Latin ////////////////////////////////////

$str = "marcomarco";

// Nested Loops
function pigLatinLoop($str)
{
    $vowels = "aeiou";
    $convertedStr = '';

    for ($i = 0; $i < strlen($str); $i++) {
        $convertedStr .= $str[$i];
        for ($j = 0; $j < strlen($vowels); $j++) {
            if ($str[$i] == $vowels[$j]) $convertedStr .= 'f' . $str[$i];
        }
    }

    return $convertedStr;
}

var_dump(pigLatinLoop($str));
