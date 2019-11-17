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

 Date: 17/11/2019 11:53:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_bus
-- ----------------------------
INSERT INTO `bus_bus` VALUES (2, '2', '13', 1573821962, 0, 1);
INSERT INTO `bus_bus` VALUES (6, '奥迪', 'A186', 1573838904, 0, 1);
INSERT INTO `bus_bus` VALUES (7, '小弟弟', '1653', 1573881697, 0, 1);
INSERT INTO `bus_bus` VALUES (8, '99', '99', 1573881749, 0, 1);
INSERT INTO `bus_bus` VALUES (9, '兰博基尼', '木马', 1573897340, 0, 1);
INSERT INTO `bus_bus` VALUES (10, '9', '9', 1573897484, 0, 1);
INSERT INTO `bus_bus` VALUES (11, '强无敌', '全微分', 1573897534, 0, 1);

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_driver
-- ----------------------------
INSERT INTO `bus_driver` VALUES (1, '1', '232301188878569845', 11, '2019-11-16', 1, 1);
INSERT INTO `bus_driver` VALUES (3, '小心心', '1515151515151', 16, '2019-11-13', 1573896672, 1);
INSERT INTO `bus_driver` VALUES (4, '8', '8', 8, '2019-12-05', 1573896768, 0);
INSERT INTO `bus_driver` VALUES (5, '9', '9', 9, '2019-11-16', 1573896802, 0);
INSERT INTO `bus_driver` VALUES (6, '6', '6', 6, '2019-12-04', 1573896872, 0);
INSERT INTO `bus_driver` VALUES (7, '1', '1', 1, '2019-11-21', 1573896932, 0);
INSERT INTO `bus_driver` VALUES (8, '2', '2', 2, '2019-11-07', 1573897002, 0);
INSERT INTO `bus_driver` VALUES (9, '8', '8', 8, '2019-11-16', 1573897232, 0);
INSERT INTO `bus_driver` VALUES (10, '9', '9', 9, '2019-11-21', 1573897426, 0);
INSERT INTO `bus_driver` VALUES (11, '2', '2', 2, '2019-11-27', 1573897469, 0);

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
INSERT INTO `bus_job` VALUES (8, 5, '8');

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_jsz
-- ----------------------------
INSERT INTO `bus_jsz` VALUES (1, '的深V', '女', '1', '1573896672', '2019-11-16');
INSERT INTO `bus_jsz` VALUES (2, '1', '女', '1', '1573896672', '2019-11-16');
INSERT INTO `bus_jsz` VALUES (3, '1', '女', '1', '1573896672', '2019-11-16');

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_uploadorder
-- ----------------------------
INSERT INTO `bus_uploadorder` VALUES (1, '1', 1, '吹牛逼吹坏了', 1573821962, 1);
INSERT INTO `bus_uploadorder` VALUES (2, '2', 2, '基金', 1573821962, 2);
INSERT INTO `bus_uploadorder` VALUES (3, '3', 3, '积极', 1573821962, 0);
INSERT INTO `bus_uploadorder` VALUES (4, '奥迪', 999, '99', 1573892681, 1);
INSERT INTO `bus_uploadorder` VALUES (5, '2', 66, '啊', 1573897349, 0);
INSERT INTO `bus_uploadorder` VALUES (6, '2', 9, '9', 1573897491, 0);
INSERT INTO `bus_uploadorder` VALUES (7, '2', 748, '845', 1573897495, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of bus_user
-- ----------------------------
INSERT INTO `bus_user` VALUES (1, '小崔崔', 18, '男', '董事长', 5432, 1573821962);
INSERT INTO `bus_user` VALUES (2, '999', 999, '女', '董事长', 999, 1573832040);
INSERT INTO `bus_user` VALUES (6, '小弟弟', 20, '女', '秘书', 66, 1573879184);
INSERT INTO `bus_user` VALUES (8, '5', 5, '女', '8', 6, 1573881386);

SET FOREIGN_KEY_CHECKS = 1;
