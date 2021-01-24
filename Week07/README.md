学习笔记
### 函数调用
import {foo} from 'foo.js'
var i = 0;
console.log(i);
foo();
console.log(i);
i++;

function foo(){
	console.log(i)
}
export foo;


----
// foo1
import {foo2} from 'foo.js'
var x = 1;
function foo(){
	console.log(x);
	foo2();
	console.log(x);
}
export foo;

// foo2
var y = 2;
function foo2(){
	console.log(y);
}
export foo2;


函数待用是一个类似stack
执行上下文 Execution Context
Running Execution Context

### Execution Context
i：0  
code evaluation state
function
script or Module
Generator

VariableEnvironment：仅仅处理var声明  
LexicalEnvironment: this\new.target\super\变量

Environment Record:
Declarative Environment Record
Global Environment Record
Object Environment Record

### 每个函数都会生成一个闭包
Environment Record形成链式结构


### Realm
不同的Realm里是完全独立的
这些对象也是有原型的
