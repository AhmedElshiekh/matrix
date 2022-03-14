<?php

function searchInMatrix($searchString, $matrix)
{
    $letter = $searchString[0];
    $potentialPaths = [];

    for ($x = 0; $x <= 3; $x++) :
        for ($y = 0; $y <= 3; $y++) :
            if ($letter == $matrix[$x][$y]) :
                if (!isset($searchString[1])) :
                    return true;
                else:
                    // print_r($searchString[0] . "\n"); 
                    array_push($potentialPaths, searchInMatrix($searchString[-1], $matrix));
                endif;
            endif;
        endfor;
    endfor;

    for ($i = count($potentialPaths) - 1; $i >= 0; $i--) :
        if ($potentialPaths[$i]) return true;
    endfor;
}


function matrixChallenge(array $strArr)
{
    $errorList = [];
    $matrixStrings = explode(",", $strArr[0]);
    $strings = explode(",", $strArr[1]);

    // print_r($matrixStrings[0] . "\n");
    // print_r(count($strings) ."\n");



    for ($i = count($strings) - 1; $i >= 0; $i--) :
        
        if (!searchInMatrix($strings[$i], $matrixStrings)) :
            array_push($errorList, $strings[$i]);
        endif;
    endfor;
    
    if (count($errorList) > 0) :
        echo implode(",", $errorList) ."\n";
    else :
        echo "true \n";
    endif;
}


// $arr = ["aaey, rrum, tgmn, ball", "all,yes"];

matrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"]);
matrixChallenge(["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"]);
// matrixChallenge(["aaey, rrum, tgmn, ball", "all,yes"]);
