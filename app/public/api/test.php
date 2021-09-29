<?php

$num = 2;
$foo = $num. "To be";
$bar = "or not".$num."to be";

echo $foo . " " . $bar ."\n";

echo $num * $num * $num;

// This is a comment
# This is also a comment

/* This is a multi-line comment
*/

if (true) {
    echo "TRUE \n";
} else {
    echo "FALSE \n";
}

while (true) {
    break;
}

$arr = [1, 1, 2, 3, 5, 8];

$arr2 = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];



function printList($someArr) {
    echo "<ul>";
    foreach ($someArr as $key => $val) {
        echo "<li>".$key." is ".$val."</li>\n";
    }
    echo "</ul>\n";
}

printList($arr);
echo json_encode($arr2);