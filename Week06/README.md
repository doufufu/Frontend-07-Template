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

### 其他产生式
