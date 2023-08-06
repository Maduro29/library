-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2023 at 08:47 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `bookId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `authors` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `bookId`, `title`, `authors`, `publisher`, `year`, `isbn`, `createdAt`, `updatedAt`) VALUES
(1, 159, 'Đắc Nhân Tâm', 'Dale Carnegie', 'Nhà Xuất Bản Trẻ', '1936', '9780613913139', '2023-08-06 05:19:22', '2023-08-06 03:43:15'),
(2, 99, 'Nhà Giả Kim', 'Paulo Coelho', 'Nhà Xuất Bản Văn Học', '1988', '9780061122415', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(3, 120, 'Cuốn theo chiều gió', 'Margaret Mitchell', 'Nhà Xuất Bản Kim Đồng', '1936', '9780446675536', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(4, 144, 'Đi tìm lẽ sống', 'Viktor E. Frankl', 'Nhà Xuất Bản Phụ Nữ', '1946', '9780807014271', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(5, 300, 'Cách học hóa hữu cơ hiệu quả cho dân công nghệ', 'Cao Tiến Cường', 'Nhà Xuất Bản Đại Học Công Nghệ', '2022', '9780062515674', '2023-08-06 05:19:22', '2023-08-06 06:23:30'),
(6, 111, 'Đời ngắn đừng ngủ dài', 'Robin Sharma', 'Nhà Xuất Bản Văn Học', '1994', '9780062515674', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(7, 137, 'Điều kỳ diệu của tình yêu thương trong cuộc sống hàng ngày', 'Thich Nhat Hanh', 'Nhà Xuất Bản Kim Đồng', '1991', '9781888375664', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(8, 240, 'Tâm lý học hạnh phúc: Khám phá những bí mật của tâm trí hạnh phúc và thành công trong cuộc sống và công việc.', 'Sonja Lyubomirsky, Ken Sheldon, David Schkade, Martin Seligman.', 'Nhà Xuất Bản Phụ Nữ', '2005', '9781593851257', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(9, 210, 'Sống đơn giản: Lối sống tối giản giúp bạn hạnh phúc hơn, giàu có hơn và tự do hơn.', 'Joshua Becker', 'Nhà Xuất Bản Trẻ', '2016', '9781601427960', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(10, 222, 'Tôi tài giỏi, bạn cũng thế! - Cuốn sách giúp bạn khám phá và phát triển tiềm năng của mình.', 'Carol S. Dweck', 'Nhà Xuất Bản Văn Học', '2006', '9780345472328', '2023-08-06 05:19:22', '2023-08-06 05:19:22'),
(14, 174, 'Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Nhật Ánh', 'Nhà xuất bản Kim Đồng', '2017', '9780061184756', '2023-08-06 03:41:01', '2023-08-06 03:41:01'),
(15, 162, 'Bắt Trẻ Đồng Xanh', 'J. D. Salinger', 'Nhà Xuất Bản Phùng Khanh', '1994', '9780613578139', '2023-08-06 06:16:31', '2023-08-06 06:16:31'),
(16, 100, 'Vợ Nhặt', 'Kim Lân', 'Nhà Xuất Bản Văn Học', '1962', '9780061122499', '2023-08-06 06:16:31', '2023-08-06 06:16:31'),
(17, 163, 'Bài Giảng Tư Tưởng Hồ Chí Minh', 'Hà Thị Dáng Hương', 'Nhà Xuất Bản Bách Khoa Hà Nội', '2020', '9780666578139', '2023-08-06 06:20:01', '2023-08-06 06:20:01'),
(18, 40, 'Giao Tiếp Tiếng Nhật', 'Tú Uyên', 'Nhà Xuất Bản Đại Học Quốc Gia', '2015', '9780061199756', '2023-08-06 06:21:16', '2023-08-06 06:21:16'),
(19, 400, 'How to Rap', 'Tupac', 'Nhà Xuất Bản Âm Nhạc', '1994', '9786666666756', '2023-08-06 06:27:21', '2023-08-06 06:28:42'),
(20, 402, 'How to Rap 2', 'Eminem', 'Nhà Xuất Bản Âm Nhạc', '2022', '9786161554756', '2023-08-06 06:28:14', '2023-08-06 06:28:14');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-author.js'),
('migration-book.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
