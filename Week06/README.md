学习笔记
### 语言按语法分类
- 非形式语言（中英）
- 形式语言（严格、乔姆斯基谱系）
	- 0型 无限制文法
	- 1型 上下文相关文法
	- 2型 上下文无关文法
	- 3型 正则文法

### 什么是产生式（BNF）
- 用尖括号括起来的名称来表示语法结构名
- 语法结构
	- 基础结构 称终结符terminal Symbol（叶子节点的意思）
	- 复合结构 非终结符nonterminal Symbol（需要用其他语法结构定义的结构）
- 引号和中间的字符表示终结符
- 可以有括号表示一组
- *表示重复多次
- |表示或
- +表示至少一次
```
// 四则运算：
1+2*3

// 终结符：
<Number>
+ - * /

// 非终结符：
<MultiplicativeExpression>
<AddtiveExpression>


<MultiplicativeExpression>::=<Number>|
	<MultiplicativeExpression>"*"<Number>|
	<MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
	<AddtiveExpression>"+"<MultiplicativeExpression>|
	<AddtiveExpression>"-"<MultiplicativeExpression>|
```

[作业]：加上括号

### 通过产生式理解乔姆斯基谱系
0型 无限制文法
?::=?

1型 上下文相关文法
?<A>?::=?<B>? 1、3问号是上文，2、4是下文

2型 上下文无关文法
<A>::=?

3型 正则文法
<A>::=<A>?
<A>::=?<A> 不行

```
{
	get a {return 1},
	get: 1
}
// 特例，此处上下文相关。但是js整体是上下文无关。

2 ** 1 ** 2 右结合，右边先算
```

### 语言的分类
- 形式语言-用途
 - 数据描述语言：json、html、xaml、sql、css
 - 编程语言：c、c++、java、c#、python、ruby、perl、lisp、T-sql、clojure、hashell、JavaScript
- 形式语言-表达方式
 - 声明式语言：json、html、xaml、sql、css、lisp、clojure、hashell
 - 命令式语言：c、c++、java、c#、python、ruby、perl、JavaScript

### 图灵完备性
- 图灵完备性
 - 命令式-图灵机
  - goto
  - if和while
 - 声明式-lambda演算
  - 递归

### 动态与静态
- 动态
 - 在用户的设备/在线服务器上
 - 产品实际运行时
 - runtime
- 静态
 - 在程序员的设备上
 - 产品开发时
 - compiletime

### 类型系统
- 动态类型系统和静态类型系统
- 强类型和弱类型
 - String + Number
 - String == Boolean
- 复合类型
 - 结构体{a: T1, b: T2}
 - 函数签名(T1,T2)=>T3
- 子类型 凡是能用父类型Array<Parent>的地方，都能用子类型Array<Child>，
- 泛型(把类型当做参数传递给某一段代码结构。代码结构是类，则是泛型类，代码啊结构是函数，则是泛型函数)
 - 逆变/协变 function接受child作为参数

### 一般命令式编程语言
 五个层级
 1. Atom原子级 最小单位，通常包含关键字、直接量（Identifierr、Literal）
 2. Expressioon表达式 语句。
 3. statement
 4. stricture
 5. program