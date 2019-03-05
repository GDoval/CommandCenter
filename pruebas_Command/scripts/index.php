<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");


require_once './vendor/autoload.php';
require_once './pruebas.php';


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->get('/saludar[/]', function (Request $request, Response $response) {    
    $variable = new Pruebas($_GET['nombre']);
    //$response->getBody()->write($variable->saludar());
    return $response;
});

$app->post('/retornodb[/]', function(Request $request, Response $response){
    $var = new Pruebas("");
    $response->getBody()->write($var->sourceImagen());
    return $response;
});

$app->post('/arrays', function (Request $request, Response $response){
    $var = new Pruebas("");
    $response->getBody()->write($var->probarArray());
    return $response;

});

$app->post('/test', function(Request $request, Response $response){
    $var = new Pruebas("");
    $response->getBody()->write($var->traigoImagenesDB());
    return $response;
});


$app->run();
?>