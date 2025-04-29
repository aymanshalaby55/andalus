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
-- Table structure for table `conquest_person_relation`
--

DROP TABLE IF EXISTS `conquest_person_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conquest_person_relation` (
  `conquest_id` int NOT NULL,
  `person_id` int NOT NULL,
  `role_in_conquest` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`conquest_id`,`person_id`),
  KEY `person_id` (`person_id`),
  CONSTRAINT `conquest_person_relation_ibfk_1` FOREIGN KEY (`conquest_id`) REFERENCES `conquests` (`conquest_id`),
  CONSTRAINT `conquest_person_relation_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `persons` (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conquest_person_relation`
--

LOCK TABLES `conquest_person_relation` WRITE;
/*!40000 ALTER TABLE `conquest_person_relation` DISABLE KEYS */;
INSERT INTO `conquest_person_relation` VALUES (1,1,NULL),(1,2,NULL),(1,3,NULL),(1,4,NULL),(1,5,NULL),(1,6,NULL),(2,7,NULL),(2,8,NULL),(2,9,NULL),(3,14,NULL),(3,15,NULL),(3,16,NULL),(3,17,NULL),(3,18,NULL),(3,19,NULL),(3,20,NULL),(3,21,NULL),(3,22,NULL),(3,23,NULL),(3,24,NULL),(3,25,NULL),(4,10,NULL),(4,11,NULL),(4,12,NULL),(4,13,NULL),(5,26,NULL),(5,27,NULL),(5,28,NULL),(5,29,NULL),(5,30,NULL),(5,31,NULL),(5,32,NULL),(5,33,NULL),(5,35,NULL),(5,36,NULL),(5,37,NULL),(5,38,''),(5,39,NULL),(5,40,NULL),(5,41,NULL),(6,42,NULL),(6,43,NULL),(6,44,NULL),(6,45,NULL),(6,46,NULL),(6,47,NULL),(7,58,NULL),(7,59,NULL),(7,60,NULL),(7,61,NULL),(7,62,NULL),(7,63,NULL),(7,64,NULL),(7,65,NULL),(7,66,NULL),(7,67,NULL),(7,68,NULL),(7,69,NULL),(7,70,NULL),(8,48,NULL),(8,49,NULL),(8,50,NULL),(8,51,NULL),(8,52,NULL),(8,53,NULL),(8,54,NULL),(8,55,NULL),(8,56,NULL),(8,57,NULL);
/*!40000 ALTER TABLE `conquest_person_relation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-23 14:22:14
