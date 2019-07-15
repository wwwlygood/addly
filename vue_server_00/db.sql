#设置客户端编码为UTF8
SET NAMES UTF8;
#创建数据库表mei
DROP DATABASE IF EXISTS luotuo;
CREATE DATABASE luotuo CHARSET=UTF8;
#进入luotuo
USE luotuo;
/**商品**/
CREATE TABLE lt_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              
  title VARCHAR(128),        
  price DECIMAL(10,2),        
  color VARCHAR(64),        
  rexiao VARCHAR(64) 
);
INSERT INTO lt_laptop VALUES
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外休闲T 春夏男女情侣功能圆领T恤短袖快干衣",109,"5色可选","2018新品"),
(null,1,"Camel骆驼户外运动短袖情侣速干T恤夏季休闲圆领速干衣跑步短袖衫上衣",210,"4色可选","2018新品"),
(null,1,"Camel骆驼户外针织T恤 情侣款户外休闲排干快干短袖上衣",189,"9色可选","2018新品"),
(null,1,"8264户外撞色皮肤衣春夏女士时尚轻薄遮阳透气防风衣外套",119,"2色可选","2018新品"),
(null,1,"Camel骆驼 8264登山队系列户外情侣款速干裤春夏男女长裤",289,"5色可选","2018新品"),
(null,1,"Camel骆驼户外快干T恤 舒适透气性感V领男款短袖休闲上衣",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外休闲T 春夏男女情侣功能圆领T恤短袖快干衣",109,"5色可选","2018新品"),
(null,1,"Camel骆驼户外运动短袖情侣速干T恤夏季休闲圆领速干衣跑步短袖衫上衣",210,"4色可选","2018新品"),
(null,1,"Camel骆驼户外针织T恤 情侣款户外休闲排干快干短袖上衣",189,"9色可选","2018新品"),
(null,1,"8264户外撞色皮肤衣春夏女士时尚轻薄遮阳透气防风衣外套",119,"2色可选","2018新品"),
(null,1,"Camel骆驼 8264登山队系列户外情侣款速干裤春夏男女长裤",289,"5色可选","2018新品"),
(null,1,"Camel骆驼户外快干T恤 舒适透气性感V领男款短袖休闲上衣",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外休闲T 春夏男女情侣功能圆领T恤短袖快干衣",109,"5色可选","2018新品"),
(null,1,"Camel骆驼户外运动短袖情侣速干T恤夏季休闲圆领速干衣跑步短袖衫上衣",210,"4色可选","2018新品"),
(null,1,"Camel骆驼户外针织T恤 情侣款户外休闲排干快干短袖上衣",189,"9色可选","2018新品"),
(null,1,"8264户外撞色皮肤衣春夏女士时尚轻薄遮阳透气防风衣外套",119,"2色可选","2018新品"),
(null,1,"Camel骆驼 8264登山队系列户外情侣款速干裤春夏男女长裤",289,"5色可选","2018新品"),
(null,1,"Camel骆驼户外快干T恤 舒适透气性感V领男款短袖休闲上衣",169,"2色可选","2018新品"),
(null,1,"Camel骆驼户外T恤男 春季休闲短袖透气翻领polo运动速干修身上衣潮",169,"2色可选","2018新品"),
(null,2,"【热销9万双】缓震登山鞋",259,"6色可选","2018新品"),
(null,2,"CAMLE骆驼户外沙滩鞋 春夏情侣款郊游简约休闲凉鞋",182,"4色可选","2018新品"),
(null,2,"Camel骆驼户外凉鞋男女  夏季舒适魔术贴防滑弹力时尚沙滩鞋男",259,"6色可选","2018新品"),
(null,2,"Camel骆驼 夏季户外沙滩鞋女休闲运动凉鞋男防滑涉水平底凉鞋",209,"5色可选","2018新品"),
(null,2,"Camel骆驼运动情侣款跑鞋 男女休闲透气运动鞋 轻便耐磨跑步鞋",180,"7色可选","2018新品"),
(null,2,"骆驼 8264登山队系列户外徒步鞋 情侣休闲低帮支撑透气徒步鞋子",259,"6色可选","2018新品"),
(null,2,"CAMEL骆驼户外新品徒步鞋 男款耐磨减震徒步鞋",279,"4色可选","2018新品"),
(null,2,"Camel骆驼户外登山鞋男女 秋冬季防水防滑耐磨高帮徒步鞋",259,"6色可选","2018新品"),
(null,2,"【热销9万双】缓震登山鞋",259,"6色可选","2018新品"),
(null,2,"CAMLE骆驼户外沙滩鞋 春夏情侣款郊游简约休闲凉鞋",182,"4色可选","2018新品"),
(null,2,"Camel骆驼户外凉鞋男女  夏季舒适魔术贴防滑弹力时尚沙滩鞋男",259,"6色可选","2018新品"),
(null,2,"Camel骆驼 夏季户外沙滩鞋女休闲运动凉鞋男防滑涉水平底凉鞋",209,"5色可选","2018新品"),
(null,2,"Camel骆驼运动情侣款跑鞋 男女休闲透气运动鞋 轻便耐磨跑步鞋",180,"7色可选","2018新品"),
(null,2,"骆驼 8264登山队系列户外徒步鞋 情侣休闲低帮支撑透气徒步鞋子",259,"6色可选","2018新品"),
(null,2,"CAMEL骆驼户外新品徒步鞋 男款耐磨减震徒步鞋",279,"4色可选","2018新品"),
(null,2,"Camel骆驼户外登山鞋男女 秋冬季防水防滑耐磨高帮徒步鞋",259,"6色可选","2018新品"),
(null,3,"【第四代液压帐篷】Camel骆驼帐篷户外 3-4人全自动速开防雨露营帐篷",650,"3色可选","2018新品"),
(null,3,"【热销4万】骆驼健身跑步手机臂包",250,"3色可选","2018新品"),
(null,3,"Camel骆驼运动护具男女秋冬防寒保暖户外跑步健身篮球腿脚关节护膝护具",650,"3色可选","2018新品"),
(null,3,"CAMEL骆驼户外秋冬保暖信封型 旅行居家休闲露营多功能便携睡袋",650,"3色可选","2018新品"),
(null,3,"Camel骆驼 户外四节直柄 徒步登山手杖",650,"3色可选","2018新品"),
(null,3,"CAMEL骆驼户外登山杖 4节直柄铝合金缓震轻盈抗腐蚀徒步登山手杖",650,"3色可选","2018新品"),
(null,3,"【第四代液压帐篷】Camel骆驼帐篷户外 3-4人全自动速开防雨露营帐篷",650,"3色可选","2018新品"),
(null,3,"【热销4万】骆驼健身跑步手机臂包",250,"3色可选","2018新品"),
(null,3,"Camel骆驼运动护具男女秋冬防寒保暖户外跑步健身篮球腿脚关节护膝护具",650,"3色可选","2018新品"),
(null,3,"CAMEL骆驼户外秋冬保暖信封型 旅行居家休闲露营多功能便携睡袋",650,"3色可选","2018新品"),
(null,3,"Camel骆驼 户外四节直柄 徒步登山手杖",650,"3色可选","2018新品"),
(null,3,"CAMEL骆驼户外登山杖 4节直柄铝合金缓震轻盈抗腐蚀徒步登山手杖",650,"3色可选","2018新品");


/**商品图片**/
CREATE TABLE lt_laptop_pic(
  laptop_id INT PRIMARY KEY AUTO_INCREMENT ,             
  md VARCHAR(128)           
);
INSERT INTO lt_laptop_pic VALUES
(null,'img/product/245.jpg'),
(null,'img/product/245 (1).jpg'),
(null,'img/product/245 (2).jpg'),
(null,'img/product/245 (3).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (5).jpg'),
(null,'img/product/245.jpg'),
(null,'img/product/245 (1).jpg'),
(null,'img/product/245 (2).jpg'),
(null,'img/product/245 (3).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (5).jpg'),
(null,'img/product/245 (1).jpg'),
(null,'img/product/245 (2).jpg'),
(null,'img/product/245 (3).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (5).jpg'),
(null,'img/product/245.jpg'),
(null,'img/product/245 (1).jpg'),
(null,'img/product/245 (2).jpg'),
(null,'img/product/245 (3).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (4).jpg'),
(null,'img/product/245 (4).jpg'),
#2
(null,'img/product/245 (6).jpg'),
(null,'img/product/245 (7).jpg'),
(null,'img/product/245 (8).jpg'),
(null,'img/product/245 (9).jpg'),
(null,'img/product/245 (10).jpg'),
(null,'img/product/245 (11).jpg'),
(null,'img/product/245 (6).jpg'),
(null,'img/product/245 (7).jpg'),
(null,'img/product/245 (8).jpg'),
(null,'img/product/245 (9).jpg'),
(null,'img/product/245 (10).jpg'),
#3
(null,'img/product/245 (12).jpg'),
(null,'img/product/245 (13).jpg'),
(null,'img/product/245 (14).jpg'),
(null,'img/product/245 (15).jpg'),
(null,'img/product/245 (16).jpg'),
(null,'img/product/245 (17).jpg'),
(null,'img/product/245 (12).jpg'),
(null,'img/product/245 (13).jpg'),
(null,'img/product/245 (14).jpg'),
(null,'img/product/245 (15).jpg'),
(null,'img/product/245 (16).jpg'),
(null,'img/product/245 (17).jpg');

#创建用户信息表
CREATE TABLE lt_login(
  id   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO lt_login VALUES
(null,'dingding',md5('123')),
(null,'dangdang',md5('123')),
(null,'tom',md5('123')),
(null,'lucy',md5('123')),
(null,'jerry',md5('123'));
#创建购物车表 id count price pid uid
CREATE TABLE lt_cart(
  id    INT PRIMARY KEY AUTO_INCREMENT,
  count INT,
  price DECIMAL(15,2),
  pid   INT,
  uid   INT,
  color VARCHAR(32),
  size VARCHAR(10)
);