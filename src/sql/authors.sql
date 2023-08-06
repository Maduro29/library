-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2023 at 09:01 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `personality` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `authorId`, `name`, `personality`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Dale Carnegie', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(2, 4, 'Paulo Coelho', 'Brazil', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(3, 5, 'Margaret Mitchell', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(4, 7, 'Viktor E. Frankl', 'Áo', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(5, 9, 'Robin Sharma', 'Canada', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(6, 11, 'Thich Nhat Hanh', 'Việt Nam', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(7, 14, 'Sonja Lyubomirsky', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(8, 15, 'Ken Sheldon', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(9, 17, 'David Schkade', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17'),
(10, 20, 'Martin Seligman', 'Mỹ', '2023-08-06 05:24:17', '2023-08-06 05:24:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
