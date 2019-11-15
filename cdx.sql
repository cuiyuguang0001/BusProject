-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.26 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 zyq 的数据库结构
CREATE DATABASE IF NOT EXISTS `zyq` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `zyq`;


-- 导出  表 zyq.bus_bus 结构
CREATE TABLE IF NOT EXISTS `bus_bus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '车名',
  `norms` varchar(50) DEFAULT NULL COMMENT '型号',
  `buyTime` int(11) DEFAULT NULL COMMENT '购买时间',
  `uploadTime` int(11) DEFAULT NULL COMMENT '最后维修时间',
  `state` int(11) DEFAULT NULL COMMENT '是否启用1启用0不启用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_bus 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_bus` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_bus` ENABLE KEYS */;


-- 导出  表 zyq.bus_driver 结构
CREATE TABLE IF NOT EXISTS `bus_driver` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `sfz` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `brithday` varchar(50) DEFAULT NULL,
  `time` int(11) DEFAULT NULL COMMENT '添加日期',
  `state` int(11) DEFAULT NULL COMMENT '是否禁用1是0否',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_driver 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_driver` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_driver` ENABLE KEYS */;


-- 导出  表 zyq.bus_job 结构
CREATE TABLE IF NOT EXISTS `bus_job` (
  `list` int(11) DEFAULT NULL COMMENT '职位排序',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) DEFAULT NULL COMMENT '职位名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_job 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_job` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_job` ENABLE KEYS */;


-- 导出  表 zyq.bus_uploadorder 结构
CREATE TABLE IF NOT EXISTS `bus_uploadorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `busname` varchar(50) DEFAULT NULL COMMENT '车名',
  `money` int(11) DEFAULT NULL COMMENT '金额',
  `desc` varchar(1000) DEFAULT NULL COMMENT '维修原因',
  `time` int(11) DEFAULT NULL COMMENT '时间',
  `state` int(11) DEFAULT NULL COMMENT '状态0未审核1通过2拒绝',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_uploadorder 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_uploadorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_uploadorder` ENABLE KEYS */;


-- 导出  表 zyq.bus_user 结构
CREATE TABLE IF NOT EXISTS `bus_user` (
  `id` int(11) DEFAULT NULL COMMENT '主键',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `job` varchar(50) DEFAULT NULL COMMENT '职位',
  `sal` int(11) DEFAULT NULL COMMENT '薪资',
  `joinDate` int(11) DEFAULT NULL COMMENT '入职时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_user 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
