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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14 21:36:53
