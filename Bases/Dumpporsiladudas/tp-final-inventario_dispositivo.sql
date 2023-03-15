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
-- Table structure for table `dispositivo`
--

DROP TABLE IF EXISTS `dispositivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispositivo` (
  `iddispositivo` int NOT NULL AUTO_INCREMENT,
  `idtipo_dispositivo` int NOT NULL,
  `idmarca` int NOT NULL,
  `fecha_compra` date DEFAULT NULL,
  `idprocesador` int NOT NULL,
  `idram` int NOT NULL,
  `iddisco` int NOT NULL,
  `idplaca_madre` int NOT NULL,
  `idfuente` int NOT NULL,
  `idso` int NOT NULL,
  `modelo` year DEFAULT '0000',
  `observaciones` varchar(350) DEFAULT NULL,
  `cod_inventario` varchar(45) DEFAULT NULL,
  `reporte` varchar(100) DEFAULT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`iddispositivo`),
  UNIQUE KEY `iddispositivo_UNIQUE` (`iddispositivo`),
  KEY `idtipodispositivo_idx` (`idtipo_dispositivo`),
  KEY `idprocesador_idx` (`idprocesador`),
  KEY `idram_idx` (`idram`),
  KEY `iddisco_idx` (`iddisco`),
  KEY `idplaca_madre_idx` (`idplaca_madre`),
  KEY `idfuente_idx` (`idfuente`),
  KEY `idso_idx` (`idso`),
  CONSTRAINT `iddisco` FOREIGN KEY (`iddisco`) REFERENCES `disco` (`iddisco`),
  CONSTRAINT `idfuente` FOREIGN KEY (`idfuente`) REFERENCES `fuente` (`idfuente`),
  CONSTRAINT `idplaca_madre` FOREIGN KEY (`idplaca_madre`) REFERENCES `placa_madre` (`idplaca_madre`),
  CONSTRAINT `idprocesador` FOREIGN KEY (`idprocesador`) REFERENCES `procesador` (`idprocesador`),
  CONSTRAINT `idram` FOREIGN KEY (`idram`) REFERENCES `ram` (`idram`),
  CONSTRAINT `idso` FOREIGN KEY (`idso`) REFERENCES `so` (`idso`),
  CONSTRAINT `idtipodispositivo` FOREIGN KEY (`idtipo_dispositivo`) REFERENCES `tipo_dispositivo` (`idtipo_dispositivo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene la información sobrle la masrca, componentes y sistema operativo de un dispositivo determinado';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dispositivo`
--

LOCK TABLES `dispositivo` WRITE;
/*!40000 ALTER TABLE `dispositivo` DISABLE KEYS */;
INSERT INTO `dispositivo` VALUES (1,1,11,'2022-10-04',1,31,6,1,5,2,2021,'Mouse, Tecaldo, Auriculars con Mic, Parlantes',NULL,NULL,1),(3,1,10,NULL,2,30,5,2,5,2,2018,'Mouse, Tecaldo, Auriculars con Mic, Parlantes',NULL,NULL,1),(7,2,4,'2020-10-15',2,27,7,2,1,2,2020,NULL,NULL,NULL,1),(8,1,11,'2022-04-05',2,27,10,7,5,2,2021,'Mouse, Teclado, Parlantes',NULL,NULL,1),(9,1,12,NULL,4,10,2,5,6,2,2018,'Mouse, Teclado, Auriculares con Mic',NULL,NULL,1),(10,1,12,'2018-01-25',4,11,2,5,6,2,2018,'Mouse,Teclado,Parlantes','','',1);
/*!40000 ALTER TABLE `dispositivo` ENABLE KEYS */;
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
