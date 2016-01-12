#微配物流api接口文档
@(物流司机版)[nodejs|apidoc]

**apidoc使用说明**文件说明：
 
- **app** ：接口定义文件位置；
- **template** ：模板文件位置(用于替换自动生成的应用文件-方便接口特殊化)；
- **apidoc** ：接口应用文件输出位置；

-------------------

## apidoc 安装

>依赖环境`nodejs`

[http://apidocjs.com/](http://apidocjs.com/) 参考地址

##### 安装步骤
``` nginx
/*安装*/
npm install apidoc -g
/*运行*/
apidoc -i app/ -o apidoc/ -t template/
```

##### 启动node服务
``` nginx
node server.js
```

**浏览器打开即可 [http://localhost:8080/](http://localhost:8080/) **

>修改端口  文件位置 server.js
``` javascript
var port = process.env.PORT || 8080; // set the port  line 5
```

>默认配置各接口参数  通过node提供一个param接口服务
``` javascript
app.get('/param', function(req, res) {
    res.sendfile('./apidoc/param.json'); //  return api param
});
```
**文件位置 template/param.json**
```json
{
  "auth" : {
    "phone"      : "18160039811",
    "password"   : "admin",
    "openid"     : "o3kZEw5RqAPl6ln292lYFOhENvEI"
  }
}
```
