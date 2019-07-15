//app_server_00/app.js
//0:下载mysql express模块
//1:引入二个模块 mysql express
const mysql = require("mysql");
const express = require("express");
//1.1 引入模块 cors
const cors = require("cors");
//2:创建连接池 很大提高效率方法
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"luotuo"
});
//3:创建express对象
var server = express();
//3.1 配置允许访问列 脚手架8080
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//3.11:加载模块 express-session
const session=require("express-session");
server.use(session({
  secret:"128位随机字符串",//配置密钥
	//每次请求是否更新数据,也可以是false
  resave:true,//添加路由修改值
  savaUninitialized:true,//保存初始化数据
  cookie:{
    maxAge:1000*60*60
  }
}))
//3.12:配置模块
//并且对其配置 顺序问题
//3.2 配置静态资源目录 public
server.use(express.static("public"));
//3.3 配置第三方中间件
const bodyParser=require("body-parser");
//3.4 配置json是否是自动转换
server.use(bodyParser.urlencoded(
  {extended:false}
))
//4:为express对象绑定监听端口 3000
server.listen(3000);
// 小程序
//加载第三方模块并且创建对象
// const multer=require("multer") //引入模块
// var upload=multer({dest:"upload/"}) //创建对象
// //#dest 上传文件临时目录 upload
// //处理上传请求
// server.post("/uploadFile",upload.single("mypic"),(req,res)=>{})
//功能一:用户登录
//1:用户get 请求路径/login
server.get("/login",(req,res)=>{
  //2:获取二个参数 uname upwd
  var u = req.query.uname;
  var p = req.query.upwd;
  //3:创建sql
  var sql = "SELECT id,uname FROM lt_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //4:执行sql
  pool.query(sql,[u,p],(err,result)=>{
      if(err)throw err;
      //5:获取数据库返回结果
      //6:返回客户数据
      if(result.length==0){
        res.send({code:-1,msg:"用户名或密码有误"});
      }else{
        //登录成功
        //获取当前用户ID
        var uid=result[0].id;
        //保存session对象中
        req.session.uid=uid;
        res.send({code:1,data:result});
      }
  })
});
//首页功能：加载商品
server.get("/loadMore",(req,res)=>{
  var pno=req.query.pno;
  var pageSize = req.query.pageSize;
  //2:为参数设置默认值  pno:1 pageSize:4
  if(!pno){pno=1}
  if(!pageSize){pageSize=8}
  //3:创建sql语句
 var sql = "";
 sql+=" SELECT l.lid,l.title,l.price,l.color,l.rexiao,p.md";
 sql+=" from lt_laptop l,lt_laptop_pic p";
 sql+=" WHERE l.lid = p.laptop_id";
 sql+=" GROUP BY l.lid";
 sql+=" LIMIT ?,?";
 pool.query(sql,[pno,pageSize],(err,result)=>{
  if(err)throw err;
  res.send({code:1,data:result});
//5:获取数据库返回结果并且发送脚手架
})
})

//功能二:商品分页显示
//用户get 请求路径 /getProducts
server.get("/getProducts",(req,res)=>{
 //1:获取用户参数 pno pageSize
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:为参数设置默认值  pno:1 pageSize:4
 if(!pno){pno=1}
 if(!pageSize){pageSize=12}
 //3:创建sql语句
 var sql = "";
 sql+=" SELECT l.lid,l.title,l.price,l.color,l.rexiao,p.md";
 sql+=" from lt_laptop l,lt_laptop_pic p";
 sql+=" WHERE l.lid = p.laptop_id";
 sql+=" GROUP BY l.lid";
 sql+=" LIMIT ?,?";
 //3.1:计算开始记录数,几条记录  
 var offset = (pno-1)*pageSize;
 pageSize = parseInt(pageSize);
 //4:执行sql语句
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
 //5:获取数据库返回结果并且发送脚手架
 })
});

//功能三:首页轮播图
server.get("/imglist",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/index/541.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/index/542.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/index/543.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/index/544.jpg"},
  ];
  res.send({code:1,data:rows});
});
//功能三:首页轮播图
server.get("/pimglist",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/productInfo/540 (3).jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/productInfo/540.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/productInfo/540 (2).jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/productInfo/540 (1).jpg"},
  ];
  res.send({code:1,data:rows});
});
//功能四：首页九宫格
server.get("/grid",(req,res)=>{
    var rows=[
        {id:1,title:"户外",img_url:"http://127.0.0.1:3000/img/grid/86.jpg"},
        {id:2,title:"运动",img_url:"http://127.0.0.1:3000/img/grid/86 (1).jpg"},
        {id:3,title:"瑜伽",img_url:"http://127.0.0.1:3000/img/grid/86 (2).jpg"},
        {id:4,title:"男鞋",img_url:"http://127.0.0.1:3000/img/grid/86 (3).jpg"},
        {id:5,title:"男装",img_url:"http://127.0.0.1:3000/img/grid/86 (4).jpg"},
        {id:6,title:"女鞋",img_url:"http://127.0.0.1:3000/img/grid/86 (5).jpg"},
        {id:7,title:"箱包",img_url:"http://127.0.0.1:3000/img/grid/86 (6).jpg"},
        {id:8,title:"全部",img_url:"http://127.0.0.1:3000/img/grid/product_category_all_02.jpg"},
    ];
    res.send({code:1,data:rows})
});
//功能五:新闻分页显示
server.get("/news",(req,res)=>{
  //*参数    pno 页码 pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //*默认值  1   7
  if(!pno){pno=1}
  if(!pageSize){pageSize=7}
  var sql = " SELECT id,title,ctime,";
      sql +=" point,img_url";
      sql +=" FROM xz_news";
      sql +=" LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
       if(err)throw err;
       res.send({code:1,data:result});
  });    
  //*json   {code:1,data:[]}
});
//功能六：新闻详细信息
server.get("/newsInfo",(req,res)=>{
  //1.获取客户参数 nid
  var nid=req.query.nid;
  //2.拦截用户非法参数
  var reg=/^[0-9]{1,}$/;
  if(!reg.test(nid)){
    res.send({code:-1,msg:"参数格式不正确"});
    return;
  }
  var sql="SELECT id,content,ctime";
  sql+=" ,img_url";
  sql+=" FROM xz_news WHERE id=?";
  nid=parseInt(nid);
  pool.query(sql,[nid],(err,result)=>{
    if(err){throw err};
    res.send({code:1,data:result})
  })
});
//功能七：发送评论
server.post("/addcomment",(req,res)=>{
  //1.获取参数 nid 新闻编号 content评论内容
  var nid=req.body.nid;
  var content=req.body.content;
  //2.sql语句
  var sql="INSERT INTO xz_comment VALUES"
    sql+=" (NULL,?,?,now()) "
  //3.json
  pool.query(sql,[nid,content],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"})
  })
})
//功能八：评论列表
server.get("/getComment",(req,res)=>{
  //1.参数
  var nid=req.query.nid;
  var pno=req.query.pno;
  var pageSize=req.query.paseSize;
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=5
  }
  //2.sql
  var sql="SELECT id,nid,content,ctime";
  sql+=" FROM xz_comment";
  sql+=" WHERE nid= ?";
  sql+=" LIMIT ?,?";
  var offset=(pno-1)*pageSize;
  pageSize=parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
  //3.result
})
//功能九：查询购物车列表
server.get("/getShopCart",(req,res)=>{
  //拦截没有登录用户
  if(!req.session.uid){
    res.send({code:-1,data:[],msg:"请登录"});
    return ;
  }

  //1.参数 uid 用户登录成功保存服务器
  //node.js 程序不是保存脚手架
  //服务器对象 session 
  var uid=req.session.uid;//后面替换
  //2.sql
  var sql=" SELECT id,pid,price,uid,pname";
  sql+=" FROM xz_cart";
  sql+=" WHERE uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err){throw err};
    res.send({code:1,data:result});
  })
})
//功能十：删除购物车中的某个商品
server.post("/removeItem",(req,res)=>{
  var id=req.body.id;
  var sql="DELETE FROM xz_cart";
  sql+=" WHERE id=?";
  id=parseInt(id);
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    //执行sql语句影响行数
    //INSERT UPDATE DELETE 判断条件
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
//功能十一:删除用户选中(多个)商品
server.get("/removeMItem",(req,res)=>{
  //1.参数
  var ids=req.query.ids;
  //2.sql
  var sql="DELETE FROM lt_cart";
  sql+=" WHERE id IN ("+ids+")";
  //3.json
  pool.query(sql,(err,result)=>{
    console.log(sql)
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"成功删除多个商品"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
//根据session值,切换内容
server.get("/judge",(req,res)=>{
  if(!req.session.uid){
    res.send({code:-1})
    return;
  }else{
    var uid=req.session.uid;
    var sql="SELECT uname FROM lt_login WHERE id=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err){throw err};
      res.send({code:1,data:result})
    })
  }
})
//功能十二：用户点击添加购物车按钮
server.get("/addcart",(req,res)=>{
 // 0.向数据表 xz_cart 添加一个一列count INT
 // 1.获取参数 uid pid pname price
 // 2.判断用户是否登录
    if(!req.session.uid){
      res.send({code:-1,msg:"请登录"});
      return;
    }
    console.log(req.session.uid);
 // 3.如果当前用户未登录,程序停止且返回出错信息 请登录
    
    var uid=req.session.uid;
    var pid=req.query.pid;
    var pname=req.query.title;
    var price=req.query.price;
    var color=req.query.color;
    var size=req.query.size;
    var count=1;
//  4.创建sql语句查询当前用户是否添加过此商品
    var sql="SELECT * FROM lt_cart WHERE uid=? AND pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err){throw err};
        //回调函数:什么时候执行函数
        //sql语句执行完毕并且返回结果
        if(result.length==0){
          var sql=`INSERT INTO lt_cart`;
          sql+=` VALUES(null,1,${price},${pid},${uid},'${color}','${size}')`
        }else{
          var sql=`UPDATE lt_cart SET`;
          sql+=` count=count+1`
          sql+=` WHERE uid = ${uid} AND pid=${pid}`
        }
        pool.query(sql,(err,result)=>{
          if(err){throw err};
          res.send({code:1,msg:"添加成功"})
        })
    })
  })
  //功能十三：用户点击商品列表显示商品详细信息
  server.get("/findProduct",(req,res)=>{
    //1.参数lid商品编号
    var pid=req.query.pid;
    //2.sql select
    var sql="SELECT l.lid,l.title,l.price,p.md";
    sql+=" FROM lt_laptop l,lt_laptop_pic p "
    sql+=" WHERE l.lid = p.laptop_id AND l.lid=?";
    sql+=" GROUP BY l.lid "

    //3.json
    pool.query(sql,[pid],(err,result)=>{
      if(err){throw err};
      res.send({code:1,data:result})
    })
  })
//购物车列表
server.get("/cartlist",(req,res)=>{
  //如果session对象中uid不存在
  //原因:当前没有登录
  //console.log(req.session);
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }else{
  //参数 uid   
  var uid = req.session.uid;
  //sql  多表查询
  var sql = " SELECT c.id,c.count,c.price,";
  sql+=" c.uid,c.pid,c.color,c.size,l.md";
  sql+=" FROM lt_cart c,lt_laptop_pic l";
  sql+=" WHERE l.laptop_id = c.pid";
  sql+=" AND c.uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result})
  })
  }
 });    
 //功能十一:删除购物车中一件商品3
//http://127.0.0.1:3000/delCartItem?id=5
server.get("/delCartItem",(req,res)=>{
  //1:参数 id   9:38
  var id = req.query.id;
  //2:sql  DELETE
  var sql = "DELETE FROM lt_cart WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"});
     }else{
       res.send({code:-1,msg:"删除失败"});
     }
  });
  //3:json msg
});

//功能十六：完成图片上传
//1 加载multer,fs模块
const multer=require("multer");
const fs=require("fs")
//2 创建multer模块对象
var upload=multer({dest:"upload/"})
//1.接受post请求 /uploadFile
server.post("/uploadFile",upload.single("mypic"),(req,res)=>{
  //2 创建新文件名
  var rt=new Date().getTime();
  var rr=Math.floor(Math.random()*9999);
  var src=req.file.originalname;
  var i3=src.lastIndexOf(".");
  var suff = src.substring(i3);
  var newFile=__dirname+"/public/upload/";
  newFile+= rt+rr+suff;
  //3.移动 public/upload/23234.jpg
  fs.renameSync(req.file.path,newFile);
  //4.返回添加成功
  res.send({code:1,msg:"上传成功"})
})

