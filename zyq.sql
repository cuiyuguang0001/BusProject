/*
 Navicat Premium Data Transfer

 Source Server         : 数据库_work
 Source Server Type    : MySQL
 Source Server Version : 50626
 Source Host           : localhost:3306
 Source Schema         : zyq

 Target Server Type    : MySQL
 Target Server Version : 50626
 File Encoding         : 65001

 Date: 17/11/2019 18:41:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bug_log
-- ----------------------------
DROP TABLE IF EXISTS `bug_log`;
CREATE TABLE `bug_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '填写人名称',
  `busName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '车名',
  `createDate` int(11) NOT NULL DEFAULT 0 COMMENT '填写日期',
  `text` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '内容',
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '标题',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bug_log
-- ----------------------------
INSERT INTO `bug_log` VALUES (4, '司机一号', '黑A5806', 1573986680, '很稳很舒服', '驾驶一天');

-- ----------------------------
-- Table structure for bus_bus
-- ----------------------------
DROP TABLE IF EXISTS `bus_bus`;
CREATE TABLE `bus_bus`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '车名',
  `norms` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '型号',
  `buyTime` int(11) DEFAULT NULL COMMENT '购买时间',
  `uploadTime` int(11) DEFAULT NULL COMMENT '最后维修时间',
  `state` int(11) DEFAULT NULL COMMENT '是否启用1启用0不启用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_bus
-- ----------------------------
INSERT INTO `bus_bus` VALUES (12, '黑A5806', '东风雪铁龙', 1573985485, 0, 1);
INSERT INTO `bus_bus` VALUES (13, '黑A2608', '中国大众', 1573985520, 1573986524, 1);
INSERT INTO `bus_bus` VALUES (14, '黑A3846', '中国大众', 1573985677, 0, 1);

-- ----------------------------
-- Table structure for bus_driver
-- ----------------------------
DROP TABLE IF EXISTS `bus_driver`;
CREATE TABLE `bus_driver`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sfz` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int(11) NOT NULL,
  `brithday` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_driver
-- ----------------------------
INSERT INTO `bus_driver` VALUES (12, '司机一号', '230102184568795426', 25, '1990-06-13', 1573986641, 0);

-- ----------------------------
-- Table structure for bus_job
-- ----------------------------
DROP TABLE IF EXISTS `bus_job`;
CREATE TABLE `bus_job`  (
  `list` int(11) DEFAULT NULL COMMENT '职位排序',
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职位名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_job
-- ----------------------------
INSERT INTO `bus_job` VALUES (1, 1, '董事长');
INSERT INTO `bus_job` VALUES (2, 2, '经理');
INSERT INTO `bus_job` VALUES (10, 4, '秘书');

-- ----------------------------
-- Table structure for bus_jsz
-- ----------------------------
DROP TABLE IF EXISTS `bus_jsz`;
CREATE TABLE `bus_jsz`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `Busname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '车主姓名',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别',
  `card` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '身份证号',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '家庭住址',
  `Firsttime` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '领证日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_jsz
-- ----------------------------
INSERT INTO `bus_jsz` VALUES (4, '司机一号', '男', '258496587459631', '黑龙江哈尔滨', '2019-11-18');

-- ----------------------------
-- Table structure for bus_station
-- ----------------------------
DROP TABLE IF EXISTS `bus_station`;
CREATE TABLE `bus_station`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `busName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '车名',
  `pointOne` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '点1',
  `pointTwo` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0' COMMENT '点2',
  `state` int(11) NOT NULL DEFAULT 0 COMMENT '状态0未审核1通过2未通过',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_station
-- ----------------------------
INSERT INTO `bus_station` VALUES (11, '黑A5806', '116.393995,39.908703', '116.485319,39.900276', 1);
INSERT INTO `bus_station` VALUES (17, '2', '116.321897,39.895271', '116.378889,39.863655', 0);

-- ----------------------------
-- Table structure for bus_uploadorder
-- ----------------------------
DROP TABLE IF EXISTS `bus_uploadorder`;
CREATE TABLE `bus_uploadorder`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `busname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '车名',
  `money` int(11) DEFAULT NULL COMMENT '金额',
  `bdesc` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '维修原因',
  `time` int(11) DEFAULT NULL COMMENT '时间',
  `state` int(11) DEFAULT NULL COMMENT '状态0未审核1通过2拒绝',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_uploadorder
-- ----------------------------
INSERT INTO `bus_uploadorder` VALUES (8, '黑A2608', 800, '车辆碰撞', 1573985925, 1);
INSERT INTO `bus_uploadorder` VALUES (9, '黑A2608', 800, '车辆碰撞', 1573986078, 1);
INSERT INTO `bus_uploadorder` VALUES (10, '黑A2608', 800, '车辆碰撞', 1573986197, 1);

-- ----------------------------
-- Table structure for bus_user
-- ----------------------------
DROP TABLE IF EXISTS `bus_user`;
CREATE TABLE `bus_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '名称',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '性别',
  `job` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职位',
  `sal` int(11) DEFAULT NULL COMMENT '薪资',
  `joinDate` int(11) DEFAULT NULL COMMENT '入职时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_user
-- ----------------------------
INSERT INTO `bus_user` VALUES (9, '李强', 43, '男', '董事长', 100000, 1573985714);
INSERT INTO `bus_user` VALUES (10, '刘冷', 25, '男', '经理', 50000, 1573985787);
INSERT INTO `bus_user` VALUES (11, '王雪', 23, '女', '秘书', 30000, 1573985836);

SET FOREIGN_KEY_CHECKS = 1;
