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
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `idarea` int NOT NULL AUTO_INCREMENT,
  `nom_area` varchar(60) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idarea`),
  UNIQUE KEY `idarea_UNIQUE` (`idarea`),
  UNIQUE KEY `nom_area_UNIQUE` (`nom_area`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='contiene los datos del Area que existen en las empresas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'COMERCIAL',1),(2,'LOGISTICA',1),(3,'TALLER',1),(4,'SERVICIOS',1);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignacion`
--

DROP TABLE IF EXISTS `asignacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignacion` (
  `idasignacion` int NOT NULL AUTO_INCREMENT,
  `idpersonal` int NOT NULL,
  `iddispositivo` int NOT NULL,
  `fecha_asignacion` date NOT NULL,
  `estado` tinyint DEFAULT '1',
  PRIMARY KEY (`idasignacion`),
  UNIQUE KEY `idasignacion_UNIQUE` (`idasignacion`),
  KEY `idpersonal_idx` (`idpersonal`),
  KEY `iddispositivo_idx` (`iddispositivo`),
  CONSTRAINT `iddispositivo` FOREIGN KEY (`iddispositivo`) REFERENCES `dispositivo` (`iddispositivo`),
  CONSTRAINT `idpersonal` FOREIGN KEY (`idpersonal`) REFERENCES `personal` (`idpersonal`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Se declara el personal y que dispositivo se le fue asignado';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignacion`
--

LOCK TABLES `asignacion` WRITE;
/*!40000 ALTER TABLE `asignacion` DISABLE KEYS */;
INSERT INTO `asignacion` VALUES (1,1,1,'2023-02-26',1),(3,2,3,'2023-01-15',0),(4,3,7,'2021-12-15',1),(5,5,9,'2020-09-10',1),(6,4,8,'2022-06-09',1);
/*!40000 ALTER TABLE `asignacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `asignaciones`
--

DROP TABLE IF EXISTS `asignaciones`;
/*!50001 DROP VIEW IF EXISTS `asignaciones`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `asignaciones` AS SELECT 
 1 AS `idasignacion`,
 1 AS `fecha_asignacion`,
 1 AS `IDperNumLeg`,
 1 AS `Apellido`,
 1 AS `Nombre`,
 1 AS `Puesto`,
 1 AS `Sector`,
 1 AS `Sucursal`,
 1 AS `iddispositivo`,
 1 AS `Tipo_Dispositivo`,
 1 AS `Marca_Dispositivo`,
 1 AS `Fecha_Compra`,
 1 AS `IDmarcaMarca_Proc`,
 1 AS `Descrip_Procesador`,
 1 AS `IDmarcaMarca_PlMa`,
 1 AS `Modelo_Placa_Madre`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `detalle_placa`
--

DROP TABLE IF EXISTS `detalle_placa`;
/*!50001 DROP VIEW IF EXISTS `detalle_placa`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `detalle_placa` AS SELECT 
 1 AS `idplaca_madre`,
 1 AS `Marca`,
 1 AS `modelo_placa`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `detalle_procesador`
--

DROP TABLE IF EXISTS `detalle_procesador`;
/*!50001 DROP VIEW IF EXISTS `detalle_procesador`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `detalle_procesador` AS SELECT 
 1 AS `idprocesador`,
 1 AS `Marca`,
 1 AS `desc_procesador`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `detalledispositivo`
--

DROP TABLE IF EXISTS `detalledispositivo`;
/*!50001 DROP VIEW IF EXISTS `detalledispositivo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `detalledispositivo` AS SELECT 
 1 AS `iddispositivo`,
 1 AS `Tipo_Dispositivo`,
 1 AS `Marca_Dispositivo`,
 1 AS `Fecha_Compra`,
 1 AS `dtamaño`,
 1 AS `dtipo_tamaño`,
 1 AS `tipo_disco`,
 1 AS `Marca_procesador`,
 1 AS `Descrip_Procesador`,
 1 AS `Marca_Placa_Madre`,
 1 AS `Modelo_placa_Madre`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `detallepersonal`
--

DROP TABLE IF EXISTS `detallepersonal`;
/*!50001 DROP VIEW IF EXISTS `detallepersonal`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `detallepersonal` AS SELECT 
 1 AS `idpersonal`,
 1 AS `Legajo`,
 1 AS `Apellido`,
 1 AS `Nombre`,
 1 AS `Puesto`,
 1 AS `Sector`,
 1 AS `Area`,
 1 AS `Sucursal`,
 1 AS `Division`,
 1 AS `Empresa`,
 1 AS `Equipo`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `disco`
--

DROP TABLE IF EXISTS `disco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disco` (
  `iddisco` int NOT NULL AUTO_INCREMENT,
  `tipo_disco` varchar(10) NOT NULL,
  `dtamaño` int NOT NULL,
  `dtipo_tamaño` varchar(2) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`iddisco`),
  UNIQUE KEY `iddisco_UNIQUE` (`iddisco`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene información sobre los tipos y capacidad de los discos de almacenamiento disponibles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disco`
--

LOCK TABLES `disco` WRITE;
/*!40000 ALTER TABLE `disco` DISABLE KEYS */;
INSERT INTO `disco` VALUES (1,'HDD',320,'GB',1),(2,'HDD',500,'GB',1),(3,'HDD',1,'TB',1),(4,'HDD',2,'TB',1),(5,'SSD',120,'GB',1),(6,'SSD',240,'GB',1),(7,'SSD',256,'GB',1),(8,'NVMe',128,'GB',1),(9,'NVMe',256,'GB',1),(10,'NVMe',240,'GB',1);
/*!40000 ALTER TABLE `disco` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division` (
  `iddivision` int NOT NULL AUTO_INCREMENT,
  `nom_division` varchar(60) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`iddivision`),
  UNIQUE KEY `nom_division_UNIQUE` (`nom_division`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene el nombre del rubro principal al que se dedica una empresa';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
INSERT INTO `division` VALUES (1,'BEBIDAS',1),(2,'ALIMENTOS',1),(3,'SERVICIOS',1);
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idempresa` int NOT NULL AUTO_INCREMENT,
  `nom_empresa` varchar(45) NOT NULL,
  `dir_empresa` varchar(100) NOT NULL,
  `tel1` int DEFAULT NULL,
  `tel2` int DEFAULT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idempresa`),
  UNIQUE KEY `nom_empresa_UNIQUE` (`nom_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los datos de las empresas existentes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'1994','GARABÍ 125',2147483647,2147483647,1),(2,'TOTAL DISTRIBUCIONES','GARABÍ 125',2147483647,2147483647,1),(3,'TOTAL CENTER','17 DE AGOSTO 2820',778548364,0,1),(4,'TOTAL GESTION','GARABÍ 125',2147483647,NULL,1),(6,'KERA GUAZU','RUTA 14 KM ',884455625,NULL,1);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipo` (
  `idequipo` int NOT NULL AUTO_INCREMENT,
  `nom_equipo` varchar(80) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idequipo`),
  UNIQUE KEY `nom_equipo_UNIQUE` (`nom_equipo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los datos del equipo donde se menciona el area y sucursal al que esta asignado el personal ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (1,'VENTAS TD CENTRO',1),(2,'VENTAS TD SUR',1),(3,'VENTAS TD NORTE',1),(4,'VENTAS TL ',1),(5,'PLANEAMIENTO',1),(6,'LOGISTICA KG VIRASORO',1);
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuente`
--

DROP TABLE IF EXISTS `fuente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fuente` (
  `idfuente` int NOT NULL AUTO_INCREMENT,
  `potencia` int NOT NULL,
  `estado` tinyint NOT NULL,
  PRIMARY KEY (`idfuente`),
  UNIQUE KEY `idfuente_UNIQUE` (`idfuente`),
  UNIQUE KEY `potencia_UNIQUE` (`potencia`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene información de las potencias de las fuentes de energía disponibles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuente`
--

LOCK TABLES `fuente` WRITE;
/*!40000 ALTER TABLE `fuente` DISABLE KEYS */;
INSERT INTO `fuente` VALUES (1,300,1),(2,330,1),(3,400,1),(4,450,1),(5,500,1),(6,550,1),(7,600,1);
/*!40000 ALTER TABLE `fuente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `idlog` int NOT NULL AUTO_INCREMENT,
  `idusuario` int NOT NULL,
  `tiempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `movimiento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idlog`),
  KEY `idusuario_idx` (`idusuario`),
  CONSTRAINT `idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Se registran los movimientos, usuario y momento en que realizó dicho movimiento';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `idmarca` int NOT NULL,
  `nom_marca` varchar(60) NOT NULL DEFAULT 'Sin marca',
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idmarca`),
  UNIQUE KEY `idmarca_UNIQUE` (`idmarca`),
  UNIQUE KEY `nom_marca_UNIQUE` (`nom_marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Conteine el listado de marcas de los componentes, dispositivos o hardware';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'HP',1),(2,'LG',1),(3,'Samsung',1),(4,'DELL',1),(5,'AMD',1),(6,'INTEL',1),(7,'ASUS',1),(8,'Gigabyte',1),(9,'ASRock',1),(10,'MSI',1),(11,'Solarmax',1),(12,'Sentey',1);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `placa_madre`
--

DROP TABLE IF EXISTS `placa_madre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placa_madre` (
  `idplaca_madre` int NOT NULL AUTO_INCREMENT,
  `idmarca` int NOT NULL,
  `modelo_placa` varchar(45) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idplaca_madre`),
  KEY `idmarca_idx` (`idmarca`),
  CONSTRAINT `idmarcapl` FOREIGN KEY (`idmarca`) REFERENCES `marca` (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene infomración sobre el modelo y marca de la placa madre ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placa_madre`
--

LOCK TABLES `placa_madre` WRITE;
/*!40000 ALTER TABLE `placa_madre` DISABLE KEYS */;
INSERT INTO `placa_madre` VALUES (1,7,'Prime A320M-K',1),(2,8,'H410M H V5',1),(3,8,'GA-H110M-H',1),(4,8,'GA-F2A55M-S1',1),(5,9,'FM2A55M-VG3+',1),(6,10,'PRO H410M-B',1),(7,8,'H510M H',1);
/*!40000 ALTER TABLE `placa_madre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procesador`
--

DROP TABLE IF EXISTS `procesador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procesador` (
  `idprocesador` int NOT NULL AUTO_INCREMENT,
  `idmarca` int NOT NULL,
  `desc_procesador` varchar(120) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idprocesador`),
  UNIQUE KEY `idprocesador_UNIQUE` (`idprocesador`),
  UNIQUE KEY `desc_procesador_UNIQUE` (`desc_procesador`),
  KEY `idmarca_idx` (`idmarca`),
  KEY `idmarcapr_idx` (`idmarca`),
  CONSTRAINT `idmarca_pr` FOREIGN KEY (`idmarca`) REFERENCES `marca` (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Ccontiene información sobre los procesadores (hardware) disponibles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procesador`
--

LOCK TABLES `procesador` WRITE;
/*!40000 ALTER TABLE `procesador` DISABLE KEYS */;
INSERT INTO `procesador` VALUES (1,5,'Ryzen 5 4600G',1),(2,6,'Core i3-10105 3.70GHz',1),(3,6,'Core i3-7100 CPU 3.90GHz',1),(4,5,'DualCore A4-4000 3,2GHz',1);
/*!40000 ALTER TABLE `procesador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puesto`
--

DROP TABLE IF EXISTS `puesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puesto` (
  `idpuesto` int NOT NULL AUTO_INCREMENT,
  `nom_puesto` varchar(60) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idpuesto`),
  UNIQUE KEY `idpuesto_UNIQUE` (`idpuesto`),
  UNIQUE KEY `nom_puestol_UNIQUE` (`nom_puesto`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Constiene los datos de los puestos existentes en los sectores';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puesto`
--

LOCK TABLES `puesto` WRITE;
/*!40000 ALTER TABLE `puesto` DISABLE KEYS */;
INSERT INTO `puesto` VALUES (1,'SOPORTE TECNICO',1),(2,'VENDEDOR',1),(3,'SUPERVISOR DE VENTAS',1),(4,'ANALISTA',1),(5,'SUPERVISOR DE DEPOSITO',1);
/*!40000 ALTER TABLE `puesto` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sector` (
  `idsector` int NOT NULL AUTO_INCREMENT,
  `nom_sector` varchar(50) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idsector`),
  UNIQUE KEY `idsector_UNIQUE` (`idsector`),
  UNIQUE KEY `nom_sector_UNIQUE` (`nom_sector`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los datos de los sectores que hat dentro de las empresas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'VENTAS',1),(2,'OPERACIONES',1),(3,'ADMINISTRACION',1),(4,'CONTABILIDAD',1),(5,'RRHH',1),(6,'FINANZAS',1),(7,'PLANEAMIENTO',1),(8,'LOGISTICA',1);
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `so`
--

DROP TABLE IF EXISTS `so`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `so` (
  `idso` int NOT NULL AUTO_INCREMENT,
  `version` varchar(15) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idso`),
  UNIQUE KEY `version_UNIQUE` (`version`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Listado de los Sistemas Operativos en uso';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `so`
--

LOCK TABLES `so` WRITE;
/*!40000 ALTER TABLE `so` DISABLE KEYS */;
INSERT INTO `so` VALUES (1,'WIN 7',1),(2,'WIN 10',1),(3,'WIN 11',1),(4,'WIN XP',1);
/*!40000 ALTER TABLE `so` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursal`
--

DROP TABLE IF EXISTS `sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sucursal` (
  `idsucursal` int NOT NULL AUTO_INCREMENT,
  `nom_sucursal` varchar(60) NOT NULL,
  `estado` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`idsucursal`),
  UNIQUE KEY `idsucursal_UNIQUE` (`idsucursal`),
  UNIQUE KEY `nom_sucursal_UNIQUE` (`nom_sucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contiene los nombres de las localidades de las sucursales';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursal`
--

LOCK TABLES `sucursal` WRITE;
/*!40000 ALTER TABLE `sucursal` DISABLE KEYS */;
INSERT INTO `sucursal` VALUES (1,'OBERA',1),(2,'POSADAS',1),(3,'PUERTO RICO',1),(4,'JARDIN AMERICA',1),(5,'SAN MARTIN',0),(6,'VIRASORO',1);
/*!40000 ALTER TABLE `sucursal` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Final view structure for view `asignaciones`
--

/*!50001 DROP VIEW IF EXISTS `asignaciones`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `asignaciones` AS select `asig`.`idasignacion` AS `idasignacion`,date_format(`asig`.`fecha_asignacion`,'%Y-%m-%d') AS `fecha_asignacion`,concat(`asig`.`idpersonal`,' - ',`dtper`.`Legajo`) AS `IDperNumLeg`,`dtper`.`Apellido` AS `Apellido`,`dtper`.`Nombre` AS `Nombre`,`dtper`.`Puesto` AS `Puesto`,`dtper`.`Sector` AS `Sector`,`dtper`.`Sucursal` AS `Sucursal`,`dtdis`.`iddispositivo` AS `iddispositivo`,`dtdis`.`Tipo_Dispositivo` AS `Tipo_Dispositivo`,`dtdis`.`Marca_Dispositivo` AS `Marca_Dispositivo`,date_format(`dtdis`.`Fecha_Compra`,'%Y-%m-%d') AS `Fecha_Compra`,`dtdis`.`Marca_procesador` AS `IDmarcaMarca_Proc`,`dtdis`.`Descrip_Procesador` AS `Descrip_Procesador`,`dtdis`.`Marca_Placa_Madre` AS `IDmarcaMarca_PlMa`,`dtdis`.`Modelo_placa_Madre` AS `Modelo_Placa_Madre`,`asig`.`estado` AS `estado` from ((`asignacion` `asig` join `detallepersonal` `dtper` on((`asig`.`idpersonal` = `dtper`.`idpersonal`))) join `detalledispositivo` `dtdis` on((`asig`.`iddispositivo` = `dtdis`.`iddispositivo`))) order by `asig`.`idasignacion` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `detalle_placa`
--

/*!50001 DROP VIEW IF EXISTS `detalle_placa`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `detalle_placa` AS select `pl`.`idplaca_madre` AS `idplaca_madre`,concat(`mar`.`idmarca`,' - ',`mar`.`nom_marca`) AS `Marca`,`pl`.`modelo_placa` AS `modelo_placa`,`pl`.`estado` AS `estado` from (`placa_madre` `pl` join `marca` `mar` on((`pl`.`idmarca` = `mar`.`idmarca`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `detalle_procesador`
--

/*!50001 DROP VIEW IF EXISTS `detalle_procesador`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `detalle_procesador` AS select `pro`.`idprocesador` AS `idprocesador`,concat(`mar`.`idmarca`,' - ',`mar`.`nom_marca`) AS `Marca`,`pro`.`desc_procesador` AS `desc_procesador`,`pro`.`estado` AS `estado` from (`procesador` `pro` join `marca` `mar` on((`mar`.`idmarca` = `pro`.`idmarca`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `detalledispositivo`
--

/*!50001 DROP VIEW IF EXISTS `detalledispositivo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `detalledispositivo` AS select `d`.`iddispositivo` AS `iddispositivo`,`t`.`tipo_dispositivo` AS `Tipo_Dispositivo`,`ma`.`nom_marca` AS `Marca_Dispositivo`,date_format(`d`.`fecha_compra`,'%Y-%m-%d') AS `Fecha_Compra`,`dis`.`dtamaño` AS `dtamaño`,`dis`.`dtipo_tamaño` AS `dtipo_tamaño`,`dis`.`tipo_disco` AS `tipo_disco`,`dtpr`.`Marca` AS `Marca_procesador`,`dtpr`.`desc_procesador` AS `Descrip_Procesador`,`dtpl`.`Marca` AS `Marca_Placa_Madre`,`dtpl`.`modelo_placa` AS `Modelo_placa_Madre`,`d`.`estado` AS `estado` from ((((((((`dispositivo` `d` join `detalle_procesador` `dtpr` on((`dtpr`.`idprocesador` = `d`.`idprocesador`))) join `detalle_placa` `dtpl` on((`dtpl`.`idplaca_madre` = `d`.`idplaca_madre`))) join `tipo_dispositivo` `t` on((`t`.`idtipo_dispositivo` = `d`.`idtipo_dispositivo`))) join `marca` `ma` on((`ma`.`idmarca` = `d`.`idmarca`))) join `ram` on((`ram`.`idram` = `d`.`idram`))) join `disco` `dis` on((`dis`.`iddisco` = `d`.`iddisco`))) join `fuente` `fu` on((`fu`.`idfuente` = `d`.`idfuente`))) join `so` on((`so`.`idso` = `d`.`idso`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `detallepersonal`
--

/*!50001 DROP VIEW IF EXISTS `detallepersonal`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `detallepersonal` AS select `p`.`idpersonal` AS `idpersonal`,`p`.`num_legajo` AS `Legajo`,`p`.`apellido` AS `Apellido`,`p`.`nombre` AS `Nombre`,`pu`.`nom_puesto` AS `Puesto`,`se`.`nom_sector` AS `Sector`,`ar`.`nom_area` AS `Area`,`su`.`nom_sucursal` AS `Sucursal`,`di`.`nom_division` AS `Division`,`em`.`nom_empresa` AS `Empresa`,`eq`.`nom_equipo` AS `Equipo`,`p`.`estado` AS `estado` from (((((((`personal` `p` join `puesto` `pu` on((`pu`.`idpuesto` = `p`.`idpuesto`))) join `sector` `se` on((`se`.`idsector` = `p`.`idsector`))) join `area` `ar` on((`ar`.`idarea` = `p`.`idarea`))) join `sucursal` `su` on((`su`.`idsucursal` = `p`.`idsucursal`))) join `division` `di` on((`di`.`iddivision` = `p`.`iddivision`))) join `empresa` `em` on((`em`.`idempresa` = `p`.`idempresa`))) join `equipo` `eq` on((`eq`.`idequipo` = `p`.`idequipo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14 21:36:16
