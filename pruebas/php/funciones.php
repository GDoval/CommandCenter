<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

$pathOrigen = $_FILES['imagen']['tmp_name'];

$pathDestino = "/var/www/html/CommandCenter/img/" . $_FILES['imagen']['name'];

$nom = $_POST['nombre'];

echo $nom;
//move_uploaded_file($pathOrigen, $pathDestino);
?>