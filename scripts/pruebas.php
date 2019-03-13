<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

require_once './conexion.php';
class Pruebas
{
    public $nombre;

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
    }

    public function sourceImagen()
    {
        //Simulamos una conexión exitosa a la base de datos
        $resp = new stdClass();
        $resp->nombre = "Chika Fujiwara";
        $resp->ruta = "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642";
        
        $resp2 = new stdClass();
        $resp2->nombre = "DA ZOMBIE";
        $resp2->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fteepublic%2Fimage%2Fprivate%2Fs--xNBNL-uH--%2Ft_Preview%2Fb_rgb%3A191919%2Cc_limit%2Cf_jpg%2Ch_630%2Cq_90%2Cw_630%2Fv1524299460%2Fproduction%2Fdesigns%2F2613410_0.jpg&f=1";
        
        $resp3 = new stdClass();
        $resp3->nombre = "2B";
        $resp3->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Farchive-media-0.nyafuu.org%2Fwg%2Fimage%2F1494%2F36%2F1494365096839.jpg&f=1";
        

        $resp4 = new stdClass();
        $resp4->nombre = "Nanachi";
        $resp4->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fotakuorbit.files.wordpress.com%2F2017%2F09%2Fnanachi2.jpg&f=1";
        
        $resp5 = new stdClass();
        $resp5->nombre = "Emma";
        $resp5->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmyanimelist.cdn-dena.com%2Fimages%2Fcharacters%2F11%2F335335.jpg&f=1";
        
        $resp6 = new stdClass();
        $resp6->nombre = "Raphtalia";
        $resp6->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.awwni.me%2F16x6w.jpg&f=1";

        $resp7 = new stdClass();
        $resp7->nombre = "Kaguya";
        $resp7->ruta = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.koi-nya.net%2Fimg%2Fsubidos_posts%2F2018%2F06%2Fkaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-anime-television-1.jpg&f=1";
        
        $array = array("uno" => $resp, "dos" => $resp2, "tres" => $resp3, "cuatro" => $resp4, "cinco" => $resp5, "seis" => $resp6, "siete" => $resp7);
        echo json_encode($array);
    }

    public function traigoImagenesDB()
    {
        $manejador = new Conexiones("127.0.0.1", "root", "ffsquall", "CommandCenter");
        try{
            $pdo = $manejador->Conexion();
        }catch(PDOException $e)
        {
            echo $e->getMessage();
        }
        $obj = array();
        $resultado = $pdo->prepare('SELECT * FROM Pruebas');
        $resultado->execute();
        foreach($resultado->fetchAll(PDO::FETCH_ASSOC) as $img )
        {
            $array[] = $img;
        }

        echo json_encode($array);
    }   
}
?>