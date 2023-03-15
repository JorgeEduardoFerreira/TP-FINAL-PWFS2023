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
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `idram` int NOT NULL AUTO_INCREMENT,
  `tipo_ram` varchar(10) NOT NULL,
  `rtamaño` int NOT NULL,
  `rtipo_tamaño` varchar(2) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idram`),
  UNIQUE KEY `idram_UNIQUE` (`idram`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene información sobre los tipos y capacidad de las memorias RAM disponibles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
INSERT INTO `ram` VALUES (1,'DDR2',256,'MB',1),(2,'DDR2',512,'MB',1),(3,'DDR2',1,'GB',1),(4,'DDR2',2,'GB',1),(5,'DDR3',1,'GB',1),(6,'DDR3',2,'GB',1),(7,'DDR3',3,'GB',1),(8,'DDR3',4,'GB',1),(9,'DDR3',5,'GB',1),(10,'DDR3',6,'GB',1),(11,'DDR3',8,'GB',1),(12,'DDR3',9,'GB',1),(13,'DDR3',10,'GB',1),(14,'DDR3',12,'GB',1),(15,'DDR3',16,'GB',1),(16,'DDR3',17,'GB',1),(17,'DDR3',18,'GB',1),(18,'DDR3',20,'GB',1),(19,'DDR3',24,'GB',1),(20,'DDR3',32,'GB',1),(21,'DDR4',1,'GB',1),(22,'DDR4',2,'GB',1),(23,'DDR4',3,'GB',1),(24,'DDR4',4,'GB',1),(25,'DDR4',5,'GB',1),(26,'DDR4',6,'GB',1),(27,'DDR4',8,'GB',1),(28,'DDR4',9,'GB',1),(29,'DDR4',10,'GB',1),(30,'DDR4',12,'GB',1),(31,'DDR4',16,'GB',1),(32,'DDR4',17,'GB',1),(33,'DDR4',18,'GB',1),(34,'DDR4',20,'GB',1),(35,'DDR4',24,'GB',1),(36,'DDR4',32,'GB',1);
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
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
