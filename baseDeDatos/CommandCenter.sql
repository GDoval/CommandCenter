-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: CommandCenter
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Animes`
--

DROP TABLE IF EXISTS `Animes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Animes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `ruta` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Animes`
--

LOCK TABLES `Animes` WRITE;
/*!40000 ALTER TABLE `Animes` DISABLE KEYS */;
INSERT INTO `Animes` VALUES (1,'NIer Automata','./img/nier.jpeg'),(2,'Steins;Gate','./img/steins.jpg'),(3,'The Raise of the Shield Hero','./img/shield.jpg'),(4,'Kaguya-Sama','./img/kaguya-sama.jpg'),(5,'Saint Seiya','./img/seiya.jpg'),(6,'Made in Abyss','./img/abyss.jpg'),(7,'Cyber Team in Akihabara','./img/cyber.jpg'),(8,'Promised Neverland','./img/neverland.jpg'),(9,'Hunter x Hunter','./img/hunter.jpg');
/*!40000 ALTER TABLE `Animes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pruebas`
--

DROP TABLE IF EXISTS `Pruebas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pruebas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `ruta` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pruebas`
--

LOCK TABLES `Pruebas` WRITE;
/*!40000 ALTER TABLE `Pruebas` DISABLE KEYS */;
INSERT INTO `Pruebas` VALUES (1,'Chika Fujiwara','https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642'),(2,'DA ZOMBIE','https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fteepublic%2Fimage%2Fprivate%2Fs--xNBNL-uH--%2Ft_Preview%2Fb_rgb%3A191919%2Cc_limit%2Cf_jpg%2Ch_630%2Cq_90%2Cw_630%2Fv1524299460%2Fproduction%2Fdesigns%2F2613410_0.jpg&f=1'),(3,'2B','https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Farchive-media-0.nyafuu.org%2Fwg%2Fimage%2F1494%2F36%2F1494365096839.jpg&f=1'),(4,'Nanachi','https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fotakuorbit.files.wordpress.com%2F2017%2F09%2Fnanachi2.jpg&f=1'),(5,'Emma','https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmyanimelist.cdn-dena.com%2Fimages%2Fcharacters%2F11%2F335335.jpg&f=1'),(6,'Raphtalia','https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.awwni.me%2F16x6w.jpg&f=1');
/*!40000 ALTER TABLE `Pruebas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18 21:53:13
