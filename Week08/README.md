学习笔记
### 状态机
在一个字符串中，找到字符‘ab’
```
let string = 'abwertwer'
function test(string){
	for(let i = 0; i < string.length; i++){
		if(string[i]+string[i+1] == 'ab') return true 
	}
	return false
}
test(string)

// 方法二
function match(string){
	let foundA = false;
	for(let i of string){
		if(i == 'a'){
			foundA = true;
		} else if (foundA && i == 'b'){
			return true
		} else {
			foundA = false
		}
	}
	return false
}
match(string)

// 找到字符‘abcdef’
var findString = 'abcdef'
var string2 = 'werabcdeftwer'
function test(string){
	for(let i = 0; i < string.length; i++){
		let cur = string.slice(i, findString.length+i, )
		if(cur == findString){
			return true 
		} 
	}
	return false
}
test(string2)

```
### 七层网络模型
应用
表示 - HTTP
会话

传输 - TCP
网络 - Internet

数据链路 - 4G/5G/Wi-Fi 
物理层

### TCP与IP
流、包
端口、ip地址
require('net')
libnet/libpcap


### 301和302
###### 301适合永久重定向
　　301比较常用的场景是使用域名跳转。

　　比如，我们访问 http://www.baidu.com 会跳转到 https://www.baidu.com，发送请求之后，就会返回301状态码，然后返回一个location，提示新的地址，浏览器就会拿着这个新的地址去访问。 

　　注意： 301请求是可以缓存的， 即通过看status code，可以发现后面写着from cache。

　    或者你把你的网页的名称从php修改为了html，这个过程中，也会发生永久重定向。

###### 302用来做临时跳转
　　比如未登陆的用户访问用户中心重定向到登录页面。

　　访问404页面会重新定向到首页。 

##### niginx 301/302配置

rewrite后面接上permenent就代表301跳

304:资源有缓存并且没有更新，可直接用

-----

其他：
函数柯里化
```
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```