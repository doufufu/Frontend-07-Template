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