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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `us_nombre` varchar(60) NOT NULL,
  `us_apellido` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nickname` varchar(45) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los usuarios habilitados para usar el ABM';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Jorge Eduardo','Ferreira','etechinformatica.obera@gmail.com','$2b$10$HAd9QK0Ek/hFvfWyN67czeB0YwNs7bZMKNvTTAsP4drkXIBPXrwzS','admin',1),(2,'Eduard','Ferre','admin@admin.com.ar','$2b$10$wToLKEeDNX5.07PasFT15uaun7HYDfYjgWnn2u39TQZUNr/VK2J/S','Eduadmin',0),(3,'Pepito','Martinchos','user@admin.com.ar','$2b$10$Xd7c0KSQR28kmUEJ6oQcLugvrwnTS5.e7kJtCTAOA2rbkWWZWcJeS','user',1),(4,'Juan','Cualquiera','juan@admin.com.ar','$2b$10$9oExr7vUONga0BVKGg9K4uX1FScAx8YpdhZTpKcBDfBRLla828ol6','juancito',1),(6,'administrador','sistema','administrador@admin.com.ar','$2b$10$XgUBPdYoVrgNeSysLMI0K.PHRlAO5Wwz.yDhhHTd3CEMSHijo7j72','admin',0),(7,'yayo','yeyu','yoyo@admin.com.ar','$2b$10$IFPTpB/hGbY5f/.rW7scmOLbvEiP25qRAbYeuy/qO1RtGTf0SSum6','yoyo',0),(8,'pepo','pipo','piop@admin.com','$2b$10$Tg5iPL9Vqls03X9.aI4KV.GfaYH82SCS.lpsioxf4TpPIT9U5AbrS','piop',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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
