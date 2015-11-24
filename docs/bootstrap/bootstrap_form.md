## ������
**����Ҫ����**
���������û���������һ����ҳ�ؼ������õı�����ܹ�����ҳ���û����õĹ�ͨ��
**���г�����Ԫ����Ҫ������**
`�ı����������ѡ��򡢵�ѡ��ť����ѡ��ť���ı���Ͱ�ť`�ȡ�����ÿ���ؼ���������ö�������ͬ�����Ҳ�ͬ��������Ա��ؼ���Ⱦ��
��񶼸��в�ͬ��

ͬ������Ҳ��Bootstrap����еĺ������ݣ��������ҽ���Bootstrap����б���������

**��Դ���ѯ**

Bootstrap��ܵı�����Դ��ռ���˴����Ĵ��룬ͬ���ģ����ݲ�ͬ��Bootstrap�汾����������ɻ�ȡ��Ӧ��Դ�룺

   ?   LESS�汾����ӦԴ�ļ� forms.less

   ? ?  Sass�汾����ӦԴ�ļ� _forms.scss

������Bootstrap�汾�����Բ���bootstrap.css�ļ���1630��~��1991��

��������ʽ���У����Ա�����һЩ��ʼ������ϸ������Բ���bootstrap.css�ļ���110��~��178�С�

���ڻ�������Bootstrap��δ������̫��Ķ�����Ч����ƣ������Ա��ڵ�fieldset��legend��label��ǩ�����˶��ơ��磺
```
/*Դ�������bootstrap.css�ļ���1631��~��1652��*/

fieldset {
min-width: 0;
padding: 0;
margin: 0;
border: 0;
}
legend {
display: block;
width: 100%;
padding: 0;
margin-bottom: 20px;
font-size: 21px;
line-height: inherit;
color: #333;
border: 0;
border-bottom: 1px solid #e5e5e5;
}

label {
display: inline-block;
margin-bottom: 5px;
font-weight: bold;
}
```
��Ҫ����ЩԪ�ص�margin��padding��border�Ƚ�����ϸ�����á�

**form-control�������**
��Ȼ�������⼸��Ԫ��֮�⣬����input��select��textarea��Ԫ�أ���Bootstrap����У�ͨ��������һ������`form-control`��
Ҳ����˵������⼸��Ԫ��ʹ����������form-control��������ʵ��һЩ����ϵĶ���Ч����

1����ȱ����100%
```
width: 100%;
```
2��������һ��ǳ��ɫ��#ccc���ı߿�
```
  border: 1px solid #ccc;
```
3������4px��Բ��
```
border-radius: 4px;
```
4��������ӰЧ��������Ԫ�صõ�����֮ʱ����Ӱ�ͱ߿�Ч���������仯
```
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
```
5��������placeholder����ɫΪ#999
```
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
```
6:������display:block
```
display: block;
```



��ϸ�����bootstrap.css�ļ���1690��~��1732�С�

### 
ˮƽ��
Bootstrap���Ĭ�ϵı��Ǵ�ֱ��ʾ��񣬵��ܶ�ʱ��������Ҫ��ˮƽ����񣨱�ǩ���󣬱��ؼ����ң�����ͼ��

![ss](./img/bootstrap_form_h.jpg)

��Bootstrap�����Ҫʵ��ˮƽ��Ч��������������������������
1����`<form>`Ԫ����ʹ��������form-horizontal����
2�����Bootstrap��ܵ�����ϵͳ�������񲼾ֻ����Ժ���½�����ϸ���⣩

��`<form>`Ԫ����ʹ��������form-horizontal����Ҫ�����¼������ã�
1�����ñ��ؼ�padding��marginֵ��
2���ı䡰form-group���ı�����ʽ������������ϵͳ�ġ�row����(�������������ϵͳ���õ��µķ�����form-horizontalʹ�����������
˵������ϵͳ��ʵ�������ĸ�����λ)

```
/*Դ�������bootstrap.css�ļ���1963��~��1991��*/
.form-horizontal .control-label,
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
padding-top: 7px;
margin-top: 0;
margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
min-height: 27px;
}
.form-horizontal .form-group {
margin-right: -15px;
margin-left: -15px;
}
.form-horizontal .form-control-static {
padding-top: 7px;
}
@media (min-width: 768px) {
.form-horizontal .control-label {
text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
top: 0;
right: 15px;
}
```

����һ���򵥵�ʾ����
```
<form class="form-horizontal" role="form">
<div class="form-group">
  <label for="inputEmail3" class="col-sm-2 control-label">����</label>
  <div class="col-sm-10">
  <input type="email" class="form-control" id="inputEmail3" placeholder="���������������ַ">
  </div>
  </div>
  <div class="form-group">
  <label for="inputPassword3" class="col-sm-2 control-label">����</label>
  <div class="col-sm-10">
  <input type="password" class="form-control" id="inputPassword3" placeholder="������������������">
  </div>
  </div>
  <div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
  <div class="checkbox">
  <label>
  <input type="checkbox">��ס����
  </label>
  </div>
  </div>
  </div>
  <div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
  <button type="submit" class="btnbtn-default">��������</button>
  </div>
</div>
</form>
```
����Ч��
![sss](./img/bootstrap_form_2.jpg)

### ������
��ʱ��������Ҫ�����Ŀؼ�����һ������ʾ�����������ģ�

![sss](./img/bootstrap_form_3.jpg)

��Bootstrap�����ʵ�������ı�Ч��������׾ٵģ���ֻ��Ҫ��`<form>`Ԫ�����������`��form-inline��`���ɡ�
������ʵ��ԭ��ǳ��򵥣��������ؼ���һ����ʾ������Ҫ�����ؼ����ó�������Ԫ�أ�display:inline-block����
/*Դ�������bootstrap.css�ļ���1928��~��1962��*/
```
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
```



�����Ҫ��inputǰ�����һ��label��ǩʱ���ᵼ��input������ʾ�������������������һ��label��ǩ�����Ҳ�����input���У�
����Ҫ��label��ǩҲ����������form-group���У��磺
```
<div class="form-group">
    <label class="sr-only" for="exampleInputEmail2">Email address</label>
</div>
<div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email">
</div>
```

�����������ǻ�����ʵ��˵����
```
<form class="form-inline" role="form">
<div class="form-group">
  <label class="sr-only" for="exampleInputEmail2">����</label>
  <input type="email" class="form-control" id="exampleInputEmail2" placeholder="��������������ַ">
</div>
<div class="form-group">
  <label class="sr-only" for="exampleInputPassword2">����</label>
  <input type="password" class="form-control" id="exampleInputPassword2" placeholder="�����������������">
</div>
<div class="checkbox">
<label>
   <input type="checkbox">��ס����
</label>
</div>
<button type="submit" class="btnbtn-default">��������</button>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�(�鿴Ч����Ҫ�ѽ����������Ϊȫ��)

![sss](./img/bootstrap_form_4.jpg)

�ع�ͷ����ʾ�����������ʣ�Ϊʲô�����label��ǩ������û�з����ڡ�form-group�������������У�inputҲ���ỻ�У�
����label��ǩ��ôû��ʾ�������������ϸ������label��ǩ������һ��������sr-only������ǩû��ʾ���������ʽ����ǩ�����ˡ�
```
/*Դ�������bootstrap.css�ļ���342��~��350��*/
.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
}
```
ע�⣺��ôBootstrapΪʲôҪ��ô���أ��������Ƕ��һ������ʵ���ǵģ����û��Ϊ����ؼ�����label��ǩ����Ļ�Ķ������޷���ȷʶ��
��Ҳ��Bootstrap�����һ���ŵ�֮����Ϊ������Ա������һ���Ŀ��ǡ�

���
**�ܽ�**
����ط����Ǻ�ֵ��ѧϰ��
1��css���ȼ�,,Ȩ��
2��display:inline-block�µ�width�����������Ϊ�ٷֱȵ���ʽ�����ʱ��ᷢ��ʲô��


### ���ؼ�(�����input)
��Bootstrap��ʹ��`inputʱҲ�������type����`�����û��ָ��type���ͣ����޷��õ���ȷ����ʽ��
��ΪBootstrap��ܶ���ͨ��`input[type=��?��](����?�Ŵ���type���ͣ�����˵text���ͣ���Ӧ����input[type=��text��])`����ʽ��
������ʽ�ġ�

Ϊ���ÿؼ��ڸ��ֱ��������ʽ��������Ҫ���������form-control�����磺
```
<form role="form">
<div class="form-group">
<input type="email" class="form-control" placeholder="Enter email">
</div>
</form>
```

**�ܽ�**

* ��bootstrap�в�û��Ϊ`input[type="email"]`ר�ŵ�������ʽ��`email`����ʽ��ʵ��������`form-control`
* ����`form-control`����ʽ����Ҫ��ס��
    1.���Ϊ100%�Ŀ�״Ԫ��
    2.�߶�Ϊ34px�������СΪ14px��
    3��������ɫ��������ɫ������ͼƬ��
    4���߿򣬱߿����л��ȵġ�
* `form-group` 
    1.�������
    2.���õײ���߾�

### ���ؼ�(����ѡ���select)
Bootstrap����е�����ѡ���ʹ�ú�ԭʼ��һ�£�����ѡ������multiple���Ե�ֵΪmultiple��
Bootstrap��ܻ�Ϊ��ЩԪ���ṩͳһ����ʽ����磺
```
<form role="form">
<div class="form-group">
  <select class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  </div>
  <div class="form-group">
  <select multiple class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
</form>
```

**�ܽ�**

* ��ʵ�ص㻹������class��`form-group`��`form-control`

### ���ؼ�(�ı���textarea)
�ı����ԭʼʹ�÷���һ��������`rows`�ɶ�����߶ȣ�����`cols`�����������ȡ�

**�ر�ע��ĵط�**
���textareaԪ���������������form-control����������`��������cols����`��
��ΪBootstrap����еġ�form-control����ʽ�ı��ؼ����Ϊ100%��auto��
```
<form role="form">
  <div class="form-group">
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>
```

### ���ؼ�(��ѡ��checkbox�͵�ѡ��ťradio)

Bootstrap�����checkbox��radio�е����⣬
��Ҫ��checkbox��radio��label��ǩ���ʹ�û����һЩС���⣨��ͷʹ����`��������`����
>��ô����������bootstrap������δ�����أ� 

ʹ��Bootstrap��ܣ�������Ա���迼��̫�ֻ࣬��Ҫ��������ķ���ʹ�ü��ɡ�
```
<form role="form">
<div class="checkbox">
<label>
<input type="checkbox" value="">
��ס����
</label>
</div>
<div class="radio">
<label>
<input type="radio" name="optionsRadios" id="optionsRadios1" value="love" checked>
ϲ��
</label>
</div>
<div class="radio">
<label>
<input type="radio" name="optionsRadios" id="optionsRadios2" value="hate">
��ϲ��
</label>
</div>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�����1����

![ss](./img/bootstrap_form_radio.jpg)


�������ʾ�������ǿ��Ե�֪��
1��������checkbox����radio��ʹ��label��������
2��checkbox��ͬlabel��ǩ������һ����Ϊ��.checkbox����������
3��radio��ͬlabel��ǩ������һ����Ϊ��.radio����������
��Bootstrap����У���Ҫ������.checkbox���͡�.radio����ʽ��������ѡ�򡢵�ѡ��ť���ǩ�Ķ��뷽ʽ��
Դ����鿴bootstrap.css�ļ���1742�С���1762�У�
```
.radio,
.checkbox {
display: block;
min-height: 20px;
padding-left: 20px;
margin-top: 10px;
margin-bottom: 10px;
}
.radio label,
.checkbox label {
display: inline;
font-weight: normal;
cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
float: left;
margin-left: -20px;
}
.radio + .radio,
.checkbox + .checkbox {
margin-top: -5px;
}
```
**�ܽ�**
1��Ϊʲô��ʹ�á�fom-group�����а�����Ҫʹ��"checkbox"������"radio"�����а���
    1.checkbox,radioʹ���˺���ģ�ͽ��ж�λ�����п�״Ԫ�غ���С�߶ȵĶ�λ������ʵ�֡�
    2.`form-group`ֻ��ʵ���˸�����λ�͵ײ�����߾ࡣ
2;��Ҫ��������Ҫʵ��ʲô����Ч���ɡ�    
3��ʹ��class="radio" ��Ҫע����ǣ����û��ʹ���������������.radio input[type="radio"] ��ȴ��ʹ���˸�����λ�ġ�
   


### ���ؼ�(��ѡ��͵�ѡ��ťˮƽ����)

1�����checkbox��Ҫˮƽ���У�ֻ��Ҫ��label��ǩ�����������checkbox-inline��
2�����radio��Ҫˮƽ���У�ֻ��Ҫ��label��ǩ�����������radio-inline��
������ʾ��
```
<form role="form">
  <div class="form-group">
    <label class="checkbox-inline">
      <input type="checkbox"  value="option1">��Ϸ
    </label>
    <label class="checkbox-inline">
      <input type="checkbox"  value="option2">��Ӱ
    </label>
    <label class="checkbox-inline">
    <input type="checkbox"  value="option3">����
    </label>
  </div>
  <div class="form-group">
    <label class="radio-inline">
      <input type="radio"  value="option1" name="sex">����
    </label>
    <label class="radio-inline">
      <input type="radio"  value="option2" name="sex">Ů��
    </label>
    <label class="radio-inline">
      <input type="radio"  value="option3" name="sex">����
    </label>
  </div>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�
![dd](./img/bootstrap_form_radiolist.jpg)

ʵ��Դ����鿴bootstrap.css�ļ���1767�С���1780�У�
```
.radio-inline,
.checkbox-inline {
display: inline-block;
padding-left: 20px;
margin-bottom: 0;
font-weight: normal;
vertical-align: middle;
cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
margin-top: 0;
margin-left: 10px;
}
```

����Ĺؼ���display:inline-block

**�ܽ�**
1��display:block + float:left
2:dispaly:inline-block
3:radio��ǩ��name����

### ���ؼ�(��ť)
��ťҲ�Ǳ���Ҫ�ؼ�֮һ,������ťͨ��ʹ�����������ʵ�֣�

  ?  input[type=��submit��]

  ?  input[type=��button��]

  ?  input[type=��reset��]

  ?  <button>

��Bootstrap����еİ�ť���ǲ���<button>��ʵ�֡�

�й���Bootstrap�а�ť��������������ﲻ�������������Ϊ��ťҲ��Bootstrap����к��Ĳ���֮һ����������ר����һ������������Bootstrap�İ�ť��

�������ô�ҿ���Bootstrap�İ�ť����ʲô����
![dds](./img/bootstrap_form_button.jpg)

### ���ؼ���С
ǰ�濴���ı��ؼ��������Ĵ�С������ͨ�����ÿؼ���height��line-height��padding��font-size��������ʵ�ֿؼ��ĸ߶����á�
����Bootstrap��ܻ��ṩ��������ͬ���������������Ʊ��ؼ��ĸ߶ȡ������������ǣ�
1��`input-sm`:�ÿؼ���������С��С
2��`input-lg`:�ÿؼ���������С����

�������������ڱ��е�input��textarea��select�ؼ�������ʹ�����£�
```
<input class="form-control input-lg" type="text" placeholder="���.input-lg���ؼ����">
<input class="form-control" type="text" placeholder="������С">
<input class="form-control input-sm" type="text" placeholder="���.input-sm���ؼ���С">
```
����Ч�����»�鿴�Ҳ������ڣ�
![ddd](./img/bootstrap_form_size_1.jpg)

Դ�������bootstrap.css�ļ���1795~��1824�У�
```
.input-sm {
height: 30px;
padding: 5px 10px;
font-size: 12px;
line-height: 1.5;
border-radius: 3px;
}
select.input-sm {
height: 30px;
line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
height: auto;
}
.input-lg {
height: 46px;
padding: 10px 16px;
font-size: 18px;
line-height: 1.33;
border-radius: 6px;
}
select.input-lg {
height: 46px;
line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
height: auto;
}
```

�������Դ���в��ѷ��֣������ǡ�input-sm�����ǡ�input-lg�����Կؼ��߶����˴���
�������ܶ�ʱ��������Ҫ�ؼ����ҲҪ��һ���ı仯�������ʱ���Ҫ��סBootstrap��ܵ�����ϵͳ��
����Ŀؼ��Ŀ��ȫ��100%
������Ҫ���Ʊ���ȣ���������������ʹ�ã�
```
<form role="form" class="form-horizontal">
  <div class="form-group">
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  </div>
    ��
</form>
```
ע�����񲼾��ں����½��л������ϸ���⡣

����Ч�����»�鿴�Ҳ������ڣ�
![ss](./img/bootstrap_form_size_2.jpg)


ǰ�����ˮƽ��ʱ˵���������ʹ����������form-horizontal�������С�form-group�����൱������ϵͳ�еġ�row����
���仰˵�����û����������Ҫͨ������ϵͳ�����Ʊ��ؼ���ȣ�����Ҫ����ʹ�ã�
```
<div class="row">
<div class="col-xs-4">
<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
</div>
<div class="col-xs-4">
<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
</div>
<div class="col-xs-4">
<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
</div>
</div>
```

**�ܽ�**
1��`input-sm`
2:`input-lg`
3:`row`
4:`form-horizontal`
5:`col-xs-4`

### ���ؼ�״̬(����״̬)
**����״̬**
ͨ��α�ࡰ:focus����ʵ�֡�

**Bootstrap����б��ؼ��Ľ���״̬**
ɾ����outline��Ĭ����ʽ�����������ӰЧ����
```
.form-control:focus {
border-color: #66afe9;
outline: 0;
  -webkit-box-shadow: inset 0 1px 1pxrgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
box-shadow: inset 0 1px 1pxrgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
```
 ��Դ�������ǿ��Կ�����Ҫ�ÿؼ��ڽ���״̬����������ʽЧ������Ҫ���ؼ����������form-control����
```
<form role="form" class="form-horizontal">
  <div class="form-group">
    <div class="col-xs-6">
      <input class="form-control input-lg" type="text" placeholder="���ǽ���״̬��Ч��">
    </div>
    <div class="col-xs-6">
      <input class="form-control input-lg" type="text" placeholder="�����״̬��Ч��">
    </div>
  </div>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�



����굥�������ʹ���ý���Ϳ��Կ���������ɫ�߿�Ч����

��Bootstrap����У�file��radio��checkbox�ؼ��ڽ���״̬�µ�Ч��Ҳ����ͨ��input�ؼ���̫һ������Ҫ����ΪBootstrap����������һЩ���⴦��
/*Դ��鿴boostrap.css�ļ���1676�С���1682��*/
```
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
outline: thin dotted;
outline: 5px auto -webkit-focus-ring-color;
outline-offset: -2px;
}
```
**�ܽ�**
��bootstrap�Ѿ��Զ���Ϊ`file`,`radio`,`checkbox`�ؼ���������ڻ�ȡ�����ʱ��Ӧ�þ��е�Ч����
��ҳ����Ҳ��������ر�����á�
ѧϰ��һС����Ҫ���˽�α��`:focus`

### ���ؼ�״̬(����״̬)
Bootstrap��ܵı��ؼ��Ľ���״̬����ͨ�ı�����״̬ʵ�ַ�����һ���ģ�����Ӧ�ı��ؼ���������ԡ�disabled����
**���������Ľ���״̬��ͬ����**
Bootstrap�������һЩ��ʽ���Ĵ���
/*Դ����鿴bootstrap.css�ļ���1723�С���1729��*/
```
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
cursor: not-allowed;
background-color: #eee;
opacity: 1;
}
```
1:�����ڿؼ��ϵ���ʽ--��ֹ
2��������ɫ--��ɫ
2����ȫ͸��

**ʹ�÷���Ϊ��**
ֻ��Ҫ����Ҫ���õı��ؼ��ϼ��ϡ�disabled�����ɣ�
```
<input class="form-control" type="text" placeholder="���ѽ��ã���������" disabled>
```

��ʹ���ˡ�form-control���ı��ؼ��У���ʽ�����˽��ñ�����ɫΪ��ɫ���������ͱ���˲�׼�������״��
����ؼ��в�ʹ��������form-control�������õĿؼ�ֻ����һ����׼��������ͳ�����
/*Դ�������bootstrap.css�ļ���1781�С���1794��*/
```
input[type="radio"][disabled],
input[type="checkbox"][disabled],
.radio[disabled],
.radio-inline[disabled],
.checkbox[disabled],
.checkbox-inline[disabled],
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"],
fieldset[disabled] .radio,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox,
fieldset[disabled] .checkbox-inline {
cursor: not-allowed;
}
```
��Bootstrap����У����`fieldset`������`disabled`���ԣ������򶼽����ڱ�����״̬��
```
<form role="form">
<fieldset disabled>
  <div class="form-group">
  <label for="disabledTextInput">���õ������</label>
    <input type="text" id="disabledTextInput" class="form-control" placeholder="��ֹ����">
  </div>
  <div class="form-group">
  <label for="disabledSelect">���õ�������</label>
    <select id="disabledSelect" class="form-control">
  <option>����ѡ��</option>
  </select>
  </div>
  <div class="checkbox">
  <label>
    <input type="checkbox">�޷�ѡ��
  </label>
  </div>
  <button type="submit" class="btnbtn-primary">�ύ</button>
</fieldset>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�
![ss](./img/bootstrap_table_disable_1.jpg)


��˵�����������õ����У����`legend`���������Ļ��������������޷������õġ�����һ������֤һ�£�
```
<form role="form">
<fieldset disabled>
<legend><input type="text" class="form-control" placeholder="��Ȼ����ɫ����ˣ�������û�����ã����ţ�������һ��" /></legend>
    ��
</fieldset>
</form>
```
**����**
1������ĳ��input�Ľ��ã���Ҫ����ʲô���ԵĿ����йأ�
```
ͨ��input�ؼ���disable����
```
2:����ͨ��css�����Ʊ����������?
```
û���ҵ���
�Լ���ǰ�ķ�ʽ�������ÿؼ����ɱ༭���Լ��ؼ���ֻ���ġ�
```

**�ܽ�**
1.���ڵ��������Ľ���:`form-control��ʽ`+`disable����`
2.��������form�Ľ��ã�`fieldset��ǩ`+`disable����`
    �ر�Ҫ��Ҫ�����Ҫ`fieldset��ǩ`�ڲ���`legent��ǩ`��ʱ��Ͳ��������Ľ����ˡ�
    
    
### ���ؼ�״̬(��֤״̬)
��������ʱ������Ҫ������֤��ͬ��Ҳ��Ҫ�ṩ��֤״̬��ʽ����Bootstrap�����ͬ���ṩ�⼸��Ч����
1��.has-warning:����״̬����ɫ��
2��.has-error������״̬����ɫ��
3��.has-success���ɹ�״̬����ɫ��
ʹ�õ�ʱ��ֻ��Ҫ��form-group�����϶�Ӧ���״̬������
```
<form role="form">
<div class="form-group has-success">
  <label class="control-label" for="inputSuccess1">�ɹ�״̬</label>
  <input type="text" class="form-control" id="inputSuccess1" placeholder="�ɹ�״̬" >
</div>
<div class="form-group has-warning">
  <label class="control-label" for="inputWarning1">����״̬</label>
  <input type="text" class="form-control" id="inputWarning1" placeholder="����״̬">
</div>
<div class="form-group has-error">
  <label class="control-label" for="inputError1">����״̬</label>
  <input type="text" class="form-control" id="inputError1" placeholder="����״̬">
</div>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�
![dd](./img/bootstrap_form_confirm_1.jpg)

��Ч�����Կ���������״̬��Ч������һ���ģ�ֻ����ɫ��һ�����ԡ�

��������״̬ʡ��Դ�벻�ڴ�չʾ��
�ܶ�ʱ���ڱ���֤��ʱ�򣬲�ͬ��״̬���ṩ��ͬ�� icon������ɹ���һ���Ժţ��̣���������һ����ţ������ȡ�
��Bootstrap����Ҳ�ṩ��������Ч������������ñ��ڶ�Ӧ��״̬����ʾ icon ������ֻ��Ҫ�ڶ�Ӧ��״̬�����������has-feedback����
��ע�⣬������Ҫ�롰has-error������has-warning���͡�has-success����һ��
```
<form role="form">
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess1">�ɹ�״̬</label>
  <input type="text" class="form-control" id="inputSuccess1" placeholder="�ɹ�״̬" >
  <span class="glyphiconglyphicon-ok form-control-feedback"></span>
</div>
<div class="form-group has-warning has-feedback">
  ......
</div>
<div class="form-group has-error has-feedback">
  ......
</div>
</form>
```
����Ч�����»�鿴�Ҳ������ڣ�
![ddd](./img/bootstrap_form_confirm_2.jpg)


��Ч��ͼ�п��Կ�����ͼ�궼���ҡ��� Bootstrap ��Сͼ�궼��ʹ��@font-face������������������н���������һ�����������ܣ���
���ұ����ڱ��������һ�� span Ԫ�أ������������һ����������ӡ�
```
<span class="glyphiconglyphicon-warning-sign form-control-feedback"></span>   
```

**��Ҫ���������**
�ڱ���֤�Ĳ�ͬ�׶Σ����ڱ���һЩ����
1���ӱ߿���ɫ������
2�����û�������Ϣ���ͣ������������һ���Ĳ�����

### ����ʾ��Ϣ

![dd](./img/bootstrap_form_tooltip.jpg)

`help-block`

`help-inline`

### ��ť

![dd](./img/bootstrap_table_button.jpg)

�밴ť�йص�class������
`btn`
`btn-default`
`btn-primary`
�ȵȰ�!

**��ť��ͬ���Ե���ϸ˵��**
![ss](./img/bootstrap_button_2.jpg)

![ss](./img/bootstrap_button_3.jpg)

**��ť�Ĵ�С����class**
![sss](./img/bootstrap_button_4.jpg)

**��״��ť**
![ssd](./img/bootstrap_button_block.jpg)
�����Ҫ��ͨ��`btn-block`������ʵ�֡�

**����״̬�����ַ�ʽ**
1.input �ؼ���disabled����
2.ʹ��bootstrap�ṩ��class��disabled


### ͼ��
![dd](./img/bootstrap_img_1.jpg)

1��img-responsive����ӦʽͼƬ����Ҫ�������Ӧʽ���
2��img-rounded��Բ��ͼƬ
3��img-circle��Բ��ͼƬ
4��img-thumbnail������ͼƬ

### ͼ��
![dd](./img/bootstrap_icon_1.jpg)

ͼ����ںܶ�ĵط�ʹ�õ�������˵����֤��
���߰�ťͼ��ȵȣ�������Ҫ����Ĳ�����

��Ҫ��Ҫ��ע������Ϊ`glyphicon`

�����������վ�鿴ͼ���һЩ��ϸ��Ϣ
http://getbootstrap.com/components/#glyphicons









   
    
    
    
    
    
    
    
    
  
