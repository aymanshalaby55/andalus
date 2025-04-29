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
-- Table structure for table `battle_person_relation`
--

DROP TABLE IF EXISTS `battle_person_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `battle_person_relation` (
  `battle_id` int NOT NULL,
  `person_id` int NOT NULL,
  `role_in_battle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`battle_id`,`person_id`),
  KEY `person_id` (`person_id`),
  CONSTRAINT `battle_person_relation_ibfk_1` FOREIGN KEY (`battle_id`) REFERENCES `battles` (`battle_id`),
  CONSTRAINT `battle_person_relation_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `persons` (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battle_person_relation`
--

LOCK TABLES `battle_person_relation` WRITE;
/*!40000 ALTER TABLE `battle_person_relation` DISABLE KEYS */;
INSERT INTO `battle_person_relation` VALUES (1,2,NULL),(2,1,NULL),(3,4,NULL),(4,6,NULL),(5,5,NULL),(6,10,NULL),(8,9,NULL),(9,9,NULL),(9,10,NULL),(10,8,NULL),(10,9,NULL),(11,8,NULL),(11,14,NULL),(12,19,NULL),(12,23,NULL),(13,10,NULL),(14,10,NULL),(15,10,NULL),(15,19,NULL),(16,10,NULL),(16,19,NULL),(17,10,NULL),(20,27,NULL),(20,28,NULL),(20,40,NULL),(20,43,NULL),(21,27,NULL),(21,28,NULL),(21,30,NULL),(23,29,NULL),(27,10,NULL),(28,10,NULL),(29,10,NULL),(30,10,NULL),(31,12,NULL),(32,49,NULL),(32,50,NULL),(33,54,NULL),(34,55,NULL),(35,55,NULL),(35,56,NULL),(36,55,NULL),(36,56,NULL),(37,54,NULL),(37,55,NULL),(37,56,NULL),(40,28,NULL),(40,40,NULL),(40,43,NULL),(41,40,NULL),(41,43,NULL),(44,58,NULL),(44,59,NULL),(45,61,NULL),(46,46,NULL),(46,59,NULL),(47,61,NULL),(47,65,NULL),(48,65,NULL),(49,70,NULL);
/*!40000 ALTER TABLE `battle_person_relation` ENABLE KEYS */;
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
