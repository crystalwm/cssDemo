### ʲô��bootstrap
* ���������ڼܹ����е��û�����ͽ����ӿڵ�html��css��javascript���߼���
* ����html5��css3��bootstrap�����д������������ԣ��Ѻõ�ѧϰ���ߣ�׿Խ�ļ����ԣ���Ӧʽ��ƣ�12�и�������ʽ���ĵ���
* �Զ���JQuery�������������⣬����Less�ȡ�

>��Ľ�����Ϲ���bootstrap�Ŀγ̣���ϵ��:��תBootstrap����������Ӧʽ���֡�

### ��ο�ʼʹ��Bootstrap
1:����
http://www.bootcss.com/

2��ע��
bootstrap�е�js���������jquery�����`jquery`Ҫ��bootstrap֮ǰ���롣
bootstrap��֧��IE�ļ���ģʽ��

![zzz](./img/ie_compatible.jpg)
viewport
![zzz](./img/viewport.jpg)

bootstrapģ��ΪʹIE6��7��8�汾��IE9���°汾�����������html5�����ı�ǩ��������������ļ����ɡ�
```
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
```
ͬ��ΪʹIE6��7��8�汾���������css3��ʽ������������룺
```
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
```

### ȫ����ʽ
��ʵBootstrap��ȫ����ʽ�����ˡ�normalize.css��������û��һζ��ȫ��ʹ�ô�������ʽ�������ڴ˻����Ͻ�����һЩ������
������ʺ�Bootstrap�����˼�롣

�����ͨ����normalize.less����LESS�汾����_normalize.scss����Sass�汾������������˽⡣


## ����----`�����ص�`
Bootstrap����ͨ��HTMLҳ��һ����������ⶼ��ʹ�ñ�ǩ`<h1>`��`<h6>`,ֻ����Bootstrap��������Ĭ�ϵ���ʽ��
ʹ�������������������ʾ��Ч��һ�������嶨��Ĺ���������±���ʾ��
![zzz](./img/bootstrap_head.jpg)
ͨ���ȽϿ��Է��֣�Bootstrap������ʽ�����������������Ż����ã�

1������������`margin-top`��`margin-bottom`��ֵ��`h1~h3`���ú��ֵ����`20px`��`h4~h6`���ú��ֵ����`10px`��
2�����б�����и߶���`1.1`��Ҳ����font-size��1.1����,�����ı���ɫ�����嶼�̳и�Ԫ�ص���ɫ�����塣
3���̶���ͬ������������С��`h1=36px��h2=30px��h3=24px��h4=18px��h5=14px��h6=12px��`

����ľ������÷ǳ��򵥣�������ƽʱ������һ���ģ�ʹ��`<h1>~<h6>`��ǩ���ֱ��ʾ����һ����������h ���������Խ�󣬱�ʾ����ԽС���ı�ҲԽС������һ���򵥵�Ч�����Ҳ����༭���е�10-16�еĴ��롣

��Bootstrap��Ϊ���÷Ǳ���Ԫ�غͱ���ʹ����ͬ����ʽ�������ⶨ����.h1~.h6�������������Ҳ����༭����   18-23�д�����ʾ��

�Ա�����ʾ����Ч��ͼ������˵���ǵ�Ч����һģһ��

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>���⣨һ��</title>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>

<body>
<!--Bootstrap�еı���-->
<h1>Bootstrap����һ</h1>
<h2>Bootstrap�����</h2>
<h3>Bootstrap������</h3>
<h4>Bootstrap������</h4>
<h5>Bootstrap������</h5>
<h6>Bootstrap������</h6>

<!--Bootstrap���÷Ǳ���Ԫ�غͱ���ʹ����ͬ����ʽ-->
<div class="h1">Bootstrap����һ</div>
<div class="h2">Bootstrap�����</div>
<div class="h3">Bootstrap������</div>
<div class="h4">Bootstrap������</div>
<div class="h5">Bootstrap������</div>
<div class="h6">Bootstrap������</div>

<!--������д�·�-->
<h1>�ҵĵ�һ��bootstrap����</h1>

    
</body>
</html>
```
![zzz](./img/bootstrap_head_1.jpg)

### ������
����֮�⣬������Web�������У�������������һ��������������һ��С�ĸ����⡣
��Bootstrap����Ҳ�����������Ű�Ч����ʹ����`<small>`��ǩ������`������`�����������������Լ���һЩ������ʽ��

1��`�и�`����1������`font-weight`������normal����˳���Ч�������Ӵ֣���ͬʱ��ɫ������Ϊ��ɫ��#999����
2������`<small>`�ڵ��ı�������`h1~h3`�ڣ����С������Ϊ`��ǰ�ֺŵ�65%`������`h4~h6`���ֺŶ�����Ϊ`��ǰ�ֺŵ�75%`��
��ϸ���������bootstrap.css�ļ��е�407��~��443�С�

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>���⣨����</title>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>

<body>

<!--Bootstrap��ʹ����<small>��ǩ������������-->
<h1>Bootstrap����һ<small>���Ǹ�����</small></h1>
<h2>Bootstrap�����<small>���Ǹ�����</small></h2>
<h3>Bootstrap������<small>���Ǹ�����</small></h3>
<h4>Bootstrap������<small>���Ǹ�����</small></h4>
<h5>Bootstrap������<small>���Ǹ�����</small></h5>
<h6>Bootstrap������<small>���Ǹ�����</small></h6>

<!--������д��-->

<h1>�¶�Ժ��˽����30�� <small> һ�����Ե��޸�</small></h1>
</body>
</html>
```
![zzz](./img/bootstrap_head_2.jpg)

## ���䣨�����ı���-----`�����ص�`
**�����ı���**
1��`font-size`ȫ���ı��ֺ�Ϊ14px(`font-size`)��
2��`line-height`�и�Ϊ1.42857143��`line-height`������Լ��20px(��ҿ���һ����С����������ɻ���ʵ����ͨ��LESS��������������ģ�
��ȻSassҲ�������Ĺ���)��
3��`color`��ɫΪ���ɫ��#333����
4��`font-family`����Ϊ"Helvetica Neue", Helvetica, Arial, sans-serif;��font-family��������������������������Ĳ���̫���ʣ�
����ʵ����Ŀ�У���ҿ��Ը����Լ�������������ã��ڴ����ǲ���������������ǻص���������ö�������<body>Ԫ���ϣ�
�����⼸�����Զ��Ǽ̳����ԣ�����Webҳ�����ı�����������pԪ�أ��������ö��������Щ��ʽЧ����
/*Դ����鿴bootstrap.css�ļ��е�274��~280��*/
```
body {
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 14px;
line-height: 1.42857143;
color: #333;
background-color: #fff;
}
```

**����**
/*Դ����鿴bootstrap.css�ļ��е�467��~469��*/
```
p {
 margin: 0 0 10px;
}
```

**�ܽ�**
1��ʹ�÷�ʽ������ʹ��p��ǩ��
2��Ĭ�ϴ�С��������chrome���Թ����в鿴����
3���о�����ط������ص�

## ǿ������----`�����ص�`
###��html���������ǿ������ķ���
1������һ��class��д������Ԥ�ȴ����class��Ȼ�����ض��ı�ǩ����������class....
���磺font-weight:bold����ʵ��ʵ�ּӴ�Ч����font-size�������ֵĴ�С��color�������ֵ���ɫ��font-family��������ȵ�
background��������һЩ������ɫ����ͼƬ�ȵȡ�
2:ʹ��һЩhtml��ǩ
```
<strong></strong>�Ӵ��ı�
<em></em>����ζ��Ҫ�����������б������ʾ
<cite></cite>����
<small></small>С������
<b> ��ǩ�涨�����ı���
<i> ��ǩ��ʾб���ı�Ч����
```


### ��bootstrap�����ǿ������ʹ��
```
<p>������ͨ�ı����ҵ����ӳ�������������ͨ�ı����ҵ����ӳ�������������ͨ�ı���</p>
<p class="lead">��������Ҫͻ�����ı����ҵ����ӳ���������������Ҫͻ�����ı����ҵ����ӳ���������</p>
```

**һЩ������ǿ��**
.text-muted����ʾ��ʹ��ǳ��ɫ��#999��
.text-primary����Ҫ��ʹ����ɫ��#428bca��
.text-success���ɹ���ʹ��ǳ��ɫ(#3c763d)
.text-info��֪ͨ��Ϣ��ʹ��ǳ��ɫ��#31708f��
.text-warning�����棬ʹ�û�ɫ��#8a6d3b��
.text-danger��Σ�գ�ʹ�ú�ɫ��#a94442��
�߱�Դ��鿴bootstrap.css�ļ���500��~��532�У�

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>ǿ����ص���</title>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>

<body>
<div class="text-muted">.text-muted Ч��</div>
<div class="text-primary">.text-primaryЧ��</div>
<div class="text-success">.text-successЧ��</div>
<div class="text-info">.text-infoЧ��</div>
<div class="text-warning">.text-warningЧ��</div>
<div class="text-danger">.text-dangerЧ��</div>
<!--���������񲿷�-->
<p>����һ��Σ����Ϣ������Bootstrap����е�Σ�շ����ʾ</p>
</body>
</html>
```

![zzz](./img/bootstrap_strong.jpg)


**�ܽ᣺**
1�������ɶ���ʵ��
2����������ص�

## �ı�������-----`�����ص�`

����text-align���Եķ�װ
```
.text-left {
text-align: left;
}
.text-right {
text-align: right;
}
.text-center {
text-align: center;
}
.text-justify {
text-align: justify;
}
```
html����
```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>�ı�������</title>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>

<body>
<p class="text-left">�Ҿ���</p>
<p class="text-center">�Ҿ���</p>
<p class="text-right">�Ҿ���</p>
<p class="text-justify">There is clearly a need for CSS to be taken seriously by graphic artists. The Zen Garden aims to excite, inspire, and encourage participation. To begin, view some of the existing designs in the list. Clicking on any one will load the style sheet into this very page. The code remains the same, the only thing that has changed is the external .css file. </p>
<!--���������񲿷�-->
<p class="text-right">���ҼӸ��࣬�Ҿ����Ҷ��롣</p>


</body>
</html>
```
����Ч��

![zzz](./img/bootstrap_text_align.jpg)

**�ܽ�**
��������ص�

## �б�-------`�����ص�`

1��Ԫ�ص�html����3���б�

* �����б�
* �����б�
* �����б�

����Bootstrap����ƽʱ��ʹ�������ṩ��������ʽ���б�
   ?  ��ͨ�б�

   ?  �����б�

   ?  ȥ���б�

   ?  �����б�

   ?  �����б�

   ?  ˮƽ�����б�

**�б�Ƕ��**
```
<h5>�����б�Ƕ��</h5>
<ol>
    <li>�����б�</li>
    <li>
    �����б�
        <ol>
        <li>�����б�(2)</li>
        <li>�����б�(2)</li>
        </ol>
    </li>
    <li>�����б�</li>
</ol>
```
Ч��ͼ
![ssd](./img/bootstrap_ul_1.jpg)
**�б�--ȥ���б�**
��Ҫ�ǿ���`list-style-type:none`���Ҳ�Ǻܼ򵥵�
bootstrap�ṩ��һ��`class="list-unstyled"`
��Ҫ�˽�����Ļ������Բ鿴Դ��

**�б�--�����б�**
���ǳ���ʹ���б����˵�����ʹ�á�ͨ������`list-style-type:none`��`display:inline-block`��ʵ�֡�
bootstrap�ṩ��һ�� `class="list-inline"`
��Ҫ�˽�����Ļ������Բ鿴Դ��

**�ܽ�**
�����ص�

## ����
�������������˵�Ƚϼ򵥣�һ���ڸ��˲�����ʹ�õĽ�ΪƵ����������ʾ����ķ����Bootstrap��Ҫ�ṩ�����ִ�����
1��ʹ��`<code></code>`����ʾ������������
2��ʹ��`<pre></pre>`����ʾ���п����
3��ʹ��`<kbd></kbd>`����ʾ�û��������

Ԥ����汾��Bootstrap���������ʽ������ȡ������
1��LESS�汾�������code.less�ļ�
2��Sass�汾�������_code.scss�ļ�
���������CSS���������bootstrap.css�ļ���688��~��730�У����ڴ���̫�����˴���һһ�о١�

��ʹ�ô���ʱ���û����Ը��ݾ����������ʹ�ò�ͬ�����ͣ�
1��`<code>`��һ��������ڵ������ʻ򵥸����ӵĴ���
2��`<pre>`��һ��������ڶ��д��루Ҳ���ǳɿ�Ĵ��룩
3��`<kbd>`:һ���Ǳ�ʾ�û�Ҫͨ���������������

html����
```
<body>
code���
<div>Bootstrap�Ĵ����������֣�<code>&lt;code&gt;</code>��<code>&lt;pre&gt;</code>��<code>&lt;kbd&gt;</code></div>
pre���
<div>
<pre>
&lt;ul&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;
</pre>
</div>
kbd���
<div>������<kbd>ctrl+c</kbd>�����ƴ��룬Ȼ��ʹ��<kbd>ctrl+v</kbd>��ճ������</div>


<!--�����Ǵ������񲿷�-->

<p>��ʹ��<kbd>ctrl+x</kbd>���ƴ��룬Ȼ��ʹ��<kbd>cctrl+shift+v</kbd>�����ƵĴ���ճ������Ҫ�ĵط���</p>


</body>
```

ҳ��Ч��
![ss](./img/bootstrap_code.jpg)

**���ƴ�������߶�**
```
�߶ȳ���340px���ͻ���Y����ֹ�����
<!--�����Ǵ������񲿷�-->
<pre class="pre-scrollable">
<ol>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
    <li>....</li>
</ol>
</pre>
```
����Ч��
![ssd](./img/bootstrap_code_1.jpg)


**�ܽ�**

* �⼸����ǩ֮ǰ��û�нӴ����ģ��Ҿ����˽⼴�ɡ�
* ����`max-height`��`overflow-y`�����ʹ����ѧϰ��
 
 
## ���
�����Bootstrap��һ���������֮һ��BootstrapΪ����ṩ��1�ֻ�����ʽ��4�ָ�����ʽ�Լ�1��֧����Ӧʽ�ı����ʹ��Bootstrap�ı������У�ֻ��Ҫ��Ӷ�Ӧ�������Ϳ��Եõ���ͬ�ı�����ڽ������������У����ǻ���ϸ����Bootstrap�ı��ʹ�á�

ͬ���ģ�������CSSԤ��������Ϥ�������ʹ��Bootstrap�ṩ��Ԥ����汾��
  ?  LESS�汾����Ӧ���ļ��� tables.less
  ?  Sass�汾����Ӧ���ļ��� _tables.scss

����㲻��LESS��SassҲ����������bootstrap.css�ļ��е�1402��~��1630���п��Բ��ĵ������й���table����ʽ���롣���ڴ���̫�����˴���һһ�о١�

���Ѿ�˵�ˣ�BootstrapΪ���ͬ����ʽ����ṩ�˲�ͬ����������Ҫ������

  ?  .table���������

  ?  .table-striped�������߱��

  ?  .table-bordered�����߿�ı��

  ?  .table-hover�������ͣ�����ı��

  ?  .table-condensed�������ͱ��

  ?  .table-responsive����Ӧʽ���
  
  
### ���--����е���
Bootstrap��Ϊ������Ԫ��`<tr>`�ṩ�����ֲ�ͬ��������ÿ�������������еĲ�ͬ������ɫ������˵�����±���ʾ��
![sss](./img/bootstrap_table_1.jpg)

��ʹ�÷ǳ��ļ򵥣�ֻ��Ҫ��`<tr>`Ԫ��������ϱ��Ӧ�����������ܴﵽ���Լ���Ҫ��Ч����
```
<tr class="active">
    <td>��</td>
</tr>
```
��Ӧ��Դ�룬��鿴bootstrap.css�ļ��е�1484��~��1583�С�

�ر���ʾ�����ˡ�.active��֮�⣬�����ĸ������͡�.table-hover�����ʹ��ʱ��Bootstrap����⼸����ʽҲ������Ӧ������״̬����ʽ���ã����������Ҫ��trԪ�����������ɫ��ʽʱ���ڡ�.table-hover�������ҲҪ����Ӧ�ĵ�����

ע��Ҫʵ������״̬����Ҫ��`<table>`��ǩ�ϼ���table-hover�ࡣ

���´��룺
```
<table class="table-hover">
```

**�ܽ�**
1���о�������Ԥ����`background`�����ԣ������Ҿ��ò�û��ʲô���ѵġ�

### ���--�������

��ҶԱ�񲢲�̫İ����������Bootstrap�еı�����ʹ�ã������е�İ���������������ݣ������ݲ�ͬ�ı���������ҽ���Bootstrap����ʵ��ʹ�÷�����
�Ա��Ľṹ��������ƽʱʹ�ñ����һ���ģ�
```
<table>
<thead>
<tr>
<th>������</th>
��
</tr>
</thead>
<tbody>
<tr>
<td>���Ԫ��</td>
��
</tr>
     ��
</tbody>
</table>
```
�����ر�������������ܱ�����͵�ʱ�򣬽ṹ������������Ĵ��롣
�������
��Bootstrap�У����ڻ��������ͨ��������.table�������ơ������`<table>`Ԫ���в�����κ���������������κ���ʽЧ���ġ���õ������������ֻ��Ҫ��`<table>`Ԫ������ӡ�.table���������Ϳ��Եõ�Bootstrap�Ļ������
```
<table class="table">
��
</table>
```
Bootstrap�Ļ�����񣬴��³�������ͼ��ʾ�����ӣ�
![sss](./img/bootstrap_table_jc.jpg)


��ҪԴ��鿴bootstrap.css�ļ���1402�С���1441�У����ڴ���̫�����˴���һһ�о١�

��.table����Ҫ���������ã�

  ?  �����������margin-bottom:20px�Լ����õ�Ԫ�ھ�

  ?  ��thead�ײ�������һ��2px��ǳ��ʵ��

  ?  ÿ����Ԫ�񶥲�������һ��1px��ǳ��ʵ��
  
  **�ܽ�**
  1��ѧЩ��һ��classΪ`table`
  2: Ϊ������úϲ��߿�ģ�ͣ�
  ```
    .table {
      border-collapse: collapse !important;
    }
  ```
  �Լ���ǰ��ͨ��`cellspacing="0"`�����Ƶġ�
  3������`vertical-align`���Ե��˽��
  
### ���--�����߱��
  
 ��ʱ��Ϊ���ñ������Ķ��ԣ���Ҫ����������������ڰ����ߵ�Ч�����򵥵�˵�����ñ����б�������Ч������Bootstrap��ʵ�����ֱ��
 Ч���������ѣ�ֻ��Ҫ��`<table class="table">`�Ļ���������������.table-striped�����ɣ�
 
 ![dd](./img/bootstrap_table_striped.jpg)
 
 ```
 <table class="table table-striped">
 ��
 </table>
 ```
 ��Ч������������ȣ�������tbody������һ��ǳ��ɫ�ı���ɫ����ʵ��ԭ��Ҳ�ǳ��ļ򵥣�����CSS3�Ľṹ��ѡ������:nth-child����ʵ�֣�
 ���Զ���IE8�Լ��������������û�б�������Ч����
 
 Դ����鿴bootstrap.css�ļ���1465��~��1468�У�
 ```
 .table-striped > tbody > tr:nth-child(odd) > td,
 .table-striped > tbody > tr:nth-child(odd) > th {
 background-color: #f9f9f9;
 } 
 ```
 
 **�ܽ�**
 1�������߱����Ҫ��������һ�������ʹ��`table`,`table-striped`
 
 
### ���--���߿�ı��

![sss](./img/bootstrap_table_border.jpg)
���������ñ�񲿷ֵط��б߿򣬵���ʱ����Ҫ���������б߿�Ч����Bootstrap����ʵ�����ã�Ҳ�������ֱ��Ч���������е�Ԫ�����
һ��1px�ı߿�Bootstrap�д��߿�ı��ʹ�÷����Ͱ����߱���ʹ�÷������ƣ�ֻ��Ҫ�ڻ������`<table class="table">`���������һ��
��.table-bordered���������ɣ�
```
<table  class="table table-bordered">
  ��
</table>
```
��ʽ����ͼ��ʾ��



��Դ����Բ鿴bootstrap.css�ļ���1450��~��1464�У�
```
.table-bordered {
  border: 1px solid #ddd;/*����������ñ߿�*/
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd; /*ÿ����Ԫ�����ñ߿�*/
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;/*��ͷ�ײ��߿�*/
}
```

### ���--������������ı��
�������ͣ�ڱ�����������һ�������ı���ɫ�������ı�����˿��������������ʱ�̸����û������Ķ������һ�е����ݡ�
Bootstrap��ȷû������ʧ������Ҳ���ǵ�����Ч�������ṩ��һ����.table-hover��������ʵ�����ֱ��Ч����
�����ͣ�����ı��ʹ��Ҳ�򵥣�����Ҫ`<table class="table">`Ԫ�������������table-hover�����ɣ�
```
<table class="table table-hover">
��
</table>
```

��Ч��ͼ�п��Կ������������������ĳһ��Ԫ����ʱ����Ԫ�������еı���ɫ������ǳ��ɫ��

�������������Ч����Ҫ��ͨ����hover���¼���ʵ�֣������ˡ�tr:hover��ʱ��th��td�ı���ɫΪ����ɫ��
��Դ����鿴bootstrap.css�ļ��е�1469��~��1472�У�
```
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
background-color: #f5f5f5;
}
```
ע����ʵ���������������񣬿��Ժ�Bootstrap���������ʹ�á��򵥵�˵��ֻҪ��������ı��߱���������Ч������ֻҪ����������ӡ�table-hover�������ͺ��ˡ����磬��ǰ����ܵļ��ֱ����ʹ�ã�
```
<table class="table table-striped table-bordered table-hover">
��
</table>
```

### ���--�����ͱ��
��ν�����ͱ�񣬼���⣬���ǵ�Ԫ��û�ھ�����ھ�����������ھ��С�����仰˵��Ҫʵ�ֽ����ͱ��ֻ��Ҫ���ñ��Ԫ����ھ�padding��ֵ����ô��Bootstrap�У�ͨ��������table-condensed�������˵�Ԫ���ھ�ֵ��
�����ͱ������ã�Ҳֻ����Ҫ��`<table class="table">`���������������table-condensed����
```
<table class="table table-condensed">
��
</table>
```

������Ч��ͼ���Կ�����Bootstrap�н����͵ı�����������𲻴���Ϊֻ�ǽ���Ԫ����ھ���8px����5px��

Դ����鿴bootstrap.css�ļ���1442��~��1449�У�
```
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
padding: 5px;
}
```
������һС�����������������������ģ���Bootstrap����������У����Խ����漸�ֱ����ʽ�����һ��ʹ�ã��Ӷ���������Ϊ�����ı��
��ϵķ���Ҳ�ܼ򵥣�������`<table class="table">`�������������Ҫ�ı����ʽ���͡�

����������ʾ���д�ҿ���Ҳ�����ˣ������������ֱ���벻��������table�������Դ����ʹ��Bootstrap���ʱ��
ǧ��ע�⣬���`<table>`Ԫ����һ������ȱ��������table����

**�ܽ�**
1������һЩcss��ʽ�࣬��ʵ������ҪҪbootstrap�Լ�Ҳ��д
2����������ص�
3�����ڱ�����Щ��ʽ�ǿ��Ե���ʹ�õ�

### ���--��Ӧʽ���
���Ÿ����ֳ��豸�ĳ��֣�Ҫ�������Webҳ���ʺ�ǧ��������豸�������Ӧʽ��Ƶĺ���Խ��Խ�ߡ���Bootstrap��ҲΪ����ṩ����Ӧʽ��
Ч���������Ϊ��Ӧʽ���Bootstrap�ṩ��һ�����������Ҵ���������������.table-responsive��,�������;�����ӦʽЧ����Ȼ��
`<table class="table">`��������������У��������Ҳ�;�����ӦʽЧ����Bootstrap����Ӧʽ���Ч������Ϊ��������������������
С��768pxʱ�����ײ������ˮƽ�����������������������������768pxʱ�����ײ�ˮƽ�������ͻ���ʧ��ʾ�����£�

```
<div class="table-responsive">
<table class="table table-bordered">
   ��
</table>
</div>
```
����Ч�����£�
**����Ч��**
![ss](./img/bootstrap_table_k.jpg)

**խ��Ч��**
![sss](./img/bootstrap_table_nav.jpg)

**�ܽ�**
1�����Ӧ���Ǳ�����ɣ���



table�ο����ף�
http://bootstrap-table.wenzhixin.net.cn/examples/

