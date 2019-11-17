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


-- 导出  表 zyq.bug_log 结构
CREATE TABLE IF NOT EXISTS `bug_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0' COMMENT '填写人名称',
  `busName` varchar(50) NOT NULL DEFAULT '0' COMMENT '车名',
  `createDate` int(11) NOT NULL DEFAULT '0' COMMENT '填写日期',
  `text` varchar(50) NOT NULL DEFAULT '0' COMMENT '内容',
  `title` varchar(50) NOT NULL DEFAULT '0' COMMENT '标题',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bug_log 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bug_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `bug_log` ENABLE KEYS */;


-- 导出  表 zyq.bus_bus 结构
CREATE TABLE IF NOT EXISTS `bus_bus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '车名',
  `norms` varchar(50) DEFAULT NULL COMMENT '型号',
  `buyTime` int(11) DEFAULT NULL COMMENT '购买时间',
  `uploadTime` int(11) DEFAULT NULL COMMENT '最后维修时间',
  `state` int(11) DEFAULT NULL COMMENT '是否启用1启用0不启用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_bus 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `bus_bus` DISABLE KEYS */;
INSERT INTO `bus_bus` (`id`, `name`, `norms`, `buyTime`, `uploadTime`, `state`) VALUES
	(2, '2', '13', 1573821962, 0, 1),
	(6, '奥迪', 'A186', 1573838904, 0, 1),
	(7, '小弟弟', '1653', 1573881697, 0, 1),
	(8, '99', '99', 1573881749, 0, 1),
	(9, '兰博基尼', '木马', 1573897340, 0, 1),
	(10, '9', '9', 1573897484, 0, 1),
	(11, '强无敌', '全微分', 1573897534, 0, 1);
/*!40000 ALTER TABLE `bus_bus` ENABLE KEYS */;


-- 导出  表 zyq.bus_driver 结构
CREATE TABLE IF NOT EXISTS `bus_driver` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL,
  `sfz` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `brithday` varchar(50) NOT NULL,
  `time` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_driver 的数据：~10 rows (大约)
/*!40000 ALTER TABLE `bus_driver` DISABLE KEYS */;
INSERT INTO `bus_driver` (`id`, `name`, `sfz`, `age`, `brithday`, `time`, `state`) VALUES
	(1, '1', '232301188878569845', 11, '2019-11-16', 1, 1),
	(3, '小心心', '1515151515151', 16, '2019-11-13', 1573896672, 1),
	(4, '8', '8', 8, '2019-12-05', 1573896768, 0),
	(5, '9', '9', 9, '2019-11-16', 1573896802, 0),
	(6, '6', '6', 6, '2019-12-04', 1573896872, 0),
	(7, '1', '1', 1, '2019-11-21', 1573896932, 0),
	(8, '2', '2', 2, '2019-11-07', 1573897002, 0),
	(9, '8', '8', 8, '2019-11-16', 1573897232, 0),
	(10, '9', '9', 9, '2019-11-21', 1573897426, 0),
	(11, '2', '2', 2, '2019-11-27', 1573897469, 0);
/*!40000 ALTER TABLE `bus_driver` ENABLE KEYS */;


-- 导出  表 zyq.bus_job 结构
CREATE TABLE IF NOT EXISTS `bus_job` (
  `list` int(11) DEFAULT NULL COMMENT '职位排序',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) DEFAULT NULL COMMENT '职位名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_job 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `bus_job` DISABLE KEYS */;
INSERT INTO `bus_job` (`list`, `id`, `name`) VALUES
	(1, 1, '董事长'),
	(2, 2, '经理'),
	(10, 4, '秘书'),
	(8, 5, '8');
/*!40000 ALTER TABLE `bus_job` ENABLE KEYS */;


-- 导出  表 zyq.bus_jsz 结构
CREATE TABLE IF NOT EXISTS `bus_jsz` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `Busname` varchar(255) NOT NULL COMMENT '车主姓名',
  `sex` varchar(255) NOT NULL COMMENT '性别',
  `card` varchar(255) NOT NULL COMMENT '身份证号',
  `address` varchar(255) DEFAULT NULL COMMENT '家庭住址',
  `Firsttime` varchar(225) NOT NULL COMMENT '领证日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_jsz 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `bus_jsz` DISABLE KEYS */;
INSERT INTO `bus_jsz` (`id`, `Busname`, `sex`, `card`, `address`, `Firsttime`) VALUES
	(1, '的深V', '女', '1', '1573896672', '2019-11-16'),
	(2, '1', '女', '1', '1573896672', '2019-11-16'),
	(3, '1', '女', '1', '1573896672', '2019-11-16');
/*!40000 ALTER TABLE `bus_jsz` ENABLE KEYS */;


-- 导出  表 zyq.bus_station 结构
CREATE TABLE IF NOT EXISTS `bus_station` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `busName` varchar(50) NOT NULL DEFAULT '0' COMMENT '车名',
  `pointOne` varchar(50) NOT NULL DEFAULT '0' COMMENT '点1',
  `pointTwo` varchar(50) NOT NULL DEFAULT '0' COMMENT '点2',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '状态0未审核1通过2未通过',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  zyq.bus_station 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `bus_station` DISABLE KEYS */;
/*!40000 ALTER TABLE `bus_station` ENABLE KEYS */;


-- 导出  表 zyq.bus_uploadorder 结构
CREATE TABLE IF NOT EXISTS `bus_uploadorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `busname` varchar(50) DEFAULT NULL COMMENT '车名',
  `money` int(11) DEFAULT NULL COMMENT '金额',
  `bdesc` varchar(1000) DEFAULT NULL COMMENT '维修原因',
  `time` int(11) DEFAULT NULL COMMENT '时间',
  `state` int(11) DEFAULT NULL COMMENT '状态0未审核1通过2拒绝',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_uploadorder 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `bus_uploadorder` DISABLE KEYS */;
INSERT INTO `bus_uploadorder` (`id`, `busname`, `money`, `bdesc`, `time`, `state`) VALUES
	(1, '1', 1, '吹牛逼吹坏了', 1573821962, 1),
	(2, '2', 2, '基金', 1573821962, 2),
	(3, '3', 3, '积极', 1573821962, 0),
	(4, '奥迪', 999, '99', 1573892681, 1),
	(5, '2', 66, '啊', 1573897349, 0),
	(6, '2', 9, '9', 1573897491, 0),
	(7, '2', 748, '845', 1573897495, 0);
/*!40000 ALTER TABLE `bus_uploadorder` ENABLE KEYS */;


-- 导出  表 zyq.bus_user 结构
CREATE TABLE IF NOT EXISTS `bus_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `job` varchar(50) DEFAULT NULL COMMENT '职位',
  `sal` int(11) DEFAULT NULL COMMENT '薪资',
  `joinDate` int(11) DEFAULT NULL COMMENT '入职时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  zyq.bus_user 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `bus_user` DISABLE KEYS */;
INSERT INTO `bus_user` (`id`, `name`, `age`, `sex`, `job`, `sal`, `joinDate`) VALUES
	(1, '小崔崔', 18, '男', '董事长', 5432, 1573821962),
	(2, '999', 999, '女', '董事长', 999, 1573832040),
	(6, '小弟弟', 20, '女', '秘书', 66, 1573879184),
	(8, '5', 5, '女', '8', 6, 1573881386);
/*!40000 ALTER TABLE `bus_user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
