###### 关于BFC需要了解的问题
1. BFC是什么？
2. 哪些元素会生成BFC?
3. BFC的作用及原理

###### BFC是什么?
1. 盒子模型
block-level box: display属性为block, list-item, table的元素，会生成block-level box。并且参与block fomatting context。
 inline-level box: display属性为inline, inline-block, inline-table的元素，会生成inline-level box。并且参与inline formatting context。

2. Formatting context
Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块`渲染区域`，并且有一套`渲染规则`，
它决定了其`子元素`将如何定位，以及和`其他元素`的关系和相互作用。
最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

3. block formatting context布局规则 
	每个元素会一个紧挨着一个
	Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。（什么情形下是同一个BFC）
	BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
	计算BFC的高度时，浮动元素也参与计算
	BFC的区域不会与float box重叠。
	每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

###### 哪些元素会生成BFC?
•	the root element or something that contains it
•	floats (elements where float is not none)
•	absolutely positioned elements (elements where position is absolute or fixed)
•	inline-blocks (elements with display: inline-block)
•	table cells (elements with display: table-cell, which is the default for HTML table cells)
•	table captions (elements with display: table-caption, which is the default for HTML table captions)
•	elements where overflow has a value other than visible
•	flex boxes (elements with display: flex or inline-flex)

根元素
float属性不为none
position为absolute或fixed
display为inline-block, table-cell, table-caption, flex, inline-flex
overflow不为visible


###### BFC的作用及原理
1. 见doc文档


