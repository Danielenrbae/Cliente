<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Content-type: application/json; charset=utf-8");
$input = json_decode(file_get_contents("php://input"), true);
$output = array("media" => 0, "html" => "" , "moda" => 0);
 
$output["html"] .= "<h1>".$input['titulo']."</h1>";
$output["html"] .= "<ul>";

$array = $input["numeros"];
$arraycontado = array_count_values($array);

arsort($arraycontado);

$valoranterior = 0;

foreach ($arraycontado as $key => $value) {
    if($value > $valoranterior){
	 $valoranterior = $key;
	}
}

foreach ($input["numeros"] as $value) {
    $output["media"] += $value;
    $output["html"] .= "<li>".$value."</li>";


}

$output["moda"] .=  $valoranterior ;

$output["media"] /= count($input["numeros"]);
$output["html"] .= "</ul>";

echo json_encode($output);
?>