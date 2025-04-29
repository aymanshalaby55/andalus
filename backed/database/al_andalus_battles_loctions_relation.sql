-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: al_andalus
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `battles_loctions_relation`
--

DROP TABLE IF EXISTS `battles_loctions_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `battles_loctions_relation` (
  `battle_id` int NOT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`battle_id`,`location_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `battles_loctions_relation_ibfk_1` FOREIGN KEY (`battle_id`) REFERENCES `battles` (`battle_id`),
  CONSTRAINT `battles_loctions_relation_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battles_loctions_relation`
--

LOCK TABLES `battles_loctions_relation` WRITE;
/*!40000 ALTER TABLE `battles_loctions_relation` DISABLE KEYS */;
INSERT INTO `battles_loctions_relation` VALUES (1,2),(20,3),(21,3),(11,4),(21,4),(31,4),(33,4),(20,5),(32,5),(33,5),(34,5),(37,5),(2,6),(20,7),(35,7),(20,9),(10,10),(3,12),(5,16),(45,18),(6,20),(8,20),(10,20),(12,20),(17,20),(21,20),(28,20),(45,20),(46,20),(4,21),(9,25),(44,25),(45,25),(46,25),(29,30),(27,31),(12,32),(15,32),(23,32),(27,32),(15,33),(16,33),(20,33),(23,33),(16,34),(30,34),(49,36),(10,37),(45,39),(20,40),(45,56),(44,60),(36,64),(10,65),(13,73),(14,74),(16,75),(33,76),(46,76),(47,77),(48,77),(49,77),(34,78),(36,79),(40,80),(41,81);
/*!40000 ALTER TABLE `battles_loctions_relation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-23 14:22:15
