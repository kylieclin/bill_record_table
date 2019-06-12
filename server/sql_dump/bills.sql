-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 12, 2019 at 12:15 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `billrecord`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payfrom` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `payto` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `type` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `paid` tinyint(3) UNSIGNED NOT NULL,
  `note` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `payfrom`, `payto`, `amount`, `added`, `type`, `paid`, `note`) VALUES
(19, 'Chase', 'Amy', 1550, '2019-04-14 16:43:17', 'Credit Card', 1, 'Dinner'),
(20, 'BofA', 'Kevin', 5520, '2019-05-13 21:24:43', 'Cash', 1, 'Basketball game'),
(21, 'chase', 'sephora', 515, '2019-05-15 17:39:26', 'Credit Card', 1, 'lip stick'),
(23, 'Chase', 'Trader Goes', 6835, '2019-05-16 12:02:54', 'Credit Card', 0, 'Food'),
(25, 'Wells Fargo', 'REI', 8925, '2019-05-18 04:32:20', 'Cash', 1, 'Sports wear'),
(28, 'BofA', 'Car wash', 1000, '2019-05-23 00:49:49', 'Credit Card', 0, 'Irvine blvd'),
(29, 'Chase', 'Bill', 1800, '2019-05-23 00:51:16', 'Cash', 1, 'drinks'),
(30, 'BofA', 'Phone bill', 3050, '2019-05-26 02:32:02', 'Credit Card', 0, 'April phone');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
