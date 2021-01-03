学习笔记
### object
- 访问object的属性是写死的，没办法加入监听代码（不可observe的对象）

### Proxy
- 设置对象+监听：proxy 对object做包裹
- proxy接受两个参数，第一个参数object，第二个参数config，包含所有要对po做的钩子
- set第一个参数obj， 第二个参数prop， 第三个参数val
```
let po = new Proxy(object, {
	set(obj, prop){
		console.log(obj, prop);
	}
})
// 调用 po.a = 3
// 调用 po.x = 3(不存在的属性也会调用set方法)

let po = new Proxy(object, {
	set(obj, prop, val){
		console.log(obj, prop, val);
	}
})
// po.a = 3
```
- 可以对apply、defineProperty、deleteProperty拦截并改变行为
- 对原始object去设置值，并不会触发proxy上hook的函数，只有po才会执行proxy的行为
- 所以，使用po后会对对象的行为可预测性降低

### effect
方法，可以对对象进行监听，当callback时，会执行effect里的内容。
```
let callbacks = [];

// 添加监听，可用addEventListener，也可用effect
effect(()=>{
	// 但存在性能问题，传入100个会都回调。优化：只有在对应变量变化时，再触发函数调用
	console.log(po.a)
})

function effect(callback){
	callbacks.push(callback) // callbacks,外层数组
}

// 使用
set(obj, prop, val){
	obj[prop] = val
	// 此处使用，callbacks为外层设置的数组，用于存储
	for(let callback of callbacks){
		callback()
	}
	return obj[prop]
},
```


### reactive
- 半成品的双向绑定
- 从数据到dom的监听
- native to reactive