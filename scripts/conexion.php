<?php
class Conexiones
{

    private $username;
    private $password;
    private $base;
    private $charset;
    private $servidor;

    public function __construct($servidor, $usuario, $pass, $base, $charset = "utf8mb4")
    {
        $this->usuario = $usuario;
        $this->password = $pass;
        $this->servidor = $servidor;
        $this->base = $base;
        $this->charset = $charset;
    }

    public function Conexion()
    {
        $dsn = "mysql:host=$this->servidor;dbname=$this->base;charset=$this->charset";
        try
        {
            $pdo = new PDO($dsn, $this->usuario, $this->password);
        } catch (PDOException $e) {
            throw $e;
        }
        return $pdo;
    }
}
?>