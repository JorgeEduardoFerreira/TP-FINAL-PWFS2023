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
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal` (
  `idpersonal` int NOT NULL AUTO_INCREMENT,
  `num_legajo` varchar(20) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `idpuesto` int NOT NULL,
  `idsector` int NOT NULL,
  `idarea` int NOT NULL,
  `idsucursal` int NOT NULL,
  `iddivision` int NOT NULL,
  `idempresa` int NOT NULL,
  `idequipo` int NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idpersonal`,`num_legajo`),
  UNIQUE KEY `num_legajo_UNIQUE` (`num_legajo`),
  UNIQUE KEY `idpersonal_UNIQUE` (`idpersonal`),
  KEY `idempresa_idx` (`idempresa`),
  KEY `idpuesto_idx` (`idpuesto`),
  KEY `idsector_idx` (`idsector`),
  KEY `idarea_idx` (`idarea`),
  KEY `idsucursal_idx` (`idsucursal`),
  KEY `iddivision_idx` (`iddivision`),
  KEY `idequipo_idx` (`idequipo`),
  CONSTRAINT `idarea` FOREIGN KEY (`idarea`) REFERENCES `area` (`idarea`),
  CONSTRAINT `iddivision` FOREIGN KEY (`iddivision`) REFERENCES `division` (`iddivision`),
  CONSTRAINT `idempresa` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`),
  CONSTRAINT `idequipo` FOREIGN KEY (`idequipo`) REFERENCES `equipo` (`idequipo`),
  CONSTRAINT `idpuesto` FOREIGN KEY (`idpuesto`) REFERENCES `puesto` (`idpuesto`),
  CONSTRAINT `idsector` FOREIGN KEY (`idsector`) REFERENCES `sector` (`idsector`),
  CONSTRAINT `idsucursal` FOREIGN KEY (`idsucursal`) REFERENCES `sucursal` (`idsucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los datos del Personal al que se le asignaran los equipos del inventario';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` VALUES (1,'TG-6','Jorge Eduardo','Ferreira',1,7,4,1,3,4,5,1),(2,'94-18','Claudio Fabian','Marolio',2,1,1,1,1,1,1,1),(3,'94-12','Hugo Marcelo','Elyin',3,1,1,1,1,1,1,1),(4,'TG-310','Ernesto ','Carabajal',4,7,4,2,3,3,5,1),(5,'KG-351','Ismael Mario','Bretes',5,8,2,6,1,6,6,1);
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14 21:36:53
