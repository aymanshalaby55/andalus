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
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) NOT NULL,
  `region` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'جبل طارق',NULL,NULL),(2,'نهر لكة',NULL,NULL),(3,'إشبيلية',NULL,NULL),(4,'قرطبة',NULL,NULL),(5,'غرناطة',NULL,NULL),(6,'ماردة',NULL,NULL),(7,'مالقة',NULL,NULL),(8,'طليطلة',NULL,NULL),(9,'قرمونة',NULL,NULL),(10,'سرقسطة',NULL,NULL),(11,'ناربون',NULL,NULL),(12,'تولوز',NULL,NULL),(13,'أرل',NULL,NULL),(14,'بوردو',NULL,NULL),(15,'طلوشة',NULL,NULL),(16,'تور',NULL,NULL),(17,'بواتييه',NULL,NULL),(18,'إفريقية',NULL,NULL),(19,'دمشق',NULL,NULL),(20,'الأندلس',NULL,NULL),(21,'جنوب فرنسا',NULL,NULL),(22,'ناربون',NULL,NULL),(23,'وسط فرنسا',NULL,NULL),(24,'بلاط الشهداء',NULL,NULL),(25,'المغرب',NULL,NULL),(26,'المشرق',NULL,NULL),(27,'المصارة',NULL,NULL),(28,'بغداد',NULL,NULL),(29,'شمال إفريقيا',NULL,NULL),(30,'برشلونة',NULL,NULL),(31,'شنت منير',NULL,NULL),(32,'ليون',NULL,NULL),(33,'قشتالة',NULL,NULL),(34,'سانتياغو دي كومبوستيلا',NULL,NULL),(35,'بطليوس',NULL,NULL),(36,'بلنسية',NULL,NULL),(37,'باجة',NULL,NULL),(38,'لبلة',NULL,NULL),(39,'يابرة',NULL,NULL),(40,'الجزيرة الخضراء',NULL,NULL),(42,'جيان',NULL,NULL),(43,'بازو',NULL,NULL),(44,'لا ميجو',NULL,NULL),(45,'قلمرية',NULL,NULL),(46,'الصحراء الكبرى',NULL,NULL),(47,'ساحل العاج',NULL,NULL),(48,'مالي',NULL,NULL),(49,'النيجر',NULL,NULL),(50,'غانا',NULL,NULL),(51,'داهومي',NULL,NULL),(52,'بنين',NULL,NULL),(53,'نيجيريا',NULL,NULL),(54,'إفريقيا الوسطى',NULL,NULL),(55,'مراكش',NULL,NULL),(56,'جزر البليار',NULL,NULL),(57,'أراغون',NULL,NULL),(58,'تادلة',NULL,NULL),(59,'تلمسان',NULL,NULL),(60,'فاس',NULL,NULL),(61,'تونس',NULL,NULL),(62,'ليبيا',NULL,NULL),(63,'طرابلس',NULL,NULL),(64,'المرية',NULL,NULL),(65,'طرطوشة',NULL,NULL),(66,'لاردة',NULL,NULL),(67,'شلب',NULL,NULL),(68,'مكناسة',NULL,NULL),(69,'سجلماسة',NULL,NULL),(70,'درعة',NULL,NULL),(71,'باسة',NULL,NULL),(72,'البشرات',NULL,NULL),(73,'تورناي',NULL,NULL),(74,'بنبلونه',NULL,NULL),(75,'نافار',NULL,NULL),(76,'لوسينا',NULL,NULL),(77,'اسبانيا',NULL,NULL),(78,'روندا',NULL,NULL),(79,'بسطه',NULL,NULL),(80,'الزلاقه',NULL,NULL),(81,'اقليش',NULL,NULL),(82,'قتندة',NULL,NULL);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-21 16:11:53
