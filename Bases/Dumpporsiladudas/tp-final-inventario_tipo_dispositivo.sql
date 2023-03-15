CREATE DATABASE  IF NOT EXISTS `tp-final-inventario` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tp-final-inventario`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: tp-final-inventario
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tipo_dispositivo`
--

DROP TABLE IF EXISTS `tipo_dispositivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_dispositivo` (
  `idtipo_dispositivo` int NOT NULL AUTO_INCREMENT,
  `tipo_dispositivo` varchar(45) NOT NULL,
  `nom_tipo_dispositivo` varchar(45) DEFAULT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idtipo_dispositivo`),
  UNIQUE KEY `idtipo_dispositivo_UNIQUE` (`idtipo_dispositivo`),
  UNIQUE KEY `tipo_dispositivo_UNIQUE` (`tipo_dispositivo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Se cargan los tipos de dispositivos existentes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_dispositivo`
--

LOCK TABLES `tipo_dispositivo` WRITE;
/*!40000 ALTER TABLE `tipo_dispositivo` DISABLE KEYS */;
INSERT INTO `tipo_dispositivo` VALUES (1,'PCE','PC de escritorio',1),(2,'NBK','Notebook',1),(3,'MON','Monitor',1),(4,'IMP','Impresora',1),(5,'SVR','Servidor',1),(6,'TV','Televisor',1),(7,'UPS','Equipo UPS',1),(8,'MOD','Modem',1),(9,'ROU','Router',1),(10,'SWI','Switch',1),(11,'PAT','Patchera',1);
/*!40000 ALTER TABLE `tipo_dispositivo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14 21:36:52
